import { prisma } from '@/lib/prisma';

export async function calculateStreak(
  userId: string = 'local-user',
): Promise<number> {
  // PostgreSQL の DATE() で日単位に集約（全行メモリロード回避）
  const rows = await prisma.$queryRaw<{ answer_date: string }[]>`
    SELECT DATE("answeredAt")::text as answer_date
    FROM "UserAnswer"
    WHERE "userId" = ${userId}
    GROUP BY DATE("answeredAt")
    ORDER BY answer_date DESC
  `;

  if (rows.length === 0) return 0;

  const now = new Date();
  const todayStr = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()),
  )
    .toISOString()
    .split('T')[0];
  const yesterdayStr = new Date(
    Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - 1),
  )
    .toISOString()
    .split('T')[0];

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
