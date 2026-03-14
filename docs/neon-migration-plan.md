# Neon 移行 & 認証導入 実装計画書

本ドキュメントは MVP 完了後のインフラ移行計画である。
SQLite → Neon PostgreSQL への DB 移行と、Neon Auth（Google 認証）の導入、Vercel デプロイを対象とする。

---

## 背景・動機

- Vercel は読み取り専用ファイルシステムのため、SQLite では動作しない
- Neon PostgreSQL をホスト DB として採用（サーバーレス対応、ブランチ機能あり）
- Neon Auth（Better Auth ベース）で Google ログインを導入し、マルチデバイス対応を実現
- `requirements.md` Phase 3 の「ログイン機能」を前倒しで実装

---

## 技術スタック変更

| 領域     | 現在                                      | 移行後                                       |
| -------- | ----------------------------------------- | -------------------------------------------- |
| DB       | SQLite + `@prisma/adapter-better-sqlite3` | Neon PostgreSQL + `@prisma/adapter-neon`     |
| ORM      | Prisma 7                                  | Prisma 7（変更なし）                         |
| 認証     | なし（固定ユーザー）                      | Neon Auth（Better Auth） + Google OAuth      |
| デプロイ | ローカルのみ                              | Vercel                                       |
| 環境変数 | `DATABASE_URL`（ファイルパス）            | `DATABASE_URL`（Neon 接続文字列） + 認証関連 |

---

## Step 9: Neon PostgreSQL 移行

### ブランチ名: `feat/neon-migration`

### 9-1. Neon プロジェクトのセットアップ

**作業内容:**

1. [Neon Console](https://console.neon.tech/) でプロジェクト作成
2. データベース名: `my-toeic`、リージョン: `ap-northeast-1`（東京）
3. 接続文字列を取得（pooled / direct の両方）

**環境変数（`.env` に追加）:**

```
# Neon PostgreSQL
DATABASE_URL="postgresql://user:pass@ep-xxx.ap-northeast-1.aws.neon.tech/my-toeic?sslmode=require"

# Prisma マイグレーション用（direct connection、pooling なし）
DIRECT_DATABASE_URL="postgresql://user:pass@ep-xxx.ap-northeast-1.aws.neon.tech/my-toeic?sslmode=require"
```

### 9-2. Prisma スキーマの PostgreSQL 対応

**ファイル:** `prisma/schema.prisma`

**変更内容:**

```prisma
generator client {
  provider = "prisma-client"
  output   = "../src/generated/prisma"
}

datasource db {
  provider  = "postgresql"
  url       = env("DATABASE_URL")
  directUrl = env("DIRECT_DATABASE_URL")
}

// enum はそのまま（PostgreSQL ネイティブ対応）
enum QuestionType {
  vocabulary
  grammar
}

model Question {
  id          String       @id @default(cuid())
  type        QuestionType
  content     String
  choices     String       // JSON 文字列のまま維持（将来的に Json 型へ移行検討）
  answer      String
  explanation String
  createdAt   DateTime     @default(now())

  userAnswers    UserAnswer[]
  reviewSchedule ReviewSchedule?
}

model UserAnswer {
  id         String   @id @default(cuid())
  questionId String
  isCorrect  Boolean
  answeredAt DateTime @default(now())
  userId     String   // 追加: 認証ユーザー ID

  question Question @relation(fields: [questionId], references: [id], onDelete: Cascade)

  @@index([questionId])
  @@index([answeredAt])
  @@index([userId])
}

model ReviewSchedule {
  id           String   @id @default(cuid())
  questionId   String
  nextReviewAt DateTime
  interval     Int      @default(1)
  easeFactor   Float    @default(2.5)
  repetitions  Int      @default(0)
  userId       String   // 追加: 認証ユーザー ID

  question Question @relation(fields: [questionId], references: [id], onDelete: Cascade)

  @@unique([questionId, userId]) // ユーザーごとにユニーク
  @@index([nextReviewAt])
  @@index([userId])
}
```

**主な変更点:**

- `provider`: `sqlite` → `postgresql`
- `directUrl` の追加（マイグレーション用）
- `UserAnswer`・`ReviewSchedule` に `userId` カラムを追加
- `ReviewSchedule` のユニーク制約を `questionId` 単体 → `[questionId, userId]` 複合に変更

### 9-3. パッケージの入れ替え

**作業内容:**

```bash
# SQLite 関連を削除
pnpm remove @prisma/adapter-better-sqlite3 better-sqlite3 @types/better-sqlite3

# Neon アダプターを追加
pnpm add @prisma/adapter-neon @neondatabase/serverless
```

### 9-4. Prisma クライアントの更新

**ファイル:** `src/lib/prisma.ts`

```typescript
import { PrismaClient } from '@/generated/prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const databaseUrl = process.env['DATABASE_URL'];
  if (!databaseUrl) {
    throw new Error('DATABASE_URL is not set.');
  }
  const adapter = new PrismaNeon({ connectionString: databaseUrl });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### 9-5. マイグレーション実行

**作業内容:**

```bash
# 既存の SQLite マイグレーションを削除
rm -rf prisma/migrations

# PostgreSQL 向けに初期マイグレーション作成
npx prisma migrate dev --name init

# Prisma クライアント再生成
npx prisma generate
```

### 9-6. シードデータの投入確認

**作業内容:**

- `prisma/seeds/` のシードスクリプトが PostgreSQL で動作することを確認
- `pnpm db:seed` を実行して問題なくデータが入ることを確認

### 9-7. 既存テストの修正

**作業内容:**

- `src/lib/__mocks__/prisma.ts` のモック定義は変更不要（インターフェースは同じ）
- E2E テストは Neon に接続して実行（テスト用ブランチの利用を検討）
- テスト用の Neon ブランチを作成し、`DATABASE_URL` を切り替えて実行する方法を推奨

---

## Step 10: Neon Auth 導入

### ブランチ名: `feat/neon-auth`

### 10-1. Neon Auth の有効化

**作業内容:**

1. Neon Console → プロジェクト設定 → Auth タブで Neon Auth を有効化
2. Google OAuth プロバイダーを有効化（Neon の組み込みクレデンシャルで開発時は設定不要）
3. 本番用には Google Cloud Console で OAuth クライアント ID を取得し、Neon Console に設定

### 10-2. Better Auth パッケージの導入

**作業内容:**

```bash
pnpm add better-auth
```

### 10-3. Better Auth 設定ファイルの作成

**ファイル:** `src/lib/auth.ts`（新規作成）

```typescript
import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from '@/lib/prisma';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  socialProviders: {
    google: {
      clientId: process.env['GOOGLE_CLIENT_ID']!,
      clientSecret: process.env['GOOGLE_CLIENT_SECRET']!,
    },
  },
});
```

> **注**: Neon Auth が提供する組み込み Google クレデンシャルを使う場合、`clientId` / `clientSecret` の設定は Neon Console 側で管理される。ローカル開発時の設定方法は Neon Auth ドキュメントに従う。

### 10-4. Auth API ルートの作成

**ファイル:** `src/app/api/auth/[...all]/route.ts`（新規作成）

```typescript
import { auth } from '@/lib/auth';
import { toNextJsHandler } from 'better-auth/next-js';

export const { GET, POST } = toNextJsHandler(auth);
```

### 10-5. Auth クライアントの作成

**ファイル:** `src/lib/auth-client.ts`（新規作成）

```typescript
import { createAuthClient } from 'better-auth/react';

export const authClient = createAuthClient();
```

### 10-6. ログイン画面の作成

**ファイル:** `src/app/login/page.tsx`（新規作成）

```
┌──────────────────────────────┐
│                              │
│         My TOEIC             │
│                              │
│  ┌─────────────────────────┐ │
│  │ 🔵 Google でログイン    │ │  ← Google OAuth ボタン
│  └─────────────────────────┘ │
│                              │
└──────────────────────────────┘
```

**実装:**

```typescript
'use client';

import { authClient } from '@/lib/auth-client';

export default function LoginPage() {
  function handleGoogleLogin() {
    authClient.signIn.social({ provider: 'google' });
  }

  return (
    <main>
      <div className="mx-auto max-w-lg py-16">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-bold">My TOEIC</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            TOEIC 学習を始めましょう
          </p>
          <button
            onClick={handleGoogleLogin}
            className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Google でログイン
          </button>
        </div>
      </div>
    </main>
  );
}
```

### 10-7. 認証ミドルウェアの作成

**ファイル:** `src/middleware.ts`（新規作成）

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const sessionToken = request.cookies.get('better-auth.session_token');

  // 未認証ユーザーをログインページにリダイレクト
  if (!sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/study',
    '/review',
    '/api/answers',
    '/api/feedback',
    '/api/dashboard',
  ],
};
```

### 10-8. API ルートの認証対応

**対象ファイル:**

- `src/app/api/answers/route.ts`
- `src/app/api/feedback/route.ts`
- `src/app/api/dashboard/route.ts`
- `src/app/api/review/route.ts`
- `src/app/api/questions/route.ts`

**共通パターン:**

```typescript
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

export async function GET() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = session.user.id;
  // userId を使って DB クエリを実行
}
```

**変更点サマリ:**

- 全 API ルートでセッション検証を追加
- `UserAnswer` の作成時に `userId` を含める
- `ReviewSchedule` のクエリに `userId` フィルタを追加
- ダッシュボードのクエリに `userId` フィルタを追加
- `calculateStreak`（`src/lib/streak.ts`）に `userId` パラメータを追加

### 10-9. Server Component の認証対応

**対象ファイル:**

- `src/app/page.tsx`（ダッシュボード）
- `src/app/study/page.tsx`
- `src/app/review/page.tsx`

**共通パターン（Server Component）:**

```typescript
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect('/login');
  }

  const userId = session.user.id;
  // userId を使って DB クエリを実行
}
```

### 10-10. ヘッダーにユーザー情報・ログアウトを追加

**ファイル:** `src/app/layout.tsx`（既存を編集）

- ヘッダー領域にユーザー名（またはアバター）を表示
- ログアウトボタンを追加

---

## Step 11: Vercel デプロイ

### ブランチ名: `feat/vercel-deploy`

### 11-1. Vercel プロジェクトの作成

**作業内容:**

1. [Vercel Dashboard](https://vercel.com/) で GitHub リポジトリをインポート
2. フレームワーク: Next.js（自動検出）
3. ビルドコマンド: `pnpm build`（デフォルト）
4. 出力ディレクトリ: `.next`（デフォルト）

### 11-2. 環境変数の設定

**Vercel ダッシュボードで設定する環境変数:**

| 変数名                 | 説明                                                  |
| ---------------------- | ----------------------------------------------------- |
| `DATABASE_URL`         | Neon 接続文字列（pooled）                             |
| `DIRECT_DATABASE_URL`  | Neon 接続文字列（direct、ビルド時マイグレーション用） |
| `ANTHROPIC_API_KEY`    | Claude API キー                                       |
| `GOOGLE_CLIENT_ID`     | Google OAuth クライアント ID（本番用）                |
| `GOOGLE_CLIENT_SECRET` | Google OAuth クライアントシークレット（本番用）       |
| `BETTER_AUTH_SECRET`   | Better Auth のセッション署名キー                      |
| `BETTER_AUTH_URL`      | 本番 URL（例: `https://my-toeic.vercel.app`）         |

### 11-3. Prisma のビルド設定

**ファイル:** `package.json`

```json
{
  "scripts": {
    "postinstall": "prisma generate",
    "build": "next build"
  }
}
```

> Vercel のビルド時に `prisma generate` が自動実行されるようにする。

### 11-4. Neon ブランチの活用（Preview デプロイ）

**作業内容:**

- Vercel の Preview デプロイ用に Neon ブランチを活用
- Neon の Vercel Integration を有効化すると、PR ごとに DB ブランチが自動作成される

### 11-5. `.env.example` の更新

**ファイル:** `.env.example`

```
# Neon PostgreSQL
DATABASE_URL="postgresql://user:pass@ep-xxx.ap-northeast-1.aws.neon.tech/my-toeic?sslmode=require"
DIRECT_DATABASE_URL="postgresql://user:pass@ep-xxx.ap-northeast-1.aws.neon.tech/my-toeic?sslmode=require"

# Claude API
ANTHROPIC_API_KEY=

# Auth (Neon Auth + Better Auth)
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
```

---

## タスク一覧（`tasks.md` 追記用）

```markdown
## 9. Neon PostgreSQL 移行

- [ ] Neon プロジェクトのセットアップ（Console でプロジェクト作成、接続文字列取得）
- [ ] Prisma スキーマの PostgreSQL 対応（provider 変更、userId カラム追加）
- [ ] パッケージの入れ替え（better-sqlite3 → @prisma/adapter-neon）
- [ ] Prisma クライアントの更新（`src/lib/prisma.ts`）
- [ ] マイグレーション実行・Prisma クライアント再生成
- [ ] シードデータの投入確認
- [ ] 既存テストの修正・通過確認

## 10. Neon Auth 導入

- [ ] Neon Auth の有効化・Google OAuth 設定
- [ ] Better Auth パッケージの導入・設定（`src/lib/auth.ts`）
- [ ] Auth API ルートの作成（`/api/auth/[...all]`）
- [ ] Auth クライアントの作成（`src/lib/auth-client.ts`）
- [ ] ログイン画面の作成（`/login`）
- [ ] 認証ミドルウェアの作成（`src/middleware.ts`）
- [ ] API ルートの認証対応（全 API に userId フィルタ追加）
- [ ] Server Component の認証対応
- [ ] ヘッダーにユーザー情報・ログアウト追加
- [ ] テスト修正・通過確認

## 11. Vercel デプロイ

- [ ] Vercel プロジェクト作成・GitHub 連携
- [ ] 環境変数の設定
- [ ] Prisma のビルド設定（postinstall）
- [ ] Neon Vercel Integration の有効化
- [ ] `.env.example` の更新
- [ ] デプロイ動作確認
```

---

## 注意事項

### データ移行

- MVP のシードデータは `pnpm db:seed` で再投入するため、データ移行スクリプトは不要
- 本番運用開始後にDB移行が必要になった場合は `pg_dump` / `pg_restore` を使用

### ローカル開発

- ローカル開発でも Neon に接続する（SQLite のローカル開発環境は廃止）
- Neon のブランチ機能を活用して、開発用ブランチを作成可能

### 認証テスト

- E2E テストでは認証をバイパスする仕組みが必要（テスト用のセッション Cookie を設定する等）
- ユニットテストではセッション取得をモックする

### 段階的移行

- Step 9（DB 移行）と Step 10（認証）は独立して進められる
- Step 9 完了時点では `userId` にデフォルト値（`'local-user'`）を設定し、既存の動作を維持
- Step 10 で実際の認証ユーザー ID に切り替える
