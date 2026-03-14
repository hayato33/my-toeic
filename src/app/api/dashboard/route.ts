import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { DAILY_QUOTA } from '@/lib/constants';
import { getStartOfDay, getEndOfDay } from '@/lib/date-utils';
import { calculateStreak } from '@/lib/streak';

export async function GET() {
  const startOfToday = getStartOfDay();
  const endOfToday = getEndOfDay();

  const [reviewCount, answeredTodayCount, streak] = await Promise.all([
    // 今日の復習対象数
    prisma.reviewSchedule.count({
      where: {
        nextReviewAt: { lt: endOfToday },
      },
    }),
    // 今日すでに回答した問題数
    prisma.userAnswer.count({
      where: {
        answeredAt: { gte: startOfToday, lt: endOfToday },
      },
    }),
    // ストリーク計算（連続学習日数）
    calculateStreak(),
  ]);

  // 新規問題のノルマ（固定10問/日）
  const newQuotaRemaining = Math.max(
    0,
    DAILY_QUOTA.NEW_QUESTIONS - answeredTodayCount,
  );

  return NextResponse.json({
    reviewCount,
    newQuotaRemaining,
    answeredTodayCount,
    streak,
  });
}
