# Cloude 向けリポジトリクイックスタート

## プロジェクト概要
- Next.js 16 (App Router) + React 19 + TypeScript 5 の個人ポートフォリオサイト。
- UI は Tailwind CSS 4 と `tw-animate-css` で構築。デザイントークンは `src/app/globals.css` の CSS 変数で管理。
- 国際化は `next-intl` と独自の `routing` 設定で `/[locale]` セグメントを切り替える。既定ロケールは `ja`。
- 主要ページ: ホーム、自己紹介、スキル、プロジェクト経歴。各ページは `src/app/[locale]/.../page.tsx` でラップされ、実体は `src/components/*.tsx` に分離。

## ディレクトリ早見表
| path | 内容 |
| --- | --- |
| `src/app/layout.tsx` | グローバルメタデータとフォント定義。`children` をそのまま返す。 |
| `src/app/[locale]/layout.tsx` | `NextIntlClientProvider` と `MainLayout` を適用するロケールレイアウト。 |
| `src/components/main-layout.tsx` | ナビ、言語切替、フッターを含むシェル。`@/i18n/routing` の `Link` を使用。 |
| `src/components/about.tsx` etc. | 各コンテンツセクション (クライアントコンポーネント)。 |
| `src/data/projects-*.ts` | 日英それぞれの職務経歴データ。 |
| `messages/*.json` | 翻訳辞書。キー構造はセクションごとに分割。 |
| `src/i18n/*` | `next-intl` のルーティング・リクエスト設定とミドルウェア。 |
| `src/lib/utils.ts` | `cn` ヘルパー (Tailwind クラス結合)。 |

## セットアップ & コマンド
1. 依存関係: `npm install` (Node 18.18+ 推奨)。
2. 開発サーバ: `npm run dev` → `http://localhost:3000`。
3. Lint: `npm run lint` (Next.js Core Web Vitals プリセット)。
4. 本番ビルド: `npm run build && npm start`。

## コーディング規約 / 実装指針
- TypeScript `strict` 有効。`any` 濫用禁止、Props/ローカル型を明示する。
- App Router ではページは極小に保ち、UI やロジックは `src/components` 配下へ移す。
- クライアントフック (`useState`, `useTranslations`, `useLocale`) を使うファイルは上部で `"use client"` を宣言。
- ルーティング/リンク/ナビ更新は必ず `@/i18n/routing` からエクスポートされる `Link`, `useRouter`, `usePathname` を使う。`next/link` の直接利用は禁止。
- スタイルは Tailwind クラスで完結させ、複雑なクラス結合は `cn()` を利用。テーマカラーは `globals.css` の CSS 変数を尊重。
- 新しいセクション追加時は `navItems`、`messages/{locale}.json` の `nav` や該当セクションキーも更新。
- アニメーション/ディレイは既存パターン (state + tailwind の transition/opacity) に合わせる。

## 国際化と文言管理
1. 文字列は `useTranslations('<namespace>')` 経由で取得し、キーは `messages/*.json` に揃える。
2. 新規キーは日英両方の JSON に追加。構造を揃え、未翻訳は禁止。
3. `src/data/projects-*.ts` の配列はロケール固定の生データ。内容追加時は両言語ファイルで同期。
4. ルーティングは `routing.ts` に定義された `locales: ['ja','en']` のみ。増やす場合は `middleware.ts`, `request.ts`, `messages`, `app/[locale]` すべてを反映。

## 既存 UI セクションのポイント
- **Home**: `src/app/[locale]/page.tsx`。各カードは `Link`。フェードインは `useEffect` + state。
- **About**: `linkCategories` は翻訳 JSON で配列を保持し `t.raw()` で取得しているため、型崩れに注意。外部リンクは `target="_blank" rel="noopener noreferrer"`。
- **Skills**: 3 つのカテゴリ配列をローカルに保持。多言語化が必要なのは見出しのみ。
- **Projects**: `locale` で `workHistoryJa | workHistoryEn` を切替し、`ProjectEntry` に流し込む。責務・環境は配列 UI。

## 変更時チェックリスト
- UI/文言変更 → 日英翻訳と `projects-*.ts` を同期。
- 新規ページ → `src/app/[locale]/<page>/page.tsx` + 対応コンポーネント/翻訳 + ナビ/ルーティング更新。
- 依存追加 → `package.json` 更新後に `npm install` を実行し、`package-lock.json` もコミット。
- 作業後は `npm run lint` と (必要なら) `npm run build` で静的検証。

## Cloude 固有メモ
- 返答は日本語ベースで、要約後に具体的な指示/根拠を併記するとクライアントが読みやすい。
- コマンド実行ができない前提で説明する場合、必要な手順 (`npm run dev` 等) を明示し、出力の推測は避ける。
- 長文になりやすいので、重要度順に箇条書き→必要ならコード例の順で構成する。
