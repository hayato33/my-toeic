export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';
import { QuizSession } from '@/components/QuizSession';

export default async function StudyPage() {
  const raw = await prisma.question.findMany({
    take: 10,
    orderBy: { createdAt: 'asc' },
  });

  const questions = raw.map((q) => ({
    ...q,
    choices: JSON.parse(q.choices) as string[],
  }));

  return (
    <QuizSession
      questions={questions}
      emptyMessage="出題する問題がありません"
      completeTitle="学習完了！"
    />
  );
}
