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
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/todo.png"
            alt="todo app"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">TODOアプリ</h3>
            <p className="text-yellow-300 text-sm mb-3">
              シンプルなTODOアプリです。
              <br />
              最初はタスクの完了と消去だけでしたが機能を追加していきました。
            </p>
            <p className="text-sm text-gray-400 mb-4">
              使用技術：HTML / CSS / JavaScript /
            </p>
            <div className="flex gap-4">
              <a
                href="https://zippy-manatee-ba187d.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/TODO.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/Change.png"
            alt="席替えアプリ"
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">席替えアプリ</h3>
            <p className="text-yellow-300 text-sm mb-3">
              職業訓練校で使っていた席替えアプリを見て
              <br />
              新しくデザインや機能を強化して作りました。
            </p>
            <p className="text-sm text-gray-400 mb-4">使用技術：React / vite</p>
            <div className="flex gap-4">
              <a
                href="https://roaring-bonbon-310d09.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/seating-arrangement-app.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/quiz.png"
            alt=""
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">簡易クイズアプリ</h3>
            <p className="text-yellow-300 text-sm mb-3">
              簡単なクイズアプリです
            </p>
            <p className="text-sm text-gray-400 mb-4">
              使用技術：React / vite / TypeScript /
            </p>
            <div className="flex gap-4">
              <a
                href="https://beamish-marshmallow-92d7d2.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/vite-quiz.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/weather.png"
            alt=""
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">簡易天気予報アプリ</h3>
            <p className="text-yellow-300 text-sm mb-3"></p>
            <p className="text-sm text-gray-400 mb-4">
              使用技術：React / vite / TypeScript / 外部天気API
            </p>
            <div className="flex gap-4">
              <a
                href="https://reliable-concha-4fc2a0.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/weather-app-ts.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/dentaku.png"
            alt=""
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">電卓アプリ</h3>
            <p className="text-yellow-300 text-sm mb-3"></p>
            <p className="text-sm text-gray-400 mb-4">
              使用技術：HTML / CSS / JavaScript
            </p>
            <div className="flex gap-4">
              <a
                href="https://glittery-strudel-761578.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/dentaku.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* 作品カード */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
        >
          <Image
            src="/images/login.png"
            alt=""
            width={800}
            height={400}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">Login</h3>
            <p className="text-yellow-300 text-sm mb-3"></p>
            <p className="text-sm text-gray-400 mb-4">使用技術：HTML / CSS /</p>
            <div className="flex gap-4">
              <a
                href="https://chic-beijinho-7c9c51.netlify.app/"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                デモを見る
              </a>
              <a
                href="https://github.com/Yugo-39/Login.git"
                target="_blank"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>
        {/* 追加の作品カードはここにコピーして増やせます */}
      </div>
    </div>
  );
}
