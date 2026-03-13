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

function toUTCDateString(date: Date): string {
  return date.toISOString().split('T')[0];
}

async function calculateStreak(): Promise<number> {
  // DB 側で日付ごとにグループ化して取得（全行メモリロード回避）
  const grouped = await prisma.userAnswer.groupBy({
    by: ['answeredAt'],
    _count: true,
    orderBy: { answeredAt: 'desc' },
  });

  if (grouped.length === 0) return 0;

  // UTC ベースでユニーク日付を抽出
  const uniqueDates = Array.from(
    new Set(grouped.map((g) => toUTCDateString(g.answeredAt))),
  )
    .sort()
    .reverse();

  const now = new Date();
  const todayStr = toUTCDateString(now);
  const yesterday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1),
  );
  const yesterdayStr = toUTCDateString(yesterday);

  // 今日か昨日に学習していなければストリークは0
  if (uniqueDates[0] !== todayStr && uniqueDates[0] !== yesterdayStr) {
    return 0;
  }

  let streak = 1;
  for (let i = 1; i < uniqueDates.length; i++) {
    const currentDate = new Date(uniqueDates[i - 1] + 'T00:00:00Z');
    const prevDate = new Date(uniqueDates[i] + 'T00:00:00Z');
    const diffDays = Math.round(
      (currentDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24),
    );

    if (diffDays === 1) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
