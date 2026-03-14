'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Dashboard = {
  reviewCount: number;
  newQuotaRemaining: number;
  answeredTodayCount: number;
  streak: number;
};

export default function Home() {
  const [dashboard, setDashboard] = useState<Dashboard | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setDashboard)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        データの読み込みに失敗しました
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        読み込み中...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-lg px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold">My TOEIC</h1>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">復習</p>
            <p className="mt-1 text-3xl font-bold">
              {dashboard.reviewCount} 問
            </p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-500 dark:text-zinc-400">新規問題</p>
            <p className="mt-1 text-3xl font-bold">
              残り {dashboard.newQuotaRemaining} 問
            </p>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-center text-lg">
            🔥 連続 <span className="font-bold">{dashboard.streak}</span>{' '}
            日学習中
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            href="/study"
            className="block rounded-lg bg-blue-600 px-6 py-3 text-center text-white hover:bg-blue-700"
          >
            学習を始める
          </Link>
          <Link
            href="/review"
            className={`block rounded-lg border border-zinc-300 px-6 py-3 text-center hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800 ${
              dashboard.reviewCount === 0
                ? 'pointer-events-none opacity-50'
                : ''
            }`}
          >
            復習する
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
          今日の学習: {dashboard.answeredTodayCount} 問回答済み
        </p>
      </div>
    </main>
  );
}
