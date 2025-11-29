# 自己紹介サイト

このプロジェクトは個人の自己紹介ページを目的としたWebサイトです。

## 使用技術

- **フレームワーク**: [Next.js 16.0.5](https://nextjs.org) (App Router)
- **言語**: [TypeScript 5](https://www.typescriptlang.org/)
- **UIライブラリ**: [React 19.2.0](https://react.dev/)
- **スタイリング**:
  - [Tailwind CSS 4](https://tailwindcss.com/)
  - [tw-animate-css](https://github.com/tw-animate-css/tw-animate-css) - アニメーション
- **UIコンポーネント**:
  - [Lucide React](https://lucide.dev/) - アイコン
  - [class-variance-authority](https://cva.style/) - バリアントベースのスタイル管理
  - [clsx](https://github.com/lukeed/clsx) & [tailwind-merge](https://github.com/dcastil/tailwind-merge) - クラス名の結合・最適化

## Getting Started

開発サーバーを起動する:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## ビルド

本番環境用のビルドを作成する:

```bash
npm run build
npm start
```

## Deploy on Vercel

Next.jsアプリケーションのデプロイは [Vercel Platform](https://vercel.com/new) が最も簡単です。

詳細は [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) を参照してください。
