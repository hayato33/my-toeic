import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

const NEW_QUESTIONS_PER_DAY = 10;

export async function GET() {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
  );
  const endOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
  );

  // 今日の復習対象数
  const reviewCount = await prisma.reviewSchedule.count({
    where: {
      nextReviewAt: { lte: endOfToday },
    },
  });

  // 今日すでに回答した問題数
  const answeredTodayCount = await prisma.userAnswer.count({
    where: {
      answeredAt: { gte: startOfToday, lt: endOfToday },
    },
  });

  // 新規問題のノルマ（固定10問/日）
  const newQuotaRemaining = Math.max(
    0,
    NEW_QUESTIONS_PER_DAY - answeredTodayCount,
  );

  // ストリーク計算（連続学習日数）
  const streak = await calculateStreak();

  return NextResponse.json({
    reviewCount,
    newQuotaRemaining,
    answeredTodayCount,
    streak,
  });
}

async function calculateStreak(): Promise<number> {
  // 回答履歴から日付ごとにグループ化し、連続日数を計算
  const answers = await prisma.userAnswer.findMany({
    select: { answeredAt: true },
    orderBy: { answeredAt: 'desc' },
  });

  if (answers.length === 0) return 0;

  const uniqueDates = new Set<string>();
  for (const a of answers) {
    const dateStr = a.answeredAt.toISOString().split('T')[0];
    uniqueDates.add(dateStr);
  }

  const sortedDates = Array.from(uniqueDates).sort().reverse();

  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // 今日か昨日に学習していなければストリークは0
  if (sortedDates[0] !== todayStr && sortedDates[0] !== yesterdayStr) {
    return 0;
  }

  let streak = 1;
  for (let i = 1; i < sortedDates.length; i++) {
    const current = new Date(sortedDates[i - 1]);
    const prev = new Date(sortedDates[i]);
    const diffMs = current.getTime() - prev.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
