'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Star {
  id: string; // ← string型に変更（UUIDにする）
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  color: string;
}

const ParticlesBackground = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, index) => ({
      id: `${Date.now()}-${index}`, // ✅ 毎回ユニークなID
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 5,
      color: ["#ffffff", "#00ffff", "#a855f7"][index % 3],
    }));
    setStars(generated);
  }, []); // ✅ 一度だけ生成

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 bg-black overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id} // ✅ ユニークなIDを保証
          className="absolute rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            backgroundColor: star.color,
            opacity: 0.8,
          }}
          animate={{
            y: [0, -10, 10, 0],
            opacity: [0.8, 1, 0.6, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticlesBackground;
