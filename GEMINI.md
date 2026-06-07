# Gemin 向けリポジトリクイックスタート

## プロジェクト概要
- Next.js 16 App Router + React 19 + TypeScript 5 で構築したマルチリンガルなポートフォリオ。
- Tailwind CSS 4 と `tw-animate-css` によるユーティリティスタイル。グローバルテーマは `src/app/globals.css` の CSS カスタムプロパティで管理。
- i18n は `next-intl` で実装し、`/[locale]` セグメントごとに英語 (`en`) / 日本語 (`ja`) を提供。既定は `ja`。
- コンテンツは `src/components` に集約し、ページファイルは薄いラッパーに徹する。

## ディレクトリ / 主要ファイル
| path | 役割 |
| --- | --- |
| `src/app/layout.tsx` | グローバルレイアウト (フォント・メタデータ)。 |
| `src/app/[locale]/layout.tsx` | ロケールごとの `NextIntlClientProvider` + `MainLayout` 適用。 |
| `src/components/main-layout.tsx` | ヘッダー/フッター/ナビ/言語切替を提供。 |
| `src/components/{about,skills,projects}.tsx` | ページ本体 (Client Components)。 |
| `src/data/projects-{ja,en}.ts` | 職務経歴データ。 |
| `messages/{ja,en}.json` | 翻訳キー。`home`/`about`/`skills`/`projects`/`nav`/`footer` を保持。 |
| `src/i18n/{routing,request}.ts` & `src/middleware.ts` | `next-intl` のルーティング・サーバ設定。 |
| `src/lib/utils.ts` | `cn()` ヘルパーで Tailwind クラスを結合。 |

## 基本コマンド
- 依存導入: `npm install` (Node 18.18+ 対応)。
- ローカル開発: `npm run dev`。
- Lint: `npm run lint` (Next.js core-web-vitals プリセット)。
- 本番ビルド: `npm run build && npm start`。

## 実装ルール
1. TypeScript `strict` → Props やユーティリティ型を明確に。`t.raw()` を使う箇所は型安全のためユースケースを限定。
2. Client Hooks を使うファイルは `"use client"` を冒頭に宣言。App Router の Server Component では `next-intl` のサーバ API (`getMessages`) を利用。
3. ルーティングは `@/i18n/routing` から提供される `Link`, `useRouter`, `usePathname` を必ず通す。`next/link`/`next/navigation` を直接 import しない。
4. Tailwind クラスは読みやすい順に記述し、複雑な条件付けは `cn()` やテンプレートリテラルで整理。CSS を追加する場合でも `globals.css` のテーマトークンを尊重。
5. 文章/ラベルは `useTranslations('<namespace>')` で取得。新しいキーは日英両方の JSON へ同時追加。
6. 職務経歴のような大量データは `src/data/projects-*.ts` を更新し、`Projects` コンポーネントが `locale` で切り替える前提を維持。
7. ナビにページを追加する場合は `main-layout.tsx` の `navItems` と `messages/*` の `nav` セクションを忘れずに更新。

## よく触る UI
- **Home (`src/app/[locale]/page.tsx`)**: 可視化用の `isVisible` state でフェードインを制御。カードはロケール付きの `Link`。
- **About**: 翻訳 JSON の `links.categories` を `t.raw()` で直接読み込み → JSON 構造が API と一致している必要がある。
- **Skills**: 表示カテゴリ (Languages/Frameworks/Infrastructure) は固定配列。翻訳は見出し文言のみ。
- **Projects**: `workHistory` データをロケールで切替し、`ProjectEntry` に map する。責務と環境は配列で描画。

## i18n / Middleware
- `src/i18n/routing.ts` に `locales`, `defaultLocale` 定義。追加する場合は `messages`, `middleware.ts`, `app` 配下のフォルダ、ナビゲーションをすべて更新。
- `src/i18n/request.ts` は `getRequestConfig` でリクエストロケールを解決し、該当 JSON を `import`。遅延 import のためファイル名変更時はここも更新。
- `src/middleware.ts` の `matcher` で `/` と `/(ja|en)/:path*` をロケールリライトルールとして設定。

## 変更時チェックリスト
- 文言/ナビ追加 → `messages/ja.json`, `messages/en.json`, `main-layout.tsx`。
- データ追加 → `projects-ja.ts`, `projects-en.ts` 双方。
- 新規ページ → `src/app/[locale]/<page>/page.tsx` + 対応コンポーネント + ルーティング。
- 作業後に `npm run lint`、必要に応じて `npm run build` で静的解析。

## Gemin 固有メモ
- 回答は簡潔な箇条書き + 必要なコード抜粋の順で提示し、出典 (ファイルパス) を合わせて示すと読み手が把握しやすい。
- 推測は避け、参照元ファイルを確実に示した上で根拠を説明。最新仕様に触れる場合は Next.js/TypeScript 公式の既知仕様を引用する形で補足。
- 複数案を比較するタスクでは、利点/欠点をセットで提示し意思決定を支援する。
