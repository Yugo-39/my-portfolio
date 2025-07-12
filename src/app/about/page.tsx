"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 py-16 flex flex-col items-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200">
      <motion.h2
        initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1 }}
        className="text-7xl sm:text-8xl  font-extrabold tracking-widest text-center mb-10 "
      >
        ABOUT ME
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="rounded-full border-[8px]  shadow-lg overflow-hidden w-64 h-64"
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
          <p className="text-2xl sm:text-1xl text-white mb-0 font-bold">岩谷 悠吾</p>
          <p className="text-5xl sm:text-6xl font-bold text-white mb-15">
            Yugo Iwaya
          </p>

          <p className="text-white text-lg sm:text-xl">
           1994年生まれ、福岡県北九州市出身の介護福祉士。
          </p>

          <p className="text-white text-lg sm:text-xl leading-relaxed">
            <span className="md:block">現在はWeb業界への転職を目指し、</span>
            <span className="md:block">
              ReactやNext.jsを用いたフロントエンド開発に挑戦中です。
            </span>
          </p>



          <p className=" text-bull text-2xl sm:text-3xl font-bold mt-10 mb-15">
            “直感的でシンプルな操作性と統一された
            <br />
            分かりやすいデザインを目指しています”
          </p>

          <p className="text-white text-lg">趣味：サウナ・料理・将棋・釣り</p>
        </motion.div>
      </div>
    </div>
  );
}
