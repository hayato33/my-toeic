export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { QuizSession } from '@/components/QuizSession';
import { getEndOfDay } from '@/lib/date-utils';

export default async function ReviewPage() {
  const endOfToday = getEndOfDay();

  const schedules = await prisma.reviewSchedule.findMany({
    where: { nextReviewAt: { lt: endOfToday } },
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
