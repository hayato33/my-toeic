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

- [ ] `GET /api/questions` — 問題一覧取得（タイプ・日付フィルタ対応）
- [ ] `POST /api/answers` — 回答の記録
- [ ] `GET /api/review` — 今日の復習キュー取得
- [ ] `GET /api/dashboard` — ダッシュボード用データ取得（ノルマ・ストリーク）

---

## 3. SM-2 アルゴリズム

- [ ] SM-2 ロジックの実装（`interval`・`easeFactor` の更新）
- [ ] 回答記録時に `ReviewSchedule` を更新する処理
- [ ] Vitest でユニットテスト

---

## 4. AI フィードバック

- [ ] Claude API（claude-haiku-4-5）の接続設定
- [ ] `POST /api/feedback` — 解答内容を渡してフィードバック生成
- [ ] ローディング・エラー状態のハンドリング
- [ ] フォールバック UI の実装（API エラー時に「再読み込み」「スキップ」を表示、学習セッションは継続）

---

## 5. 画面実装

### `/`（ダッシュボード）

- [ ] 今日のノルマ（復習 + 新規）件数の表示
- [ ] 学習継続日数（ストリーク）の表示
- [ ] 「学習を始める」「復習する」ボタン

### `/study`（学習セッション）

- [ ] 単語 4 択問題の表示
- [ ] 文法 4 択問題の表示
- [ ] 解答後に正解・解説の表示
- [ ] AI フィードバックの表示
- [ ] 正解/不正解の記録（API 呼び出し）

### `/review`（復習キュー）

- [ ] 今日の復習対象問題の一覧表示
- [ ] 学習セッションと同じ解答フロー

---

## 6. テスト

- [ ] SM-2 ロジックのユニットテスト（Vitest）
- [ ] API Routes のユニットテスト（Vitest）
- [ ] 学習セッション全体の E2E テスト（Playwright）
- [ ] 復習フローの E2E テスト（Playwright）

---

## 7. 仕上げ

- [ ] レスポンシブ対応（PC メイン）
- [ ] ダークモード対応（`globals.css` のカスタムプロパティ活用）
- [ ] ビルドエラー・lint エラーの解消
