import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { DAILY_QUOTA } from '@/lib/constants';
import { getStartOfDay, getEndOfDay } from '@/lib/date-utils';
import { calculateStreak } from '@/lib/streak';

export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const startOfToday = getStartOfDay();
  const endOfToday = getEndOfDay();

  const userId = session.user.id;

  const [reviewCount, answeredTodayCount, streak] = await Promise.all([
    // 今日の復習対象数
    prisma.reviewSchedule.count({
      where: {
        userId,
        nextReviewAt: { lt: endOfToday },
      },
    }),
    // 今日すでに回答した問題数
    prisma.userAnswer.count({
      where: {
        userId,
        answeredAt: { gte: startOfToday, lt: endOfToday },
      },
    }),
    // ストリーク計算（連続学習日数）
    calculateStreak(userId),
  ]);

  // 新規問題のノルマ（固定10問/日）
  const newQuotaRemaining = Math.max(
    0,
    DAILY_QUOTA.STUDY_QUESTIONS - answeredTodayCount,
  );

  return NextResponse.json({
    reviewCount,
    newQuotaRemaining,
    answeredTodayCount,
    streak,
  });
}
