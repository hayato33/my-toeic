export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { QuizSession } from '@/components/QuizSession';
import { getEndOfDay } from '@/lib/date-utils';

export default async function ReviewPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');

  const endOfToday = getEndOfDay();

  const userId = session.user.id;

  const schedules = await prisma.reviewSchedule.findMany({
    where: { userId, nextReviewAt: { lt: endOfToday } },
    include: { question: true },
    orderBy: { nextReviewAt: 'asc' },
  });

  const questions = schedules.map((s) => ({
    ...s.question,
    choices: JSON.parse(s.question.choices) as string[],
  }));

  return (
    <QuizSession
      questions={questions}
      emptyMessage="今日の復習はありません"
      completeTitle="復習完了！"
    />
  );
}
