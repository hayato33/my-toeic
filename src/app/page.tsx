export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/prisma';
import { auth } from '@/lib/auth';
import { DAILY_QUOTA } from '@/lib/constants';
import { getStartOfDay, getEndOfDay } from '@/lib/date-utils';
import { calculateStreak } from '@/lib/streak';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default async function Home() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect('/login');

  const startOfToday = getStartOfDay();
  const endOfToday = getEndOfDay();

  const userId = session.user.id;

  const [reviewCount, answeredTodayCount, streak] = await Promise.all([
    prisma.reviewSchedule.count({
      where: { userId, nextReviewAt: { lt: endOfToday } },
    }),
    prisma.userAnswer.count({
      where: { userId, answeredAt: { gte: startOfToday, lt: endOfToday } },
    }),
    calculateStreak(userId),
  ]);

  const newQuotaRemaining = Math.max(
    0,
    DAILY_QUOTA.STUDY_QUESTIONS - answeredTodayCount,
  );

  const progressPercent = Math.min(
    100,
    Math.round((answeredTodayCount / DAILY_QUOTA.STUDY_QUESTIONS) * 100),
  );

  return (
    <main>
      <div className="mx-auto max-w-lg">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">ダッシュボード</h1>
          {streak > 0 && (
            <Badge variant="secondary" className="gap-1 px-3 py-1 text-sm">
              🔥 {streak} 日連続
            </Badge>
          )}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                復習
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{reviewCount} 問</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {reviewCount > 0 ? '復習が溜まっています' : '復習なし'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                新規問題
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">残り {newQuotaRemaining} 問</p>
              <p className="mt-1 text-xs text-muted-foreground">
                今日の上限: {DAILY_QUOTA.STUDY_QUESTIONS} 問
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              今日の学習進捗
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                {answeredTodayCount} / {DAILY_QUOTA.STUDY_QUESTIONS} 問回答済み
              </span>
              <span className="text-sm font-semibold">{progressPercent}%</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </CardContent>
        </Card>

        <div className="mb-6">
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            学習モードを選択
          </p>
          <div className="grid grid-cols-3 gap-3">
            <Link href="/study?type=vocabulary" className="block">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
                  <span className="text-2xl">📚</span>
                  <span className="text-sm font-medium">単語</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/study?type=grammar" className="block">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
                  <span className="text-2xl">✏️</span>
                  <span className="text-sm font-medium">文法</span>
                </CardContent>
              </Card>
            </Link>
            <Link href="/study" className="block">
              <Card className="cursor-pointer transition-colors hover:bg-muted/50">
                <CardContent className="flex flex-col items-center gap-2 py-6 text-center">
                  <span className="text-2xl">🎲</span>
                  <span className="text-sm font-medium">ごちゃまぜ</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        {reviewCount === 0 ? (
          <Button variant="outline" size="lg" className="w-full" disabled>
            復習する
          </Button>
        ) : (
          <Button
            render={<Link href="/review" />}
            variant="outline"
            size="lg"
            className="w-full"
          >
            復習する
          </Button>
        )}
      </div>
    </main>
  );
}
