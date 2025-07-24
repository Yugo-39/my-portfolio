"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WorksPage() {
  return (
    <div className="min-h-screen px-6 py-20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200">
      {/* タイトル */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-7xl sm:text-8xl font-extrabold tracking-widest text-center mb-16 "
      >
        WORKS
      </motion.h2>

      {/* 作品グリッド */}
      <div className="grid gap-12 md:grid-cols-2 max-w-6xl mx-auto">
        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/todo.png"
            alt="シンプルToDoリスト"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />

          <h3 className="text-3xl font-extrabold text-white mb-4">
            シンプルToDoリスト
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            最初はタスクの完了と消去だけでしたが機能を追加していきました。
            <br />
            タスクの完了と未完了のそれぞれ表示、
            <br />
            タスクの入力時間の習得、キーワード検索、ダークモード機能を実装しています。
            <br />
            開発期間：1日
          </p>

          <p className="text-sm text-gray-400 mb-4">
            使用技術：HTML / CSS / JavaScript
          </p>

          <div className="flex gap-6">
            <a
              href="https://zippy-manatee-ba187d.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/TODO.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/Change.png"
            alt="席替えアプリ"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />
          <h3 className="text-3xl font-extrabold text-white mb-4">
            席替えアプリ
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            席替えをする際に、ランダムで席をシャッフルするアプリです。
            <br />
            通っていたスクールで使用する為に開発しました。
            <br />
            framer-motionを使用して、結果発表のメッセージをアニメーション化しています。
            <br />
            音声を再生する機能。
            <br />
            画面全体に半透明の背景を設定し、結果発表のメッセージをアニメーションで表示しています。
            <br />
            鍵のアイコンで席を固定できます。
            <br />
            縦と横の列数を設定できます。
            <br />
            開発期間：一週間
          </p>

          <p className="text-sm text-gray-400 mb-4">
            使用技術：React / Vite / framer-motion
          </p>

          <div className="flex gap-6">
            <a
              href="https://roaring-bonbon-310d09.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/seating-arrangement-app.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/quiz.png"
            alt="クイズアプリ"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />
          <h3 className="text-3xl font-extrabold text-white mb-4">
            簡易クイズアプリ
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            シンプルなクイズアプリです。
            <br />
            授業で制作したアプリに機能追加をしました。
            <br />
            ホーム画面 プログレスバー タイマーを追加。
            <br />
            開発期間： 2時間
          </p>

          <p className="text-sm text-gray-400 mb-4">
            使用技術：React / Vite / TypeScript
          </p>

          <div className="flex gap-6">
            <a
              href="https://beamish-marshmallow-92d7d2.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/vite-quiz.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/weather.png"
            alt="簡易天気予報アプリ"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />
          <h3 className="text-3xl font-extrabold text-white mb-4">
            簡易天気予報アプリ
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            外部APIを活用し、現在の天気や気温、天気アイコンを表示するアプリです。
            <br />
            ReactとTypeScriptで非同期処理やAPIレスポンスの扱いを学びながら制作しました。
          </p>

          <p className="text-sm text-gray-400 mb-4">
            使用技術：React / Vite / TypeScript / 外部天気API
          </p>

          <div className="flex gap-6">
            <a
              href="https://classy-clafoutis-50599f.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/weather-app-ts.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/dentaku.png"
            alt="電卓アプリ"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />
          <h3 className="text-3xl font-extrabold text-white mb-4">
            電卓アプリ
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            シンプルな電卓アプリです。
            <br />
            基本的な四則演算に対応しており、HTML / CSS / JavaScript
            の基本を学ぶために作成しました。
          </p>

          <p className="text-sm text-gray-400 mb-4">
            使用技術：HTML / CSS / JavaScript
          </p>

          <div className="flex gap-6">
            <a
              href="https://glittery-strudel-761578.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/dentaku.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl shadow-2xl border-2 border-yellow-400 p-8 hover:scale-[1.02] transition duration-300"
        >
          <Image
            src="/images/login.png"
            alt="ログイン画面"
            width={800}
            height={400}
            className="w-full h-48 object-contain mb-6 rounded-md"
          />
          <h3 className="text-3xl font-extrabold text-white mb-4">
            ログイン画面
          </h3>

          <p className="text-yellow-300 text-base leading-relaxed mb-6">
            シンプルなログインUIです。
            <br />
            HTMLとCSSの基本的なスタイリング練習として制作しました。
            <br />
          </p>

          <p className="text-sm text-gray-400 mb-4">使用技術：HTML / CSS</p>

          <div className="flex gap-6">
            <a
              href="https://chic-beijinho-7c9c51.netlify.app/"
              target="_blank"
              className="text-cyan-400 font-bold hover:text-cyan-300 transition"
            >
              デモを見る
            </a>
            <a
              href="https://github.com/Yugo-39/Login.git"
              target="_blank"
              className="text-gray-400 hover:text-white transition"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        {/* 追加の作品カードはここにコピーして増やせます */}
      </div>
    </div>
  );
}
