# My TOEIC

個人用 TOEIC 学習 Web アプリ。SM-2（間隔反復）アルゴリズムと AI フィードバックで効率的なスコアアップを目指す。

**目標スコア:** 現在 550点 → 1年で 700点 → 3年で 800点

## 主な機能

- **単語・文法の4択問題** — シードデータから出題
- **SM-2 間隔反復** — 正答率に応じて次回出題日を自動調整（正解 → 間隔延長、不正解 → リセット）
- **AI フィードバック** — Claude API（claude-haiku-4-5-20251001）が「なぜ間違えたか」「覚え方のヒント」を生成
- **今日のダッシュボード** — 学習ノルマ・継続日数（ストリーク）を表示
- **Google 認証** — Neon Auth（Better Auth）による Google OAuth ログイン

## 技術スタック

| 領域           | 技術                                    |
| -------------- | --------------------------------------- |
| フロントエンド | Next.js 16 + React 19 + Tailwind CSS v4 |
| DB             | Neon PostgreSQL + Prisma 7              |
| 認証           | Neon Auth (Better Auth) + Google OAuth  |
| AI             | Claude API (claude-haiku-4-5-20251001)  |
| デプロイ       | Vercel                                  |
| ユニットテスト | Vitest                                  |
| E2E テスト     | Playwright                              |

## セットアップ

### 前提条件

- Node.js 20.x 以上
- pnpm
- [Neon](https://neon.tech/) アカウント（PostgreSQL DB）
- [Google Cloud Console](https://console.cloud.google.com/) の OAuth クライアント
- [Anthropic API キー](https://console.anthropic.com/)

### 手順

```bash
# 1. リポジトリをクローン
git clone https://github.com/hayato33/my-toeic.git
cd my-toeic

# 2. 依存関係をインストール
pnpm install

# 3. 環境変数を設定
cp .env.example .env
# .env を編集して各値を設定（下記「環境変数」を参照）

# 4. DB マイグレーションを実行
pnpm prisma migrate deploy

# 5. シードデータを投入
pnpm db:seed

# 6. 開発サーバーを起動
pnpm dev
```

ブラウザで http://localhost:3000 を開く。

## 環境変数

`.env.example` を参照して `.env` に設定してください。

| 変数名                 | 説明                                                              |
| ---------------------- | ----------------------------------------------------------------- |
| `DATABASE_URL`         | Neon PostgreSQL の pooled 接続文字列                              |
| `DIRECT_DATABASE_URL`  | Neon PostgreSQL の direct 接続文字列（マイグレーション用）        |
| `ANTHROPIC_API_KEY`    | Anthropic の API キー                                             |
| `GOOGLE_CLIENT_ID`     | Google OAuth クライアント ID                                      |
| `GOOGLE_CLIENT_SECRET` | Google OAuth クライアントシークレット                             |
| `BETTER_AUTH_SECRET`   | Better Auth のセッション署名キー（`openssl rand -hex 32` で生成） |
| `BETTER_AUTH_URL`      | アプリの URL（ローカル: `http://localhost:3000`）                 |

## 開発コマンド

```bash
pnpm dev           # 開発サーバー起動
pnpm build         # 本番ビルド
pnpm lint          # ESLint 実行
pnpm format        # Prettier フォーマット
pnpm test          # ユニットテスト（Vitest）
pnpm test:e2e      # E2E テスト（Playwright）
pnpm db:seed       # シードデータ投入
```

> パッケージマネージャーは `pnpm` を使用してください（npm / yarn / bun は不可）。

## 画面構成

| パス      | 説明                                              |
| --------- | ------------------------------------------------- |
| `/`       | ダッシュボード — 今日のノルマ・ストリーク表示     |
| `/study`  | 学習セッション — 未学習問題を優先してランダム出題 |
| `/review` | 復習キュー — SM-2 で今日期限の問題を出題          |
| `/login`  | ログイン — Google OAuth                           |

## データモデル

```
Question        問題（単語 / 文法）
UserAnswer      回答履歴
ReviewSchedule  SM-2 復習スケジュール（ユーザーごと）
User / Session / Account / Verification  Better Auth 管理
```

## E2E テスト（ローカル）

本番・開発 DB を汚染しないよう、E2E テスト用に Neon ブランチを分離しています。

```bash
# 1. Neon Console で e2e-test ブランチを作成し接続文字列を取得
# 2. .env.test.local を作成
echo 'DATABASE_URL=<e2e-test ブランチの接続文字列>' > .env.test.local

# 3. E2E テストを実行
pnpm test:e2e
```

## アーキテクチャ概要

```
src/
├── app/
│   ├── api/          # API Routes（answers / dashboard / feedback / questions / review）
│   ├── study/        # 学習セッション画面
│   ├── review/       # 復習キュー画面
│   └── login/        # ログイン画面
├── components/       # UI コンポーネント（QuizSession など）
├── lib/
│   ├── auth.ts       # Better Auth 設定
│   ├── prisma.ts     # Prisma クライアント（シングルトン）
│   ├── sm2.ts        # SM-2 アルゴリズム
│   ├── constants.ts  # 定数（SM-2 品質値・日次クォータ）
│   └── date-utils.ts # 日付ユーティリティ（JST 基準）
└── middleware.ts     # 認証ミドルウェア
```
