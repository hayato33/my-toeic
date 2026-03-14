'use client';

import { useEffect, useState } from 'react';
import type { Question } from '@/types';
import { QuizSession } from '@/components/QuizSession';
import { apiFetch } from '@/lib/api-client';

export default function StudyPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    apiFetch<Question[]>('/api/questions?limit=10')
      .then(setQuestions)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        データの読み込みに失敗しました
      </div>
    );
  }

  if (!questions) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        読み込み中...
      </div>
    );
  }

  return (
    <QuizSession
      questions={questions}
      emptyMessage="出題する問題がありません"
      completeTitle="学習完了！"
    />
  );
}
