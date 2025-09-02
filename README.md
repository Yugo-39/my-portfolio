# 🐾 Yugo Iwaya – Front-End Portfolio

フロントエンド技術（**Next.js / React / TypeScript / Tailwind CSS / Framer Motion**）で制作した作品ポートフォリオです。  
背景演出・アニメーション・UIの一貫したデザイン

> 📎 本リポジトリは個人制作の学習・実績公開用です。

---

## 🌐 サイト構成

- **Home**：パーティクル背景＋グラデーション文字のヒーロー（Framer Motion）
- **Works**：カードレイアウトで作品を紹介（スクロール時にふわっと表示）
- **Skills**：言語／フレームワーク／UIツール／開発ツールの一覧

※ 背景は `ParticlesBackground` コンポーネントで描画

---

## ✨ 代表作 – SIBAINU

柴犬をテーマにした **「背景から柴犬を探す」ゲームアプリ**。  
ときどき出現する **レア柴** を見つけて **図鑑を完成** させよう！

- 🔗 **デモ**：<https://regal-salmiakki-afe98b.netlify.app/>
- 🧑‍💻 **リポジトリ**：<https://github.com/Yugo-39/TS-siba-app/>

### 使用技術
Next.js / React / TypeScript / Tailwind CSS / Lucide Icons / Framer Motion

### 主な機能
- 背景から柴犬をクリックして発見
- **レベル選択 & 難易度**のステージ構成
- **ランダム出現**・**図鑑コレクション**・**ランク機能**
- 進捗の**ローカル保存**

---

## 🧩 その他の作品

### シンプル ToDo リスト
- 🔗 デモ：<https://zippy-manatee-ba187d.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/TODO>
- 技術：HTML / CSS / JavaScript  
- 機能：完了/未完了表示、作成時刻、キーワード検索、ダークモード

---

### 席替えアプリ
- 🔗 デモ：<https://roaring-bonbon-310d09.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/seating-arrangement-app>
- 技術：React / Vite / Framer Motion  
- 機能：ランダム席シャッフル、席の固定、列数設定、結果発表アニメーション、効果音

---

### 簡易クイズアプリ
- 🔗 デモ：<https://beamish-marshmallow-92d7d2.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/vite-quiz>
- 技術：React / Vite / TypeScript  
- 機能：ホーム画面、プログレスバー、タイマー

---

### 簡易天気予報アプリ
- 🔗 デモ：<https://classy-clafoutis-50599f.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/weather-app-ts>
- 技術：React / Vite / TypeScript / 外部天気API  
- 機能：現在地の天気・気温・アイコン表示

---

### スライドショー型天気予報アプリ
- 🔗 デモ：<https://timely-lollipop-335188.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/weather-app-react-vite>
- 技術：Geolocation API / OpenWeatherMap API / Unsplash API / Bootstrap Icons  
- 機能：天候にあわせて**背景画像が自動切替**

---

### 電卓アプリ
- 🔗 デモ：<https://glittery-strudel-761578.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/dentaku>
- 技術：HTML / CSS / JavaScript  
- 機能：四則演算

---

### ログインUI（静的）
- 🔗 デモ：<https://chic-beijinho-7c9c51.netlify.app/>
- 💻 GitHub：<https://github.com/Yugo-39/Login>
- 技術：HTML / CSS

---

## 🛠 使用技術（サイト全体）

- **Framework**：Next.js / React / TypeScript  
- **Style**：Tailwind CSS  
- **Animation**：Framer Motion  
- **Icons**：Lucide Icons  
- **Hosting**：Netlify / Vercel（作品ごとに異なる）

---

## 🚀 ローカル実行

```bash
# 例：本ポートフォリオ or SIBAINU
git clone https://github.com/Yugo-39/my-portfolio.git
cd TS-siba-app
npm install
npm run dev
# http://localhost:3000 を開く

---
📁 ディレクトリ構造
my-portfolio/
├── public/                     # 静的ファイル
│   └── images/                 # 作品のサムネイル・素材
│       ├── Change.png
│       ├── dentaku.png
│       ├── dog.png
│       ├── login.png
│       ├── mg.jpg
│       ├── mg2.jpg
│       ├── quiz.png
│       ├── todo.png
│       ├── weather.png
│       └── weather2.png
│
├── src/                        # アプリ本体
│   └── app/                    # Next.js App Router
│       ├── about/              # Aboutページ
│       │   └── page.tsx
│       ├── contact/            # Contactページ
│       │   └── page.tsx
│       ├── skills/             # Skillsページ
│       │   └── page.tsx
│       ├── works/              # Worksページ
│       │   └── page.tsx
│       ├── components/         # 共通コンポーネント
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   └── ParticlesBackground.tsx
│       ├── components/ui/      # UI系（shadcn/uiなど）
│       │   └── sheet.tsx
│       ├── favicon.ico
│       ├── globals.css         # グローバルスタイル
│       ├── layout.tsx          # 全体レイアウト
│       └── page.tsx            # Homeページ
│
├── lib/                        # （必要なら）ユーティリティ関数
│
├── .gitignore
├── components.json             # shadcn/ui 設定ファイル
├── eslint.config.mjs           # ESLint 設定
├── next-env.d.ts               # TypeScriptの型補完
├── next.config.ts              # Next.js 設定
├── package.json
├── package-lock.json
├── postcss.config.mjs          # PostCSS 設定
├── README.md                   # プロジェクトの説明
└── tsconfig.json               # TypeScript 設定


