export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { prisma } from '@/lib/prisma';
import { DAILY_QUOTA } from '@/lib/constants';
import { getStartOfDay, getEndOfDay } from '@/lib/date-utils';
import { calculateStreak } from '@/lib/streak';

export default async function Home() {
  const startOfToday = getStartOfDay();
  const endOfToday = getEndOfDay();

  const [reviewCount, answeredTodayCount, streak] = await Promise.all([
    prisma.reviewSchedule.count({
      where: { nextReviewAt: { lt: endOfToday } },
    }),
    prisma.userAnswer.count({
      where: { answeredAt: { gte: startOfToday, lt: endOfToday } },
    }),
    calculateStreak(),
  ]);

  const newQuotaRemaining = Math.max(
    0,
    DAILY_QUOTA.NEW_QUESTIONS - answeredTodayCount,
  );

  return (
    <main>
      <div className="mx-auto max-w-lg">
        <h1 className="mb-8 text-3xl font-bold">ダッシュボード</h1>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">復習</p>
            <p className="mt-1 text-3xl font-bold">{reviewCount} 問</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">新規問題</p>
            <p className="mt-1 text-3xl font-bold">
              残り {newQuotaRemaining} 問
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-center text-lg">
            🔥 連続 <span className="font-bold">{streak}</span> 日学習中
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/study"
            className="block rounded-lg bg-blue-600 px-6 py-3 text-center text-white hover:bg-blue-700"
          >
            学習を始める
          </Link>
          {reviewCount === 0 ? (
            <span className="block rounded-lg border border-zinc-300 px-6 py-3 text-center opacity-50 dark:border-zinc-700">
              復習する
            </span>
          ) : (
            <Link
              href="/review"
              className="block rounded-lg border border-zinc-300 px-6 py-3 text-center hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              復習する
            </Link>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          今日の学習: {answeredTodayCount} 問回答済み
        </p>
      </div>
    </main>
  );
}
