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
- `docs/implementation-plan.md` — Step 4〜7 の詳細実装計画書（ファイルパス・コード例・UI 仕様を含む）
- `docs/neon-migration-plan.md` — Neon PostgreSQL 移行 & Neon Auth 導入の実装計画（Step 9〜11）
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
- ステップの全サブタスク完了後、push → `coderabbit --prompt-only` を実行してローカルでコードレビューを受け、指摘事項を修正する
- CodeRabbit ローカルレビュー完了・修正後に PR を作成する
- PR 作成後は GitHub 上でも CodeRabbit が自動レビューを行う。CodeRabbit のレビューが完了したことを確認してから `/pr-comments` を実行し、レビュー内容を確認・対応すること
- `/pr-comments` 実行後は、各コメントの修正要否を自動判断し、必要な修正を実施した上で、対応状況をまとめたコメントを PR に追加すること。対応完了後は GraphQL API (`resolveReviewThread`) で各レビュースレッドを resolve すること
- CodeRabbit レビューで指摘が 0 件、または全指摘への対応・修正が完了した場合は、そのまま main にマージしてよい
- レビューは CodeRabbit（ローカル CLI + GitHub クラウド）のみを使用する。GitHub Copilot のレビューは使用しない（PR body に `@Copilot` を含めないこと）

```
main ← setup/env ← (サブタスクごとにコミット)
     ← feat/db-schema ← (サブタスクごとにコミット)
     ← feat/api-routes ← ...
```
