import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

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

  const answer = await prisma.userAnswer.create({
    data: {
      questionId,
      isCorrect,
    },
  });

  return NextResponse.json(answer, { status: 201 });
}
