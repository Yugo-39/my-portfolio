"use client";

import { motion } from "framer-motion";

export default function SkillPage() {
  return (
    <div className="min-h-screen px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-7xl md:text-8xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-200 pt-30 pb-10"
      >
        SKILLS
      </motion.h2>

      <div className="max-w-3xl mx-auto space-y-16 text-center text-white">
        {/* 言語 */}
        <section>
          <h3 className="text-4xl font-bold text-yellow-300 mb-4">Languages</h3>
          <ul className="space-y-2 text-xl leading-relaxed">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
          </ul>
        </section>

        {/* ライブラリ / フレームワーク */}
        <section>
          <h3 className="text-4xl font-bold text-yellow-300 mb-4">
            Libraries / Frameworks
          </h3>
          <ul className="space-y-2 text-xl leading-relaxed">
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
        {/* UI*/}
        <section>
          <h3 className="text-4xl font-bold text-yellow-300 mb-4">
            UI / Design Tools
          </h3>
          <ul className="space-y-2 text-xl leading-relaxed">
            <li>shadcn/ui</li>
            <li>Chakra ui</li>
            <li>Motion</li>
            <li>Material Design</li>
            <li>Lucide Icon</li>
            <li>Figma</li>
          </ul>
        </section>
        {/* ツール */}
        <section>
          <h3 className="text-4xl font-bold text-yellow-300 mb-4">Tools</h3>
          <ul className="space-y-2 text-xl leading-relaxed">
            <li>Git / GitHub</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
