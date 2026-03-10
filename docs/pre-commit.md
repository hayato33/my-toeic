# pre-commit とは

## 概要

[pre-commit](https://pre-commit.com/) は、`git commit` 実行時に自動でコードチェックを走らせるツール。
CI が整っていない段階でも「壊れたコードをコミットしない」仕組みを手元で作れる。

---

## 仕組み

```
git commit を実行
    ↓
.git/hooks/pre-commit が発火
    ↓
.pre-commit-config.yaml に定義したフックを順番に実行
    ↓
全部通れば → コミット成功
1つでも失敗したら → コミットを中断（ファイルを修正して再コミット）
```

---

## インストール

```bash
# Homebrew（macOS）
brew install pre-commit

# または pip
pip install pre-commit
```

---

## 設定ファイル（`.pre-commit-config.yaml`）

プロジェクトルートに配置する。このプロジェクト向けの例：

```yaml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.6.0
    hooks:
      - id: trailing-whitespace   # 末尾の余分なスペースを除去
      - id: end-of-file-fixer     # ファイル末尾の改行を統一
      - id: check-merge-conflict  # マージコンフリクトマーカーの検出

  - repo: local
    hooks:
      - id: lint
        name: ESLint
        language: system
        entry: pnpm lint
        pass_filenames: false

      - id: type-check
        name: TypeScript type check
        language: system
        entry: pnpm tsc --noEmit
        pass_filenames: false
```

---

## フックの有効化

設定ファイルを作ったら、以下のコマンドで Git フックとして登録する。

```bash
pre-commit install
```

これで `.git/hooks/pre-commit` が自動生成され、以降の `git commit` 時に自動実行される。

---

## よく使うコマンド

| コマンド | 説明 |
|----------|------|
| `pre-commit install` | フックを Git に登録 |
| `pre-commit run --all-files` | 全ファイルに対して手動実行 |
| `pre-commit run lint` | 特定のフックだけ実行 |
| `git commit --no-verify` | フックをスキップしてコミット（緊急時のみ） |

---

## CI との関係

| | pre-commit | CI（GitHub Actions 等） |
|--|------------|------------------------|
| 実行タイミング | コミット前（ローカル） | プッシュ後（リモート） |
| 目的 | 問題のあるコミットを手元で防ぐ | チーム全体のコード品質を保証 |
| セットアップコスト | 低い | 高い |

**CI の代替ではなく補完**の関係だが、CI 導入前の暫定手段としても十分機能する。
将来 CI を入れる際は、pre-commit と同じチェックを CI にも定義するとよい。
