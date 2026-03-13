# CLAUDE.md

このファイルはClaudeCode（claude.ai/code）がこのリポジトリで作業する際のガイダンスを提供します。

## コマンド

```bash
pnpm dev          # 開発サーバー起動
pnpm build        # 本番ビルド
pnpm start        # 本番サーバー起動
pnpm lint         # ESLint実行（Prettier連携あり）
pnpm format       # Prettier でフォーマット
pnpm format:check # Prettier フォーマットチェック
pnpm test         # Vitest 実行
pnpm test:watch   # Vitest ウォッチモード
pnpm test:e2e     # Playwright E2E テスト
pnpm db:seed      # シードデータ投入
```

> パッケージマネージャーは `pnpm` を使用すること（npm/yarn/bunは不可）。

## ドキュメント

- `docs/requirements.md` — 要件定義（機能・技術スタック・データモデル・画面構成）
- `docs/tasks.md` — MVP タスク一覧
- `docs/husky-lint-staged.md` — コミット前チェック（husky + lint-staged）の設計

## アーキテクチャ

**Next.js App Router** プロジェクト（Next.js 16、React 19、TypeScript strict mode）。

- **`src/app/`** — App Routerのルート。`layout.tsx`がルートレイアウト、`page.tsx`がホームルート。
- **スタイリング** — Tailwind CSS v4（PostCSS経由）。グローバルスタイルとCSSカスタムプロパティ（ライト/ダークテーマ）は`src/app/globals.css`に記述。
- **パスエイリアス** — `@/*` は `./src/*` にマップ。
- **ユニットテスト** — Vitest（`vitest.config.ts`）。テストファイルは `src/**/*.test.{ts,tsx}`。
- **E2E テスト** — Playwright（`playwright.config.ts`）。テストファイルは `e2e/` ディレクトリ。
- **DB** — Prisma 7 + SQLite（`prisma/schema.prisma`）。アダプターは `@prisma/adapter-better-sqlite3`。Prisma クライアントのシングルトンは `src/lib/prisma.ts`。シードデータは `prisma/seeds/`。
- **コミット前チェック** — husky + lint-staged（ESLint --fix、Prettier --write、tsc --noEmit）。

## ブランチ戦略

**main + 作業ブランチ** のシンプル構成。

- `tasks.md` の各ステップ（0〜7）ごとに作業ブランチを切る
- ブランチ名の規約: `<カテゴリ>/<ステップ内容>`（例: `setup/env`, `feat/db-schema`, `feat/api-routes`）
- 各サブタスクごとにコミットを積む
- サブタスク完了時は `docs/tasks.md` のチェックボックスを `[x]` に更新する
- ステップの全サブタスク完了後、push → `coderabbit --prompt-only` を実行してコードレビューを受け、指摘事項を修正する
- CodeRabbit レビュー完了・修正後に PR を作成し、main へマージ

```
main ← setup/env ← (サブタスクごとにコミット)
     ← feat/db-schema ← (サブタスクごとにコミット)
     ← feat/api-routes ← ...
```
