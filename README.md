# Landing Page 2025

## プロジェクト概要

このプロジェクトは、SvelteKitを使用したランディングページの開発プロジェクトです

## 技術スタック

- **フレームワーク**: SvelteKit
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **ビルドツール**: Vite
- **パッケージマネージャー**: pnpm

## 開発環境のセットアップ

### 必要条件

- Node.js (最新のLTSバージョン推奨)
- pnpm

### インストール手順

1. リポジトリをクローン

```bash
git clone [リポジトリURL]
cd landing-page-2025
```

2. 依存関係のインストール

```bash
pnpm install
```

3. 開発サーバーの起動

```bash
pnpm dev
```

## 利用可能なスクリプト

- `pnpm dev`: 開発サーバーを起動
- `pnpm build`: プロダクションビルドの作成
- `pnpm preview`: ビルドしたアプリケーションのプレビュー
- `pnpm check`: TypeScriptの型チェック
- `pnpm format`: コードのフォーマット
- `pnpm lint`: コードのリント

## プロジェクト構造

```
landing-page-2025/
├── src/                # ソースコード
│   ├── routes/        # ルーティング
│   ├── lib/           # 共通コンポーネントとユーティリティ
│   ├── app.css        # グローバルスタイル
│   ├── app.html       # メインHTMLテンプレート
│   └── app.d.ts       # 型定義
├── static/            # 静的ファイル
└── ...                # 設定ファイル
```

## 開発ガイドライン

- コードのフォーマットにはPrettierを使用
- ESLintでコード品質を維持
- TypeScriptで型安全性を確保
- コンポーネントは`src/lib`に配置
- ページは`src/routes`に配置
- コンポーネントの外側にマージンを設定しない（親コンポーネントで制御）
- プルリクエストは他のメンバーにレビューしてもらう
- ブランチ名は`feature/番号_タイトル`の形式で作成する（例：`feature/123_add_header`）

## デプロイ

このプロジェクトは`@sveltejs/adapter-auto`を使用しており、様々なプラットフォームにデプロイ可能です。

You can preview the production build with `npm run preview`.
