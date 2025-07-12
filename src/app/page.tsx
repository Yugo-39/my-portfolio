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
          className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          Yugo Iwaya
        </motion.h1>

        <motion.h2
          className="mt-4 text-2xl md:text-4xl text-stroke-white font-medium tracking-wide"
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
