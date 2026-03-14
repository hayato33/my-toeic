'use client';

import { useEffect, useState } from 'react';
import { QuizSession, Question } from '@/components/QuizSession';

export default function StudyPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    fetch('/api/questions?limit=10')
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

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
