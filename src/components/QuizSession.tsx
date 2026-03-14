'use client';

import { useState } from 'react';
import Link from 'next/link';

export type Question = {
  id: string;
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  explanation: string;
};

type StudyState = 'question' | 'result' | 'feedback' | 'complete';

type QuizSessionProps = {
  questions: Question[];
  emptyMessage: string;
  completeTitle: string;
};

export function QuizSession({
  questions,
  emptyMessage,
  completeTitle,
}: QuizSessionProps) {
  const [state, setState] = useState<StudyState>(
    questions.length > 0 ? 'question' : 'complete',
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [feedbackLoading, setFeedbackLoading] = useState(false);
  const [feedbackError, setFeedbackError] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const question = questions[currentIndex];

  async function handleAnswer(choice: string) {
    if (isSubmitting || state !== 'question' || !question) return;
    setIsSubmitting(true);

    const correct = choice === question.answer;
    setSelectedAnswer(choice);
    setIsCorrect(correct);
    if (correct) setCorrectCount((c) => c + 1);
    setState('result');
    setIsSubmitting(false);

    // 記録は非同期で実行（失敗しても学習は継続する）
    fetch('/api/answers', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ questionId: question.id, isCorrect: correct }),
    }).catch(() => {});
  }

  async function handleFeedback() {
    if (!question || selectedAnswer === null || isCorrect === null) return;
    setFeedbackLoading(true);
    setFeedbackError(false);

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionId: question.id,
          userAnswer: selectedAnswer,
          isCorrect,
        }),
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setFeedback(data.feedback);
      setState('feedback');
    } catch {
      setFeedbackError(true);
    } finally {
      setFeedbackLoading(false);
    }
  }

  function handleNext() {
    if (currentIndex + 1 >= questions.length) {
      setState('complete');
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setFeedback(null);
      setFeedbackError(false);
      setState('question');
    }
  }

  function getChoiceClass(choice: string) {
    if (state === 'question') {
      return 'border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800';
    }
    if (!question)
      return 'border border-zinc-200 dark:border-zinc-700 opacity-50';
    if (choice === question.answer) {
      return 'border border-green-500 bg-green-100 dark:bg-green-900/30';
    }
    if (choice === selectedAnswer && !isCorrect) {
      return 'border border-red-500 bg-red-100 dark:bg-red-900/30';
    }
    return 'border border-zinc-200 dark:border-zinc-700 opacity-50';
  }

  if (state === 'complete') {
    return (
      <main>
        <div className="mx-auto max-w-lg py-8">
          <div className="flex flex-col items-center gap-6 py-16 text-center">
            <p className="text-5xl">🎉</p>
            <h1 className="text-2xl font-bold">{completeTitle}</h1>
            {questions.length > 0 ? (
              <p className="text-zinc-500 dark:text-zinc-400">
                {questions.length} 問中 {correctCount} 問正解
              </p>
            ) : (
              <p className="text-zinc-500 dark:text-zinc-400">{emptyMessage}</p>
            )}
            <Link
              href="/"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              ダッシュボードに戻る
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (!question) return null;

  return (
    <main>
      <div className="mx-auto max-w-lg py-8">
        <p className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
          問題 {currentIndex + 1} / {questions.length}
        </p>

        <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <p className="text-xl font-medium">{question.content}</p>
        </div>

        <div className="mb-6 flex flex-col gap-2">
          {question.choices.map((choice, idx) => (
            <button
              key={`${choice}-${idx}`}
              data-testid="choice"
              onClick={() => handleAnswer(choice)}
              disabled={isSubmitting || state !== 'question'}
              className={`rounded-lg px-4 py-3 text-left transition-colors ${getChoiceClass(choice)}`}
            >
              {choice}
            </button>
          ))}
        </div>

        {(state === 'result' || state === 'feedback') && (
          <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <p className="mb-3 text-lg font-bold">
              {isCorrect ? '✅ 正解！' : '❌ 不正解'}
            </p>
            {!isCorrect && (
              <p className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
                正解: {question.answer}
                <br />
                あなたの回答: {selectedAnswer}
              </p>
            )}
            <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              解説:
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {question.explanation}
            </p>

            {state === 'feedback' && feedback && (
              <div className="mt-4 border-t border-zinc-200 pt-4 dark:border-zinc-700">
                <p className="mb-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  AI フィードバック
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {feedback}
                </p>
              </div>
            )}
          </div>
        )}

        {state === 'result' && (
          <div className="flex flex-col gap-3">
            {feedbackError && (
              <div className="rounded-lg border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-700 dark:bg-red-900/20 dark:text-red-400">
                フィードバックの取得に失敗しました
                <div className="mt-2 flex gap-2">
                  <button
                    onClick={handleFeedback}
                    className="rounded bg-red-600 px-3 py-1 text-white hover:bg-red-700"
                  >
                    再読み込み
                  </button>
                  <button
                    onClick={() => setFeedbackError(false)}
                    className="rounded border border-red-300 px-3 py-1 hover:bg-red-100 dark:border-red-700 dark:hover:bg-red-900/30"
                  >
                    スキップ
                  </button>
                </div>
              </div>
            )}
            {!feedbackError && (
              <button
                onClick={handleFeedback}
                disabled={feedbackLoading}
                className="rounded-lg border border-zinc-300 px-6 py-3 hover:bg-zinc-100 disabled:opacity-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                {feedbackLoading ? '生成中...' : 'フィードバックを見る'}
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={feedbackLoading}
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
            >
              次の問題へ
            </button>
          </div>
        )}

        {state === 'feedback' && (
          <button
            onClick={handleNext}
            className="w-full rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            次の問題へ
          </button>
        )}
      </div>
    </main>
  );
}
