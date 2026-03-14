import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { sm2 } from '@/lib/sm2';
import { SM2_QUALITY, DEFAULT_EASE_FACTOR } from '@/lib/constants';
import { addDays } from '@/lib/date-utils';

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON.' }, { status: 400 });
  }
  const { questionId, isCorrect } = body;

  if (typeof questionId !== 'string' || typeof isCorrect !== 'boolean') {
    return NextResponse.json(
      { error: 'questionId (string) and isCorrect (boolean) are required.' },
      { status: 400 },
    );
  }

  const question = await prisma.question.findUnique({
    where: { id: questionId },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found.' }, { status: 404 });
  }

  // UserAnswer 作成と ReviewSchedule 更新をトランザクションでまとめる
  const answer = await prisma.$transaction(async (tx) => {
    const created = await tx.userAnswer.create({
      data: {
        questionId,
        isCorrect,
      },
    });

    // SM-2 で ReviewSchedule を更新
    const quality = isCorrect ? SM2_QUALITY.CORRECT : SM2_QUALITY.INCORRECT;

    const existing = await tx.reviewSchedule.findUnique({
      where: { questionId },
    });

    const current = {
      repetitions: existing?.repetitions ?? 0,
      interval: existing?.interval ?? 1,
      easeFactor: existing?.easeFactor ?? DEFAULT_EASE_FACTOR,
      quality,
    };

    const result = sm2(current);
    const nextReviewAt = addDays(new Date(), result.interval);

    await tx.reviewSchedule.upsert({
      where: { questionId },
      update: {
        repetitions: result.repetitions,
        interval: result.interval,
        easeFactor: result.easeFactor,
        nextReviewAt,
      },
      create: {
        questionId,
        repetitions: result.repetitions,
        interval: result.interval,
        easeFactor: result.easeFactor,
        nextReviewAt,
      },
    });

    return created;
  });

  return NextResponse.json(answer, { status: 201 });
}
