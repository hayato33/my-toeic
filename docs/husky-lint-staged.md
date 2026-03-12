# husky + lint-staged によるコミット前チェック

## 概要

[husky](https://typicode.github.io/husky/) と [lint-staged](https://github.com/lint-staged/lint-staged) を組み合わせて、`git commit` 時にステージされたファイルのみに対して自動で lint / format チェックを実行する。

- **husky** — Git hooks を簡単に管理するツール
- **lint-staged** — ステージされたファイルだけにコマンドを実行するツール

Node.js プロジェクトのデファクト構成。`pnpm install` だけでフックが有効化されるため、セットアップの手間がない。

---

## 仕組み

```
git commit を実行
    ↓
.husky/pre-commit が発火
    ↓
lint-staged がステージされたファイルに対してコマンドを実行
    ↓
全部通れば → コミット成功
1つでも失敗したら → コミットを中断（修正して再コミット）
```

---

## インストール

```bash
pnpm add -D husky lint-staged
```

---

## セットアップ

### 1. husky の初期化

```bash
pnpm exec husky init
```

これにより以下が自動で行われる:

- `.husky/pre-commit` ファイルの生成
- `package.json` に `prepare` スクリプトの追加（`"prepare": "husky"`）

### 2. pre-commit フックの設定

`.husky/pre-commit` を以下の内容に編集:

```bash
pnpm exec lint-staged
```

### 3. lint-staged の設定

`package.json` に追記:

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

または `.lintstagedrc.json` として外部ファイル化も可能。

---

## 型チェックについて

`tsc --noEmit` はファイル単位で実行できないため、lint-staged ではなく `.husky/pre-commit` に直接記述する:

```bash
pnpm exec lint-staged
pnpm tsc --noEmit
```

> **注意**: 型チェックはプロジェクト全体を対象とするため、コミットに時間がかかる場合がある。
> 重い場合は型チェックを CI のみに移すことも検討する。

---

## よく使うコマンド

| コマンド                 | 説明                                       |
| ------------------------ | ------------------------------------------ |
| `pnpm exec husky init`   | husky を初期化（初回のみ）                 |
| `pnpm exec lint-staged`  | lint-staged を手動実行                     |
| `git commit --no-verify` | フックをスキップしてコミット（緊急時のみ） |

---

## pre-commit.com との比較（採用理由）

| 観点                 | pre-commit.com                       | husky + lint-staged                  |
| -------------------- | ------------------------------------ | ------------------------------------ |
| ランタイム依存       | Python が必要                        | **Node.js のみ（pnpm で完結）**      |
| セットアップ         | `pnpm install` + 別途 `brew install` | **`pnpm install` だけで完了**        |
| staged files の扱い  | フック定義で個別対応                 | **lint-staged が自動で処理**         |
| エコシステムの親和性 | 多言語向き                           | **Node.js プロジェクトのデファクト** |

本プロジェクトは FE/BE ともに Next.js（Node.js）で完結するため、husky + lint-staged を採用。

---

## CI との関係

|                    | husky + lint-staged            | CI（GitHub Actions 等）      |
| ------------------ | ------------------------------ | ---------------------------- |
| 実行タイミング     | コミット前（ローカル）         | プッシュ後（リモート）       |
| 目的               | 問題のあるコミットを手元で防ぐ | チーム全体のコード品質を保証 |
| セットアップコスト | 低い                           | 高い                         |

**CI の代替ではなく補完**の関係。CI 導入前の暫定手段としても十分機能する。
