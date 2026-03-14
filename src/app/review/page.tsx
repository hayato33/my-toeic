'use client';

import { useEffect, useState } from 'react';
import { QuizSession, Question } from '@/components/QuizSession';

export default function ReviewPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    fetch('/api/review')
      .then((res) => res.json())
      .then((data) =>
        setQuestions(data.map((s: { question: Question }) => s.question)),
      );
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
      emptyMessage="今日の復習はありません"
      completeTitle="復習完了！"
    />
  );
}
