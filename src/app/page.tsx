'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-black">
      <motion.h1
        className="text-white text-5xl md:text-7xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Yugo Iwaya
      </motion.h1>
    </main>
  );
};

export default Home;
