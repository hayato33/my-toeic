import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getEndOfDay } from '@/lib/date-utils';

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const endOfToday = getEndOfDay();

  const userId = session.user.id;

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
