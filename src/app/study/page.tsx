export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { QuizSession } from '@/components/QuizSession';
import { getStartOfDay, getEndOfDay } from '@/lib/date-utils';
import { DAILY_QUOTA } from '@/lib/constants';

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default async function StudyPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');

  const userId = session.user.id;
  const todayStart = getStartOfDay();
  const todayEnd = getEndOfDay();

  // 今日すでに解いた問題IDを取得
  const answeredToday = await prisma.userAnswer.findMany({
    where: {
      userId,
      answeredAt: { gte: todayStart, lt: todayEnd },
    },
    select: { questionId: true },
  });
  const answeredTodayIds = answeredToday.map((a) => a.questionId);

  // 今日未回答の問題を全件取得（ReviewSchedule の有無も含めて）
  const candidates = await prisma.question.findMany({
    where:
      answeredTodayIds.length > 0
        ? { id: { notIn: answeredTodayIds } }
        : undefined,
    include: {
      reviewSchedules: {
        where: { userId },
      },
    },
  });

  // 未学習（ReviewSchedule なし）を優先し、それぞれシャッフル
  const newQuestions = shuffle(
    candidates.filter((q) => q.reviewSchedules.length === 0),
  );
  const reviewedQuestions = shuffle(
    candidates.filter((q) => q.reviewSchedules.length > 0),
  );

  const selected = [...newQuestions, ...reviewedQuestions].slice(
    0,
    DAILY_QUOTA.STUDY_QUESTIONS,
  );

  const questions = selected.flatMap((q) => {
    try {
      const parsed: unknown = JSON.parse(q.choices);
      if (
        !Array.isArray(parsed) ||
        !parsed.every((choice) => typeof choice === 'string')
      ) {
        throw new Error('choices must be string[]');
      }
      return [{ ...q, choices: parsed }];
    } catch (error) {
      console.error(`Failed to parse choices for question ${q.id}`, error);
      return [];
    }
  });

  return (
    <QuizSession
      questions={questions}
      emptyMessage="出題する問題がありません"
      completeTitle="学習完了！"
    />
  );
}
