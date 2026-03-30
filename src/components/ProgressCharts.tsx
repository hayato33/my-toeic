'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import type { ProgressData } from '@/types';

export function ProgressCharts({ data }: { data: ProgressData }) {
  const { dailyActivity } = data;
  const maxTotal = Math.max(...dailyActivity.map((d) => d.total), 1);

  return (
    <Card>
      <CardHeader>
        <CardTitle>過去30日の学習記録</CardTitle>
      </CardHeader>
      <CardContent>
        <svg
          viewBox="0 0 300 100"
          className="h-40 w-full"
          aria-label="過去30日の正解・不正解数"
        >
          {dailyActivity.map((day, i) => {
            const barW = 8;
            const gap = 2;
            const x = i * (barW + gap);
            const correctH = (day.correct / maxTotal) * 90;
            const incorrectH = (day.incorrect / maxTotal) * 90;

            return (
              <g key={day.date}>
                <rect
                  x={x}
                  y={100 - correctH}
                  width={barW}
                  height={correctH}
                  fill="var(--chart-1)"
                />
                <rect
                  x={x}
                  y={100 - correctH - incorrectH}
                  width={barW}
                  height={incorrectH}
                  fill="var(--chart-4)"
                />
              </g>
            );
          })}
        </svg>
        {/* 7日おきに X軸ラベル */}
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          {dailyActivity
            .filter((_, i) => i % 7 === 0 || i === 29)
            .map((d) => (
              <span key={d.date}>{d.date}</span>
            ))}
        </div>
        {/* 凡例 */}
        <div className="mt-2 flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ background: 'var(--chart-1)' }}
            />
            正解
          </span>
          <span className="flex items-center gap-1">
            <span
              className="inline-block h-2 w-2 rounded-sm"
              style={{ background: 'var(--chart-4)' }}
            />
            不正解
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
