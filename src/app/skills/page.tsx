// app/skills/page.tsx
"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "Git / GitHub", level: 70 },
  { name: "Tailwind CSS", level: 80 },
  { name: "Next.js", level: 70 },
];

export default function SkillPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500"
      >
        SKILLS
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {skills.map((skill, i) => (
          <div key={i}>
            <p className="mb-2 text-lg font-semibold text-yellow-300">{skill.name}</p>
            <div className="w-full h-4 bg-gray-700 rounded overflow-hidden">
              <motion.div
                className="h-full bg-yellow-400 rounded"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1 + i * 0.1 }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
