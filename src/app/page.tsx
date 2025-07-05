'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './components/ParticlesBackground';

const Home: React.FC = () => {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      {/* 背景 */}
      <ParticlesBackground />

      {/* テキスト */}
      <div className="relative z-10 flex flex-col items-center justify-start h-full pt-32 text-center">
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: [0, -2, 2, -2, 0],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          Yugo Iwaya
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl md:text-4xl text-white font-medium tracking-wide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Front-End Developer
        </motion.h2>


      </div>
    </main>
  );
};

export default Home;
