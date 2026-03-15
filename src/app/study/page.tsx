export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { QuizSession } from '@/components/QuizSession';

export default async function StudyPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');

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
