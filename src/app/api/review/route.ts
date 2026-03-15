import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getEndOfDay } from '@/lib/date-utils';

export async function GET() {
  const endOfToday = getEndOfDay();

  const userId = 'local-user';

  const schedules = await prisma.reviewSchedule.findMany({
    where: {
      userId,
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
