# 詳細実装計画書

本ドキュメントは `docs/tasks.md` の未完了タスク（Step 4〜7）に対する詳細な実装仕様である。
各サブタスクに対して「作成/変更するファイル」「具体的な実装内容」「注意事項」を記載する。

> **前提**: Step 0〜3 は完了済み。既存の API Routes・SM-2 ロジック・DB スキーマはすべて実装済み。

---

## 既存コード概要（実装時の参照用）

### ディレクトリ構成

```
src/
├── app/
│   ├── layout.tsx              # ルートレイアウト（Geist フォント、globals.css）
│   ├── page.tsx                # ホーム（現在はプレースホルダー）
│   ├── globals.css             # Tailwind v4 + CSS カスタムプロパティ
│   └── api/
│       ├── answers/route.ts    # POST: 回答記録 + SM-2 更新
│       ├── dashboard/route.ts  # GET: ノルマ・ストリーク
│       ├── questions/route.ts  # GET: 問題一覧（type/date/limit フィルタ）
│       └── review/route.ts     # GET: 今日の復習キュー
├── lib/
│   ├── prisma.ts               # Prisma クライアント（BetterSqlite3 アダプター）
│   ├── sm2.ts                  # SM-2 アルゴリズム
│   └── sm2.test.ts             # SM-2 テスト（16件）
└── generated/prisma/           # Prisma 自動生成
```

### DB モデル（prisma/schema.prisma）

- **Question**: `id`, `type`(vocabulary|grammar), `content`, `choices`(JSON 文字列), `answer`, `explanation`, `createdAt`
- **UserAnswer**: `id`, `questionId`, `isCorrect`, `answeredAt`
- **ReviewSchedule**: `id`, `questionId`(unique), `nextReviewAt`, `interval`, `easeFactor`, `repetitions`

### 既存 API レスポンス形式

```typescript
// GET /api/questions?type=vocabulary&limit=10
[{ id, type, content, choices: string[], answer, explanation, createdAt }]

// POST /api/answers  body: { questionId, isCorrect }
{ id, questionId, isCorrect, answeredAt }

// GET /api/review
[{ id, questionId, nextReviewAt, interval, easeFactor, repetitions, question: { ... } }]

// GET /api/dashboard
{ reviewCount, newQuotaRemaining, answeredTodayCount, streak }
```

### 技術スタック

- Next.js 16 + React 19 + TypeScript strict
- Tailwind CSS v4（PostCSS 経由）
- Prisma 7 + SQLite（BetterSqlite3 アダプター）
- Vitest（テスト環境: node）/ Playwright（E2E: chromium）
- パスエイリアス: `@/*` → `./src/*`
- パッケージマネージャー: **pnpm**（npm/yarn 不可）

---

## Step 4: AI フィードバック

### ブランチ名: `feat/ai-feedback`

### 4-1. Anthropic SDK のインストールと環境変数設定

**作業内容:**

1. `pnpm add @anthropic-ai/sdk` を実行
2. `.env` に `ANTHROPIC_API_KEY` を追加（値は空で可、実行時に設定）
3. `.env.example` を作成して必要な環境変数を記載

**`.env` に追記:**

```
ANTHROPIC_API_KEY=your-api-key-here
```

**`.env.example`（新規作成）:**

```
DATABASE_URL="file:./dev.db"
ANTHROPIC_API_KEY=
```

### 4-2. Claude API クライアントの作成

**ファイル:** `src/lib/anthropic.ts`（新規作成）

```typescript
import Anthropic from '@anthropic-ai/sdk';

const globalForAnthropic = globalThis as unknown as {
  anthropic: Anthropic | undefined;
};

function createClient() {
  const apiKey = process.env['ANTHROPIC_API_KEY'];
  if (!apiKey) {
    throw new Error('ANTHROPIC_API_KEY is not set.');
  }
  return new Anthropic({ apiKey });
}

export const anthropic = globalForAnthropic.anthropic ?? createClient();

if (process.env.NODE_ENV !== 'production') {
  globalForAnthropic.anthropic = anthropic;
}
```

**ポイント:**

- Prisma クライアント（`src/lib/prisma.ts`）と同じシングルトンパターンを使用
- 環境変数のバリデーションを含める

### 4-3. POST /api/feedback エンドポイントの作成

**ファイル:** `src/app/api/feedback/route.ts`（新規作成）

**リクエスト:**

```typescript
{
  questionId: string; // 問題 ID
  userAnswer: string; // ユーザーが選んだ選択肢のテキスト
  isCorrect: boolean; // 正解したかどうか
}
```

**レスポンス:**

```typescript
// 成功時 (200)
{
  feedback: string;
}

// エラー時 (400/404/500)
{
  error: string;
}
```

**実装の流れ:**

1. リクエストボディの JSON パース（try-catch で Invalid JSON 対応）
2. `questionId`, `userAnswer`(string), `isCorrect`(boolean) のバリデーション
3. `prisma.question.findUnique({ where: { id: questionId } })` で問題データを取得
4. 問題が見つからなければ 404
5. Claude API を呼び出してフィードバック生成
6. フィードバックテキストをレスポンス

**Claude API 呼び出しの詳細:**

```typescript
import { anthropic } from '@/lib/anthropic';

const message = await anthropic.messages.create({
  model: 'claude-haiku-4-5-20251001',
  max_tokens: 500,
  messages: [
    {
      role: 'user',
      content: `あなたはTOEIC学習のチューターです。以下の問題に対するフィードバックを日本語で簡潔に提供してください。

問題タイプ: ${question.type === 'vocabulary' ? '単語' : '文法'}
問題: ${question.content}
選択肢: ${JSON.parse(question.choices).join(', ')}
正解: ${question.answer}
ユーザーの回答: ${userAnswer}
結果: ${isCorrect ? '正解' : '不正解'}

以下の観点でフィードバックしてください:
${isCorrect ? '- なぜこれが正解なのか簡単な補足\n- 関連する表現や覚え方のヒント' : '- なぜ間違えたのかの分析\n- 正解の覚え方のヒント\n- 似た表現との違い'}

3〜5文程度で簡潔にお願いします。`,
    },
  ],
});

const feedback =
  message.content[0].type === 'text' ? message.content[0].text : '';
```

**エラーハンドリング:**

- Claude API 呼び出しを try-catch で囲む
- API エラー時は `{ error: 'フィードバックの生成に失敗しました。' }` と status 500 を返す
- `ANTHROPIC_API_KEY` 未設定時も 500 エラー

### 4-4. docs/tasks.md の更新

Step 4 の各チェックボックスを `[x]` に更新。

> **注意**: ローディング・エラー状態のハンドリングとフォールバック UI は Step 5（画面実装）の `/study` ページ内で実装する。Step 4 では API エンドポイントのサーバー側エラーハンドリングのみ担当する。

---

## Step 5: 画面実装

### ブランチ名: `feat/screens`

### 5-0. 事前準備: layout.tsx の更新

**ファイル:** `src/app/layout.tsx`（既存を編集）

**変更内容:**

- `metadata.title` を `'My TOEIC'` に変更
- `metadata.description` を `'TOEIC 学習アプリ'` に変更
- `<html lang="en">` → `<html lang="ja">`
- ナビゲーションは不要（各画面にボタンで遷移する設計のため）

### 5-1. `/`（ダッシュボード）

**ファイル:** `src/app/page.tsx`（既存を全面書き換え）

**これは Client Component にする（`'use client'` を先頭に記述）。**

**画面構成:**

```
┌──────────────────────────────┐
│         My TOEIC             │  ← アプリ名（h1）
│                              │
│  ┌────────┐  ┌────────────┐  │
│  │ 復習   │  │ 新規問題   │  │  ← カード 2枚横並び
│  │ 5 問   │  │ 残り 8 問  │  │
│  └────────┘  └────────────┘  │
│                              │
│  ┌─────────────────────────┐ │
│  │ 🔥 連続 3 日学習中     │ │  ← ストリーク表示
│  └─────────────────────────┘ │
│                              │
│  ┌────────────────────┐      │
│  │   学習を始める      │      │  ← メインボタン（/study へ遷移）
│  └────────────────────┘      │
│  ┌────────────────────┐      │
│  │   復習する          │      │  ← サブボタン（/review へ遷移）
│  └────────────────────┘      │
│  今日の学習: 2 問回答済み    │  ← 補足テキスト
└──────────────────────────────┘
```

**データ取得:**

```typescript
// コンポーネント内で fetch
const [dashboard, setDashboard] = useState<{
  reviewCount: number;
  newQuotaRemaining: number;
  answeredTodayCount: number;
  streak: number;
} | null>(null);

useEffect(() => {
  fetch('/api/dashboard')
    .then((res) => res.json())
    .then(setDashboard);
}, []);
```

**UI の実装方針:**

- Tailwind CSS のユーティリティクラスのみで実装（コンポーネントライブラリ不使用）
- `max-w-lg mx-auto` でコンテンツ幅を制限
- `min-h-screen` で画面全体を使う
- ローディング中は「読み込み中...」テキストを表示
- ボタンは `<Link href="/study">` と `<Link href="/review">` を使用（`next/link`）
- 復習が 0 件のとき、「復習する」ボタンは `opacity-50 pointer-events-none` で無効化

**Tailwind カラー方針:**

- 背景: `bg-background`（CSS カスタムプロパティ）
- テキスト: `text-foreground`
- カード: `bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800`
- メインボタン: `bg-blue-600 hover:bg-blue-700 text-white rounded-lg`
- サブボタン: `border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg`

### 5-2. `/study`（学習セッション）

**ファイル:** `src/app/study/page.tsx`（新規作成）

**これは Client Component（`'use client'`）。**

**画面の状態遷移:**

```
[ローディング] → [問題表示] → [結果表示] → [フィードバック表示(任意)] → [次の問題 or 完了]
```

**状態管理（useState）:**

```typescript
type StudyState = 'loading' | 'question' | 'result' | 'feedback' | 'complete';

const [state, setState] = useState<StudyState>('loading');
const [questions, setQuestions] = useState<Question[]>([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
const [feedback, setFeedback] = useState<string | null>(null);
const [feedbackLoading, setFeedbackLoading] = useState(false);
const [feedbackError, setFeedbackError] = useState(false);
```

**Question 型の定義:**

```typescript
type Question = {
  id: string;
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  explanation: string;
};
```

> この型定義は `src/app/study/page.tsx` のファイル内にローカルに記述する。複数ページで共有する場合は `src/types.ts` に切り出す。

**初回ローディング:**

```typescript
useEffect(() => {
  fetch('/api/questions?limit=10')
    .then((res) => res.json())
    .then((data) => {
      setQuestions(data);
      setState(data.length > 0 ? 'question' : 'complete');
    });
}, []);
```

**問題表示画面（state === 'question'）:**

```
┌──────────────────────────────┐
│  問題 1 / 10                 │  ← 進捗表示
│                              │
│  ┌─────────────────────────┐ │
│  │ implement               │ │  ← 問題文（content）
│  └─────────────────────────┘ │
│                              │
│  ┌─────────────────────────┐ │
│  │ ○ 実装する              │ │  ← 選択肢（クリックで選択）
│  ├─────────────────────────┤ │
│  │ ○ 輸入する              │ │
│  ├─────────────────────────┤ │
│  │ ○ 改善する              │ │
│  ├─────────────────────────┤ │
│  │ ○ 暗示する              │ │
│  └─────────────────────────┘ │
└──────────────────────────────┘
```

**選択肢クリック時の処理:**

1. `selectedAnswer` を設定
2. `isCorrect` を `selectedAnswer === question.answer` で判定
3. `POST /api/answers` に `{ questionId, isCorrect }` を送信（await）
4. `state` を `'result'` に遷移

```typescript
async function handleAnswer(choice: string) {
  const question = questions[currentIndex];
  const correct = choice === question.answer;
  setSelectedAnswer(choice);
  setIsCorrect(correct);

  await fetch('/api/answers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ questionId: question.id, isCorrect: correct }),
  });

  setState('result');
}
```

**結果表示画面（state === 'result'）:**

```
┌──────────────────────────────┐
│  問題 1 / 10                 │
│                              │
│  implement                   │
│                              │
│  ✅ 正解！ / ❌ 不正解       │  ← 正解/不正解表示
│                              │
│  正解: 実装する              │
│  あなたの回答: 輸入する      │  ← 不正解時のみ表示
│                              │
│  解説:                       │
│  implement は「実装する、     │
│  実行する」という意味です...  │
│                              │
│  ┌────────────────────┐      │
│  │ フィードバックを見る│      │  ← AI フィードバックボタン
│  └────────────────────┘      │
│  ┌────────────────────┐      │
│  │ 次の問題へ          │      │  ← 次の問題ボタン
│  └────────────────────┘      │
└──────────────────────────────┘
```

**選択肢の色分け（結果画面）:**

- 正解の選択肢: `bg-green-100 dark:bg-green-900/30 border-green-500`
- ユーザーが選んだ不正解の選択肢: `bg-red-100 dark:bg-red-900/30 border-red-500`
- その他の選択肢: `opacity-50`

**「フィードバックを見る」ボタンの処理:**

```typescript
async function handleFeedback() {
  const question = questions[currentIndex];
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
```

**フィードバック表示画面（state === 'feedback'）:**

結果表示画面と同じ内容に加えて、以下を表示:

```
│  ┌─────────────────────────┐ │
│  │ AI フィードバック       │ │
│  │                         │ │
│  │ 「implement」は...      │ │  ← Claude API のレスポンス
│  └─────────────────────────┘ │
│                              │
│  ┌────────────────────┐      │
│  │ 次の問題へ          │      │
│  └────────────────────┘      │
```

**フィードバックのエラー/ローディング状態:**

- `feedbackLoading === true`: ボタンのテキストを「生成中...」に変更し、`disabled` にする
- `feedbackError === true`: エラーメッセージ「フィードバックの取得に失敗しました」を表示し、以下の 2 ボタンを表示:
  - 「再読み込み」 → `handleFeedback()` を再実行
  - 「スキップ」 → `setState('result')` に戻す（フィードバックなしで続行）
- **学習セッションはエラーで中断しない**（「次の問題へ」ボタンは常にアクセス可能）

**「次の問題へ」ボタンの処理:**

```typescript
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
```

**完了画面（state === 'complete'）:**

```
┌──────────────────────────────┐
│                              │
│  🎉 学習完了！               │
│                              │
│  10 問中 8 問正解            │  ← 正答数の表示
│                              │
│  ┌────────────────────┐      │
│  │ ダッシュボードに戻る│      │  ← Link href="/"
│  └────────────────────┘      │
└──────────────────────────────┘
```

正答数を表示するために、正解数をカウントする state を追加:

```typescript
const [correctCount, setCorrectCount] = useState(0);

// handleAnswer 内で:
if (correct) setCorrectCount((c) => c + 1);
```

### 5-3. `/review`（復習キュー）

**ファイル:** `src/app/review/page.tsx`（新規作成）

**これは Client Component（`'use client'`）。**

**実装方針: `/study` とほぼ同じ UI・ロジックだが、データ取得元が異なる。**

**差分:**

| 項目                   | `/study`                      | `/review`                                          |
| ---------------------- | ----------------------------- | -------------------------------------------------- |
| データ取得             | `GET /api/questions?limit=10` | `GET /api/review`                                  |
| レスポンスのマッピング | そのまま使用                  | `data.map(s => s.question)` で Question 配列に変換 |
| 完了メッセージ         | 「学習完了！」                | 「復習完了！」                                     |
| 問題がない場合         | 「出題する問題がありません」  | 「今日の復習はありません」                         |

**データ取得部分:**

```typescript
useEffect(() => {
  fetch('/api/review')
    .then((res) => res.json())
    .then((data) => {
      const reviewQuestions = data.map(
        (s: { question: Question }) => s.question,
      );
      setQuestions(reviewQuestions);
      setState(reviewQuestions.length > 0 ? 'question' : 'complete');
    });
}, []);
```

**共通ロジックの扱い:**

`/study` と `/review` で問題表示・回答・フィードバックのロジックが完全に重複する。以下のいずれかの方法で共通化する:

**推奨: コンポーネント切り出し**

`src/components/QuizSession.tsx`（新規作成）として共通の学習セッション UI を切り出す。

```typescript
'use client';

type QuizSessionProps = {
  questions: Question[];
  emptyMessage: string; // 問題がないときのメッセージ
  completeTitle: string; // 完了時のタイトル
};

export function QuizSession({
  questions,
  emptyMessage,
  completeTitle,
}: QuizSessionProps) {
  // 問題表示・回答・フィードバック・完了の全ロジックをここに
}
```

そして各ページはデータ取得だけ担当:

```typescript
// src/app/study/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { QuizSession } from '@/components/QuizSession';

export default function StudyPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    fetch('/api/questions?limit=10')
      .then((res) => res.json())
      .then(setQuestions);
  }, []);

  if (!questions) return <div className="...">読み込み中...</div>;

  return (
    <QuizSession
      questions={questions}
      emptyMessage="出題する問題がありません"
      completeTitle="学習完了！"
    />
  );
}
```

```typescript
// src/app/review/page.tsx
'use client';
import { useEffect, useState } from 'react';
import { QuizSession } from '@/components/QuizSession';

export default function ReviewPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);

  useEffect(() => {
    fetch('/api/review')
      .then((res) => res.json())
      .then((data) => setQuestions(data.map((s: any) => s.question)));
  }, []);

  if (!questions) return <div className="...">読み込み中...</div>;

  return (
    <QuizSession
      questions={questions}
      emptyMessage="今日の復習はありません"
      completeTitle="復習完了！"
    />
  );
}
```

### 5-4. docs/tasks.md の更新

Step 5 の各チェックボックスを `[x]` に更新。

---

## Step 6: テスト

### ブランチ名: `test/coverage`

### 6-1. API Routes のユニットテスト（Vitest）

**テスト対象と方針:**

API Route のハンドラは `NextRequest` を受け取り `NextResponse` を返す関数。直接インポートしてテストする。

ただし、Prisma の DB アクセスが含まれるため、**Prisma をモック**する。

**Prisma モックのセットアップ:**

`src/lib/__mocks__/prisma.ts`（新規作成）:

```typescript
import { vi } from 'vitest';

export const prisma = {
  question: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
  },
  userAnswer: {
    create: vi.fn(),
    count: vi.fn(),
  },
  reviewSchedule: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
    upsert: vi.fn(),
    count: vi.fn(),
  },
  $queryRaw: vi.fn(),
};
```

各テストファイルの冒頭で:

```typescript
vi.mock('@/lib/prisma', () => import('@/lib/__mocks__/prisma'));
```

#### 6-1a. GET /api/questions テスト

**ファイル:** `src/app/api/questions/route.test.ts`（新規作成）

**テストケース:**

1. **全件取得**: パラメータなしで `findMany` が呼ばれ、choices が JSON パースされたレスポンスが返る
2. **type フィルタ**: `?type=vocabulary` で `where.type` が設定される
3. **無効な type**: `?type=invalid` で type フィルタが無視される（全件返す）
4. **limit**: `?limit=5` で `take: 5` が渡される
5. **無効な limit**: `?limit=-1` や `?limit=abc` で limit が無視される
6. **date フィルタ**: `?date=2026-01-01` で `createdAt` の範囲フィルタが設定される

**テストの書き方（例）:**

```typescript
import { GET } from './route';
import { NextRequest } from 'next/server';
import { vi, describe, it, expect, beforeEach } from 'vitest';

vi.mock('@/lib/prisma', () => import('@/lib/__mocks__/prisma'));
import { prisma } from '@/lib/prisma';

const mockPrisma = prisma as unknown as {
  question: { findMany: ReturnType<typeof vi.fn> };
};

describe('GET /api/questions', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('全件取得できる', async () => {
    mockPrisma.question.findMany.mockResolvedValue([
      {
        id: '1',
        type: 'vocabulary',
        content: 'test',
        choices: '["a","b"]',
        answer: 'a',
        explanation: 'x',
        createdAt: new Date(),
      },
    ]);

    const request = new NextRequest('http://localhost:3000/api/questions');
    const response = await GET(request);
    const data = await response.json();

    expect(data).toHaveLength(1);
    expect(data[0].choices).toEqual(['a', 'b']); // JSON パースされている
  });
});
```

#### 6-1b. POST /api/answers テスト

**ファイル:** `src/app/api/answers/route.test.ts`（新規作成）

**テストケース:**

1. **正常系（正解）**: UserAnswer が作成され、ReviewSchedule が upsert される
2. **正常系（不正解）**: SM-2 で quality=1 が使われる
3. **バリデーション**: `questionId` 未指定で 400
4. **バリデーション**: `isCorrect` が boolean でないとき 400
5. **存在しない問題**: questionId が存在しないとき 404
6. **不正な JSON**: リクエストボディが不正 JSON のとき 400

#### 6-1c. GET /api/review テスト

**ファイル:** `src/app/api/review/route.test.ts`（新規作成）

**テストケース:**

1. **正常系**: 復習対象が返る（choices が JSON パースされている）
2. **空の場合**: 復習対象がないとき空配列

#### 6-1d. GET /api/dashboard テスト

**ファイル:** `src/app/api/dashboard/route.test.ts`（新規作成）

**テストケース:**

1. **正常系**: reviewCount, newQuotaRemaining, answeredTodayCount, streak が返る
2. **未学習状態**: 回答がないとき streak=0, answeredTodayCount=0, newQuotaRemaining=10
3. **ノルマ達成済み**: answeredTodayCount=10 のとき newQuotaRemaining=0

### 6-2. E2E テスト（Playwright）

**前提:**

- Playwright は `pnpm test:e2e` で実行（`playwright.config.ts` で dev サーバーを自動起動）
- テスト実行前に `pnpm db:seed` でシードデータを投入しておく

#### 6-2a. 学習セッションの E2E テスト

**ファイル:** `e2e/study.spec.ts`（新規作成）

**テストシナリオ:**

```typescript
import { test, expect } from '@playwright/test';

test.describe('学習セッション', () => {
  test('問題に回答して結果が表示される', async ({ page }) => {
    // 1. ダッシュボードにアクセス
    await page.goto('/');

    // 2. 「学習を始める」ボタンをクリック
    await page.click('text=学習を始める');

    // 3. /study に遷移していることを確認
    await expect(page).toHaveURL('/study');

    // 4. 問題が表示されるのを待つ
    await expect(page.locator('text=問題 1')).toBeVisible();

    // 5. 選択肢が 4 つ表示されていることを確認
    // （選択肢のボタン要素を特定）
    const choices = page.locator('[data-testid="choice"]');
    await expect(choices).toHaveCount(4);

    // 6. 最初の選択肢をクリック
    await choices.first().click();

    // 7. 結果画面が表示されることを確認（「正解」or「不正解」のテキスト）
    await expect(
      page.locator('text=正解').or(page.locator('text=不正解')),
    ).toBeVisible();

    // 8. 解説が表示されていることを確認
    await expect(page.locator('text=解説')).toBeVisible();

    // 9. 「次の問題へ」ボタンが表示されていることを確認
    await expect(page.locator('text=次の問題へ')).toBeVisible();
  });

  test('全問回答後に完了画面が表示される', async ({ page }) => {
    await page.goto('/study');

    // 全問回答する（10問）
    for (let i = 0; i < 10; i++) {
      await page.locator('[data-testid="choice"]').first().click();
      // 最後の問題以外は「次の問題へ」をクリック
      if (i < 9) {
        await page.click('text=次の問題へ');
      }
    }

    // 完了画面の表示を確認
    await expect(page.locator('text=学習完了')).toBeVisible();
    await expect(page.locator('text=ダッシュボードに戻る')).toBeVisible();
  });
});
```

> **重要**: 選択肢ボタンには `data-testid="choice"` 属性を付与すること（Step 5 の実装時に含める）。

#### 6-2b. 復習フローの E2E テスト

**ファイル:** `e2e/review.spec.ts`（新規作成）

**テストシナリオ:**

```typescript
import { test, expect } from '@playwright/test';

test.describe('復習フロー', () => {
  test('復習対象がないとき適切なメッセージが表示される', async ({ page }) => {
    // 初期状態では ReviewSchedule にデータがないため
    await page.goto('/review');
    await expect(page.locator('text=今日の復習はありません')).toBeVisible();
  });

  test('ダッシュボードから復習画面に遷移できる', async ({ page }) => {
    await page.goto('/');
    // 復習ボタンの存在を確認
    await expect(page.locator('text=復習する')).toBeVisible();
  });
});
```

### 6-3. docs/tasks.md の更新

Step 6 の各チェックボックスを `[x]` に更新。

---

## Step 7: 仕上げ

### ブランチ名: `polish/responsive`

### 7-1. レスポンシブ対応（PC メイン）

**対象ファイル:** Step 5 で作成した各ページコンポーネント

**方針:**

- **PC メイン**なので、モバイル対応は最低限
- `max-w-lg mx-auto px-4` をベースコンテナとして使用（ダッシュボード・学習画面共通）
- レスポンシブブレークポイント:
  - `sm:` (640px〜): カードを横並びに
  - デフォルト（〜640px）: カードを縦並びに

**具体的な変更:**

1. ダッシュボードのカード: `grid grid-cols-1 sm:grid-cols-2 gap-4`
2. ボタン: `w-full sm:w-auto` でモバイルでは横幅いっぱい
3. 問題文: `text-lg sm:text-xl` でサイズ調整
4. 全体のパディング: `p-4 sm:p-8`

### 7-2. ダークモード対応

**対象ファイル:** `src/app/globals.css` + 各ページコンポーネント

**現状の `globals.css`:**

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

**方針:**

- `prefers-color-scheme: dark` メディアクエリに加え、Tailwind の `dark:` プレフィックスを活用
- Step 5 の実装時に `dark:` バリアントを含めて実装しておく（Step 7 では最終確認と微調整）
- globals.css にカード背景やボーダー用のカスタムプロパティを追加:

```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --card: #ffffff;
  --card-border: #e4e4e7;
  --muted: #71717a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
    --card: #18181b;
    --card-border: #27272a;
    --muted: #a1a1aa;
  }
}
```

**Tailwind テーマの拡張（globals.css 内の `@theme inline`）:**

```css
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-border: var(--card-border);
  --color-muted: var(--muted);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}
```

### 7-3. ビルドエラー・lint エラーの解消

**手順:**

1. `pnpm build` を実行してエラーを確認
2. `pnpm lint` を実行してエラーを確認
3. `pnpm format:check` を実行してフォーマットを確認
4. `pnpm test` を実行してテストの通過を確認
5. `pnpm test:e2e` を実行して E2E テストの通過を確認
6. 全コマンドがエラーなしで通るまで修正

**よくあるエラーと対処:**

- `next/image` の未使用 import → 削除
- `any` 型の使用 → 適切な型を付与
- `eslint-disable` の放置 → 根本原因を修正して削除
- Tailwind のクラス順序 → Prettier プラグインで自動修正

### 7-4. docs/tasks.md の更新

Step 7 の各チェックボックスを `[x]` に更新。

---

## Step 8: リファクタリング

### ブランチ名: `refactor/cleanup`

### 8-1. 共通型定義の整理

**ファイル:** `src/types.ts`（新規作成）

`Question` 型を `QuizSession.tsx` から移動し、`Dashboard` 型を `page.tsx` から移動して集約する。

```typescript
export type Question = {
  id: string;
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  explanation: string;
};

export type Dashboard = {
  reviewCount: number;
  newQuotaRemaining: number;
  answeredTodayCount: number;
  streak: number;
};
```

各ファイルのインポートを `@/types` に変更する。

### 8-2. 定数の集約（`DEFAULT_EASE_FACTOR` 含む）

**ファイル:** `src/lib/constants.ts`（新規作成）

```typescript
export const SM2_QUALITY = {
  CORRECT: 4,
  INCORRECT: 1,
} as const;

export const DAILY_QUOTA = {
  NEW_QUESTIONS: 10,
} as const;

export const DEFAULT_EASE_FACTOR = 2.5;
```

- `src/app/api/answers/route.ts` の `QUALITY_CORRECT` / `QUALITY_INCORRECT` を置き換え
- `src/app/api/dashboard/route.ts` の `NEW_QUESTIONS_PER_DAY` を置き換え

### 8-3. 日付ユーティリティの抽出

**ファイル:** `src/lib/date-utils.ts`（新規作成）

```typescript
export function getStartOfDay(date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function getEndOfDay(date = new Date()): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
}
```

- `src/app/api/dashboard/route.ts` の日付計算を置き換え
- `src/app/api/review/route.ts` の日付計算を置き換え

### 8-4. フィードバックプロンプトの分離

**ファイル:** `src/lib/prompts/feedback.ts`（新規作成）

```typescript
type FeedbackPromptParams = {
  type: 'vocabulary' | 'grammar';
  content: string;
  choices: string[];
  answer: string;
  userAnswer: string;
  isCorrect: boolean;
};

export function buildFeedbackPrompt(params: FeedbackPromptParams): string {
  // feedback/route.ts のプロンプト文字列をここに移動
}
```

`src/app/api/feedback/route.ts` でインポートして使用する。

### 8-5. API フェッチヘルパーの作成

**ファイル:** `src/lib/api-client.ts`（新規作成）

```typescript
export async function apiFetch<T>(
  url: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json() as Promise<T>;
}
```

- `src/app/page.tsx` の fetch 処理を置き換え
- `src/app/study/page.tsx` の fetch 処理を置き換え
- `src/app/review/page.tsx` の fetch 処理を置き換え

### 8-6. `calculateStreak` の抽出

**ファイル:** `src/lib/streak.ts`（新規作成）

`dashboard/route.ts` の `calculateStreak` 関数（約40行）をそのまま抽出し、`src/lib/streak.ts` に分離する。

```typescript
import { prisma } from '@/lib/prisma';

export async function calculateStreak(): Promise<number> {
  // dashboard/route.ts から移動
}
```

`src/app/api/dashboard/route.ts` では `import { calculateStreak } from '@/lib/streak'` に変更する。

### 8-7. 日付ユーティリティのテスト

**ファイル:** `src/lib/date-utils.test.ts`（新規作成）

`getStartOfDay`, `getEndOfDay`, `addDays` の 3 関数に対して境界値含む 8 ケース程度のテストを作成する。

### 8-8. docs/tasks.md の更新

Step 8 の各チェックボックスを `[x]` に更新。

---

## 全体のワークフロー（各ステップ共通）

1. `main` ブランチから作業ブランチを切る
2. サブタスクごとにコミットを積む
3. サブタスク完了時に `docs/tasks.md` を更新
4. 全サブタスク完了後、push
5. `coderabbit --prompt-only` でレビューを受け、指摘を修正
6. PR 作成（body に `@Copilot レビューは日本語でお願いします。` を含める）
7. `/pr-comments` で Copilot レビュー対応 → 修正 → 対応コメント追加 → スレッド resolve
8. main にマージ
