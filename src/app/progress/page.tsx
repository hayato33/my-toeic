export const dynamic = 'force-dynamic';

import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { getStartOfDay } from '@/lib/date-utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ProgressCharts } from '@/components/ProgressCharts';
import type { DailyActivity, TypeStat, ProgressData } from '@/types';

type DailyRow = {
  answer_date: string;
  correct: number;
  incorrect: number;
};

type TypeRow = {
  type: 'vocabulary' | 'grammar';
  total: number;
  correct: number;
};

function buildDailyActivity(rows: DailyRow[], now: number): DailyActivity[] {
  const map = new Map(rows.map((r) => [r.answer_date, r]));
  const result: DailyActivity[] = [];

  for (let i = 29; i >= 0; i--) {
    const d = getStartOfDay(new Date(now - i * 24 * 60 * 60 * 1000));
    const dateStr = d.toISOString().split('T')[0];
    const entry = map.get(dateStr) ?? { correct: 0, incorrect: 0 };

    result.push({
      date: dateStr.slice(5).replace('-', '/'),
      correct: Number(entry.correct),
      incorrect: Number(entry.incorrect),
      total: Number(entry.correct) + Number(entry.incorrect),
    });
  }

  return result;
}

function buildTypeStats(rows: TypeRow[]): TypeStat[] {
  return (['vocabulary', 'grammar'] as const).map((type) => {
    const row = rows.find((r) => r.type === type) ?? {
      total: 0,
      correct: 0,
    };
    const total = Number(row.total);
    const correct = Number(row.correct);

    return {
      type,
      label: type === 'vocabulary' ? '単語' : '文法',
      total,
      correct,
      accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
    };
  });
}

export default async function ProgressPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');

  const userId = session.user.id;
  const now = Date.now();
  const thirtyDaysAgo = getStartOfDay(new Date(now - 29 * 24 * 60 * 60 * 1000));

  const [dailyRows, typeRows] = await Promise.all([
    prisma.$queryRaw<DailyRow[]>`
      SELECT
        DATE("answeredAt")::text AS answer_date,
        COUNT(*) FILTER (WHERE "isCorrect" = true)::int  AS correct,
        COUNT(*) FILTER (WHERE "isCorrect" = false)::int AS incorrect
      FROM "UserAnswer"
      WHERE "userId" = ${userId} AND "answeredAt" >= ${thirtyDaysAgo}
      GROUP BY DATE("answeredAt")
    `,
    prisma.$queryRaw<TypeRow[]>`
      SELECT
        q.type,
        COUNT(*)::int                                        AS total,
        COUNT(*) FILTER (WHERE ua."isCorrect" = true)::int  AS correct
      FROM "UserAnswer" ua
      JOIN "Question" q ON ua."questionId" = q.id
      WHERE ua."userId" = ${userId}
      GROUP BY q.type
    `,
  ]);

  const dailyActivity = buildDailyActivity(dailyRows, now);
  const typeStats = buildTypeStats(typeRows);
  const total = typeStats.reduce((s, t) => s + t.total, 0);
  const correct = typeStats.reduce((s, t) => s + t.correct, 0);
  const overall = {
    total,
    correct,
    accuracy: total > 0 ? Math.round((correct / total) * 100) : 0,
  };

  const progressData: ProgressData = {
    dailyActivity,
    typeStats,
    overall,
  };

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight">学習記録</h1>

      {/* Overall stats */}
      <div className="mb-6 grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              総回答数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{overall.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              正解数
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">{overall.correct}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">
              正解率
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">
              {overall.total > 0 ? `${overall.accuracy}%` : '--'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Type accuracy */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        {typeStats.map((stat) => (
          <Card key={stat.type}>
            <CardHeader>
              <CardTitle className="text-base">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">
                {stat.total > 0 ? `${stat.accuracy}%` : '--'}
              </p>
              <p className="text-sm text-muted-foreground">
                {stat.correct} / {stat.total} 問正解
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <ProgressCharts data={progressData} />
    </div>
  );
}
