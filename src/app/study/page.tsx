'use client';

import { useEffect, useState } from 'react';
import { QuizSession, Question } from '@/components/QuizSession';

export default function StudyPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/questions?limit=10')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(setQuestions)
      .catch(() => setError(true));
  }, []);

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
        データの読み込みに失敗しました
      </div>
    );
  }

  if (!questions) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
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
