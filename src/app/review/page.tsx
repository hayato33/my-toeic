'use client';

import { useEffect, useState } from 'react';
import { QuizSession, Question } from '@/components/QuizSession';

export default function ReviewPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/review')
      .then((res) => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then((data) =>
        setQuestions(data.map((s: { question: Question }) => s.question)),
      )
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
      emptyMessage="今日の復習はありません"
      completeTitle="復習完了！"
    />
  );
}
