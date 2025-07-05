'use client'; // ✅ クライアントコンポーネント指定を忘れずに！

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen  text-yellow-400 px-6 py-16 flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold tracking-widest text-center mb-8 starwars-font"
      >
        ABOUT ME
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-full border-[8px] border-yellow-400 shadow-lg overflow-hidden w-64 h-64"
        >
          <Image
            src="/images/mg2.jpg"
            alt="Yugo Iwaya"
            width={256}
            height={256}
            className="object-cover w-full h-full"
          />
        </motion.div>

        <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.2 }}
  className="space-y-5 text-base sm:text-lg leading-relaxed w-full"
>
  <p className="text-xl sm:text-2xl font-bold text-white">Yugo Iwaya</p>

  <p className="text-white">
    福岡県北九州市出身の介護福祉士。
  </p>

  <p className="text-white">
    現在はWeb業界への転職を目指し、<br />
    ReactやTypeScriptを用いたフロントエンド開発に挑戦中です。
  </p>

  <p className="text-cyan-400 font-semibold">
    “利用者様目線で誰にでもわかりやすいデザイン”
  </p>

  <p className="text-purple-400 font-semibold">
    “寄り添う気持ちをカタチにするインターフェース”
  </p>

  <p className="text-white">
    趣味：サウナ・料理・将棋・アプリ開発
  </p>
</motion.div>
      </div>
    </div>
  );
}
