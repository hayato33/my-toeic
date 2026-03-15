import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { sm2 } from '@/lib/sm2';
import { SM2_QUALITY, DEFAULT_EASE_FACTOR } from '@/lib/constants';
import { addDays } from '@/lib/date-utils';

export async function POST(request: NextRequest) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

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
        userId: session.user.id,
      },
    });

    // SM-2 で ReviewSchedule を更新
    const quality = isCorrect ? SM2_QUALITY.CORRECT : SM2_QUALITY.INCORRECT;

    const userId = session.user.id;

    const existing = await tx.reviewSchedule.findUnique({
      where: { questionId_userId: { questionId, userId } },
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
      where: { questionId_userId: { questionId, userId } },
      update: {
        repetitions: result.repetitions,
        interval: result.interval,
        easeFactor: result.easeFactor,
        nextReviewAt,
      },
      create: {
        questionId,
        userId,
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
