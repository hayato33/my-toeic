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
      nextReviewAt: { lt: endOfToday },
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
  // SQLite の date() で日単位に集約（全行メモリロード回避）
  const rows = await prisma.$queryRaw<{ answer_date: string }[]>`
    SELECT date(answeredAt) as answer_date
    FROM UserAnswer
    GROUP BY date(answeredAt)
    ORDER BY answer_date DESC
  `;

  if (rows.length === 0) return 0;

  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const yesterday = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1),
  );
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  // 今日か昨日に学習していなければストリークは0
  if (
    rows[0].answer_date !== todayStr &&
    rows[0].answer_date !== yesterdayStr
  ) {
    return 0;
  }

  let streak = 1;
  for (let i = 1; i < rows.length; i++) {
    const currentDate = new Date(rows[i - 1].answer_date + 'T00:00:00Z');
    const prevDate = new Date(rows[i].answer_date + 'T00:00:00Z');
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
