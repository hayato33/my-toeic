# CLAUDE.md

このファイルはClaudeCode（claude.ai/code）がこのリポジトリで作業する際のガイダンスを提供します。

## コマンド

```bash
pnpm dev        # 開発サーバー起動
pnpm build      # 本番ビルド
pnpm start      # 本番サーバー起動
pnpm lint       # ESLint実行
```

> パッケージマネージャーは `pnpm` を使用すること（npm/yarn/bunは不可）。

## ドキュメント

- `docs/requirements.md` — 要件定義（機能・技術スタック・データモデル・画面構成）

## アーキテクチャ

**Next.js App Router** プロジェクト（Next.js 16、React 19、TypeScript strict mode）。

- **`src/app/`** — App Routerのルート。`layout.tsx`がルートレイアウト、`page.tsx`がホームルート。
- **スタイリング** — Tailwind CSS v4（PostCSS経由）。グローバルスタイルとCSSカスタムプロパティ（ライト/ダークテーマ）は`src/app/globals.css`に記述。
- **パスエイリアス** — `@/*` は `./src/*` にマップ。
- **テストフレームワーク** — 未設定。
