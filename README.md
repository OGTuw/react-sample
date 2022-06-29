This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Directory

### docs
ドキュメントを配置する。

仕様書やOpenApi定義もここに配置する。

### public
静的ファイルを配置する。

Nextjsで定義されたディレクトリ。

### src/api
WebApi等の外部APIのクライアントを配置する。

自動生成されたApiのラッパーを作る時もここに配置する。

### src/api/generated
OpenApi Generator等で自動生成されたクライアントを配置する。

### src/components
UIコンポーネントを配置する。

Atomic Designの分類に基づいてコンポーネント振り分ける。

### src/components/atoms
部品となる汎用UIコンポーネントを配置する。

単体で存在できるUIならここに配置する。

### src/components/molecules
複数のUIコンポーネントを組み合わせたUIコンポーネントを配置する。

特定のコンテキストに依存しないようして再利用を考慮する。

UI制御のロジックが必要であればhooksを提供する。

### src/components/organisms
特定のコンテキストに依存したUIコンポーネントを配置する。

再利用はあまり考えなくてもいい。

storesやapiに密結合していてもいい。

### src/components/templates
ページ全体のスケルトンになるUIコンポーネントを配置する。

ページのアクセス制御やレイアウト等を含んだコンポーネント。

### src/foundations
UIに直接関係しない機能のみのコンポーネントを配置する。

デザインを含まなければ、汎用的でもコンテキストに密結合でもどちらでもいい。

### src/hooks
汎用的なreact hooksユーティリティを配置。

特定のコンテキストに依存しないようにする。

### src/lib
モジュール化されたロジックを配置する。

lib間は依存してもいい。

それ以外のレイヤーには依存しないようにする。

### src/pages
Nextjsでルーティングされるページコンポーネントを配置する。

### src/store
グローバル状態を管理するhooksを配置する。

### src/styles
全体のスタイルを配置する。

テーマや汎用的なスタイル要素を定義する。

### src/utils
ユーティリティロジックを配置する。

### types
typescriptのカスタム型定義を配置する。
