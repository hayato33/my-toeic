import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const now = new Date();
  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );

  const schedules = await prisma.reviewSchedule.findMany({
    where: {
      nextReviewAt: { lt: endOfToday },
    },
    include: {
      question: true,
    },
    orderBy: { nextReviewAt: 'asc' },
  });

  const reviewQueue = schedules.map((s) => ({
    ...s,
    question: {
      ...s.question,
      choices: JSON.parse(s.question.choices),
    },
  }));

  return NextResponse.json(reviewQueue);
}
