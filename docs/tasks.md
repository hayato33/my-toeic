# MVP タスク一覧

## 0. 環境セットアップ

- [x] Prisma + SQLite の導入・初期設定
- [x] Vitest の導入・設定
- [x] Playwright の導入・設定
- [x] ESLint の設定整備
  - [x] `eslint-plugin-prettier` / `eslint-config-prettier` の導入
  - [x] ESLint ルールの確認・調整（Next.js デフォルト + Prettier 連携）
- [x] Prettier の導入・設定
  - [x] `prettier` のインストール（`pnpm add -D prettier`）
  - [x] `.prettierrc` の作成（設定方針の決定）
  - [x] `.prettierignore` の作成
  - [x] `pnpm format` / `pnpm format:check` スクリプトの追加
- [x] husky + lint-staged の導入・設定（→ 詳細は [`docs/husky-lint-staged.md`](./husky-lint-staged.md)）
  - [x] `husky` / `lint-staged` のインストール
  - [x] `husky init` で Git フックを初期化
  - [x] `.husky/pre-commit` の作成
  - [x] `lint-staged` の設定（ESLint・Prettier・型チェック）

---

## 1. DB スキーマ & シードデータ

- [x] `Question`（問題）モデルの定義
- [x] `UserAnswer`（回答履歴）モデルの定義
- [x] `ReviewSchedule`（復習スケジュール）モデルの定義
- [x] 単語問題のシードデータ作成
- [x] 文法問題のシードデータ作成
- [x] `prisma db seed` の動作確認

---

## 2. API Routes

- [x] `GET /api/questions` — 問題一覧取得（タイプ・日付フィルタ対応）
- [x] `POST /api/answers` — 回答の記録
- [x] `GET /api/review` — 今日の復習キュー取得
- [x] `GET /api/dashboard` — ダッシュボード用データ取得（ノルマ・ストリーク）

---

## 3. SM-2 アルゴリズム

- [x] SM-2 ロジックの実装（`interval`・`easeFactor` の更新）
- [x] 回答記録時に `ReviewSchedule` を更新する処理
- [x] Vitest でユニットテスト

---

## 4. AI フィードバック

- [x] Claude API（claude-haiku-4-5）の接続設定
- [x] `POST /api/feedback` — 解答内容を渡してフィードバック生成
- [x] ローディング・エラー状態のハンドリング
- [x] フォールバック UI の実装（API エラー時に「再読み込み」「スキップ」を表示、学習セッションは継続）

---

## 5. 画面実装

### `/`（ダッシュボード）

- [x] 今日のノルマ（復習 + 新規）件数の表示
- [x] 学習継続日数（ストリーク）の表示
- [x] 「学習を始める」「復習する」ボタン

### `/study`（学習セッション）

- [x] 単語 4 択問題の表示
- [x] 文法 4 択問題の表示
- [x] 解答後に正解・解説の表示
- [x] AI フィードバックの表示
- [x] 正解/不正解の記録（API 呼び出し）

### `/review`（復習キュー）

- [x] 今日の復習対象問題の一覧表示
- [x] 学習セッションと同じ解答フロー

---

## 6. テスト

- [x] SM-2 ロジックのユニットテスト（Vitest）
- [x] API Routes のユニットテスト（Vitest）
- [x] 学習セッション全体の E2E テスト（Playwright）
- [x] 復習フローの E2E テスト（Playwright）

---

## 7. 仕上げ

- [x] レスポンシブ対応（PC メイン）
- [x] ダークモード対応（`globals.css` のカスタムプロパティ活用）
- [x] ビルドエラー・lint エラーの解消

---

## 8. リファクタリング

- [x] 共通型定義の整理（`src/types.ts` に `Question` / `Dashboard` 型を集約）
- [x] 定数の集約（`src/lib/constants.ts` に SM-2 品質値・1日ノルマ値を集約）
- [x] 日付ユーティリティの抽出（`src/lib/date-utils.ts` に今日の開始・終了計算を集約）
- [x] フィードバックプロンプトの分離（`src/lib/prompts/feedback.ts` に移動）
- [x] API フェッチヘルパーの作成（`src/lib/api-client.ts` に fetch ラッパーを集約）
- [x] calculateStreak の抽出（`src/lib/streak.ts` に分離）
- [x] 日付ユーティリティのテスト追加（`src/lib/date-utils.test.ts`）

---

## 9. Neon PostgreSQL 移行

> 詳細: [`docs/neon-migration-plan.md`](./neon-migration-plan.md)

- [x] Neon プロジェクトのセットアップ（Console でプロジェクト作成、接続文字列取得）
- [x] Prisma スキーマの PostgreSQL 対応（provider 変更、userId カラム追加）
- [x] パッケージの入れ替え（better-sqlite3 → @prisma/adapter-neon）
- [x] Prisma クライアントの更新（`src/lib/prisma.ts`）
- [x] マイグレーション実行・Prisma クライアント再生成
- [x] シードデータの投入確認
- [x] 既存テストの修正・通過確認

---

## 10. Neon Auth 導入

> 詳細: [`docs/neon-migration-plan.md`](./neon-migration-plan.md)

- [x] Neon Auth の有効化・Google OAuth 設定
- [x] Better Auth パッケージの導入・設定（`src/lib/auth.ts`）
- [x] Auth API ルートの作成（`/api/auth/[...all]`）
- [x] Auth クライアントの作成（`src/lib/auth-client.ts`）
- [x] ログイン画面の作成（`/login`）
- [x] 認証ミドルウェアの作成（`src/middleware.ts`）
- [x] API ルートの認証対応（全 API に userId フィルタ追加）
- [x] Server Component の認証対応
- [x] ヘッダーにユーザー情報・ログアウト追加
- [x] テスト修正・通過確認

---

## 11. Vercel デプロイ

> 詳細: [`docs/neon-migration-plan.md`](./neon-migration-plan.md)

- [ ] Vercel プロジェクト作成・GitHub 連携
- [ ] 環境変数の設定
- [ ] Prisma のビルド設定（postinstall）
- [ ] Neon Vercel Integration の有効化
- [ ] `.env.example` の更新
- [ ] **E2E テスト用 DB 分離**（Neon ブランチ + `.env.test.local`）⚠️ 現在は開発 DB に直接書き込んでいるため本番デプロイ前に必ず対応すること
- [ ] デプロイ動作確認
