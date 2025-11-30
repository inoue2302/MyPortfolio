# Codex 向けリポジトリクイックスタート

## プロジェクト要約
- Next.js 16 App Router ベースの多言語ポートフォリオ。React 19 / TypeScript 5 (strict) / Tailwind CSS 4 + `tw-animate-css` を採用。
- ロケールは `ja`/`en` の 2 つ。`next-intl` の `routing` + middleware で `/[locale]` セグメントを処理。
- 各ページ (`home/about/skills/projects`) は `src/app/[locale]/.../page.tsx` でエントリを持ち、実装本体は `src/components` 配下に集約。

## ディレクトリガイド
| path | 概要 |
| --- | --- |
| `src/app/layout.tsx` | ルートレイアウト。フォント/GLOBAL CSS を読み込み。 |
| `src/app/[locale]/layout.tsx` | 各ロケール用の `NextIntlClientProvider` + `MainLayout`。 |
| `src/components/main-layout.tsx` | ナビゲーションと言語切替。`Link`/`useRouter`/`usePathname` は `@/i18n/routing` から。 |
| `src/components/{about,skills,projects}.tsx` | 各セクションのクライアントコンポーネント。 |
| `src/data/projects-{ja,en}.ts` | 職務経歴データ。 |
| `messages/{ja,en}.json` | 翻訳辞書。 |
| `src/i18n/{routing,request}.ts` & `src/middleware.ts` | `next-intl` の設定とルーティング制御。 |
| `src/lib/utils.ts` | `cn()` Tailwind ヘルパー。 |

## ローカル作業コマンド
```bash
npm install      # 依存取得
npm run dev      # ローカル開発 (http://localhost:3000)
npm run lint     # ESLint (core-web-vitals)
npm run build && npm start  # 本番確認
```
- Node 18.18+ を前提。依存追加時は `package-lock.json` を忘れず更新。

## 実装ルール / ベストプラクティス
1. **TypeScript**: `strict: true`。Props やユーティリティ型は定義する。`t.raw()` で JSON を取得する箇所は型ガードを用意するか、既存型を流用。
2. **Client vs Server**: Hooks を使うコンポーネントは `"use client"` を先頭に付与。Server Component からは `getMessages()` などサーバ API を利用。
3. **Routing/i18n**: ナビ・リンク・リダイレクトは `@/i18n/routing` のラッパーを必須使用。翻訳キー追加は `messages/ja.json` と `messages/en.json` の両方に入れる。
4. **スタイリング**: Tailwind ユーティリティを使用し、複雑なクラス結合は `cn()` かテンプレートで整理。直接 CSS を増やす場合は `globals.css` のトークン/テーマに揃える。
5. **データ**: プロジェクト経歴は `src/data/projects-*.ts` の配列を更新。ロケールで内容が分岐する設計なので両方をメンテ。
6. **UI 更新チェック**: ナビ項目を増やしたら `main-layout.tsx` の `navItems` と `messages/*` の `nav` を更新。カードなど `Link` を追加する場合はロケール相対パスにする。
7. **品質ゲート**: 作業後に `npm run lint`、必要に応じて `npm run build` を実行し、エラーを CLI で確認したうえで結果を共有。

## UI コンポーネントの注意点
- `Home` (`src/app/[locale]/page.tsx`): 初期フェードインは `useEffect` + `isVisible` state。新規カードは同じアニメーションロジックに合わせる。
- `About`: 翻訳 JSON からリンクカテゴリ配列を取得。構造変更時は `messages/*` 側も修正。
- `Skills`: リストはローカル配列。項目追加は単純に配列を更新すれば OK。翻訳はヘッダーのみ。
- `Projects`: `useLocale()` で `workHistoryJa/En` を切替。`ProjectEntry` コンポーネントは props で `t` を受け取るので、新しいフィールドを増やすならここを先に拡張。

## i18n / Middleware の流れ
1. `src/i18n/routing.ts` → `locales` と `defaultLocale` 定義。
2. `src/i18n/request.ts` → リクエストロケールを判定し該当 JSON を `import`。
3. `src/middleware.ts` → `/` および `/ja|en` パスを捕捉してロケールリライト。
4. `next.config.ts` → `withNextIntl` で `next-intl` プラグインを包む。

## 変更時の ToDo
- 文言追加/変更 → `messages/ja.json` & `messages/en.json`、必要に応じて `t()` 呼び出し部。
- 新規ページ/セクション → `app/[locale]`、`components`、`navItems`、翻訳。
- データ更新 → `projects-*.ts` 両方。
- コード変更後に `npm run lint` / `npm run build` を CLI で実行し、結果を共有。

## Codex 固有メモ
- CLI からコマンドを実行できるため、可能な限り `rg` や `npm run lint` で根拠を取得してから回答。ログは要点のみ抜粋して説明。
- ファイル編集は `apply_patch` かリダイレクト (`cat <<'EOF' > file`) を使用し、差分が明確になるようにする。
- 回答時は「どのファイルをどのように変えたか」「残タスク/検証状況」を簡潔に列挙し、必要なら次のステップ (テスト、ビルド、デプロイ) を提案。
