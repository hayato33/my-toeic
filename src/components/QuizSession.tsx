'use client';

import { useState, useTransition } from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import type { Question } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from '@/components/ui/progress';

export type { Question };

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
  const [feedbackPending, startFeedbackTransition] = useTransition();
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

  function handleFeedback() {
    if (!question || selectedAnswer === null || isCorrect === null) return;
    setFeedbackError(false);

    startFeedbackTransition(async () => {
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
      }
    });
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

  const progressValue =
    questions.length > 0
      ? Math.round((currentIndex / questions.length) * 100)
      : 0;

  if (state === 'complete') {
    return (
      <main>
        <div className="mx-auto max-w-lg py-8">
          <Card>
            <CardContent className="flex flex-col items-center gap-6 py-16 text-center">
              <p className="text-5xl">🎉</p>
              <CardTitle className="text-2xl font-bold">
                {completeTitle}
              </CardTitle>
              {questions.length > 0 ? (
                <p className="text-muted-foreground">
                  {questions.length} 問中{' '}
                  <span className="font-semibold text-foreground">
                    {correctCount} 問
                  </span>
                  正解
                </p>
              ) : (
                <p className="text-muted-foreground">{emptyMessage}</p>
              )}
              <Button size="lg" render={<Link href="/" />}>
                ダッシュボードに戻る
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    );
  }

  if (!question) return null;

  return (
    <main>
      <div className="mx-auto max-w-lg py-8">
        {/* 進捗表示 */}
        <Progress value={progressValue} className="mb-6">
          <ProgressLabel>
            問題 {currentIndex + 1} / {questions.length}
          </ProgressLabel>
          <ProgressValue />
        </Progress>

        {/* 問題カード */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-xl font-medium leading-relaxed">
              {question.content}
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 選択肢 */}
        <div className="mb-6 flex flex-col gap-2">
          {question.choices.map((choice, idx) => (
            <button
              key={`${choice}-${idx}`}
              data-testid="choice"
              onClick={() => handleAnswer(choice)}
              disabled={isSubmitting || state !== 'question'}
              className={`rounded-lg px-4 py-3 text-left text-sm transition-colors ${getChoiceClass(choice)}`}
            >
              {choice}
            </button>
          ))}
        </div>

        {/* 結果・解説カード */}
        {(state === 'result' || state === 'feedback') && (
          <Card className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                {isCorrect ? (
                  <Badge variant="default">正解</Badge>
                ) : (
                  <Badge variant="destructive">不正解</Badge>
                )}
                <span className="text-lg font-bold">
                  {isCorrect ? '✅ 正解！' : '❌ 不正解'}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {!isCorrect && (
                <div className="rounded-lg bg-muted px-3 py-2 text-sm">
                  <p>
                    <span className="font-medium">正解:</span> {question.answer}
                  </p>
                  <p>
                    <span className="font-medium">あなたの回答:</span>{' '}
                    {selectedAnswer}
                  </p>
                </div>
              )}
              <div>
                <p className="mb-1 text-sm font-medium text-foreground">
                  解説:
                </p>
                <p className="text-sm text-muted-foreground">
                  {question.explanation}
                </p>
              </div>

              {state === 'feedback' && feedback && (
                <div className="border-t pt-3">
                  <p className="mb-2 text-sm font-medium text-foreground">
                    AI フィードバック
                  </p>
                  <div className="prose prose-sm prose-zinc dark:prose-invert max-w-none text-sm text-muted-foreground">
                    <ReactMarkdown>{feedback}</ReactMarkdown>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* result 状態のアクションボタン */}
        {state === 'result' && (
          <div className="flex flex-col gap-3">
            {feedbackError && (
              <Card>
                <CardContent className="py-3">
                  <p className="mb-2 text-sm text-destructive">
                    フィードバックの取得に失敗しました
                  </p>
                  <div className="flex gap-2">
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={handleFeedback}
                    >
                      再読み込み
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setFeedbackError(false)}
                    >
                      スキップ
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
            {!feedbackError && (
              <Button
                variant="outline"
                size="lg"
                onClick={handleFeedback}
                disabled={feedbackPending}
                className="w-full"
              >
                {feedbackPending ? '生成中...' : 'フィードバックを見る'}
              </Button>
            )}
            <Button
              size="lg"
              onClick={handleNext}
              disabled={feedbackPending}
              className="w-full"
            >
              次の問題へ
            </Button>
          </div>
        )}

        {/* feedback 状態のアクションボタン */}
        {state === 'feedback' && (
          <Button size="lg" onClick={handleNext} className="w-full">
            次の問題へ
          </Button>
        )}
      </div>
    </main>
  );
}
