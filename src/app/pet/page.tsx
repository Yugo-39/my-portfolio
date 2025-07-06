"use client";

import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
import Image from "next/image";

export default function PetPage() {
  return (
    <div style={container}>
      <h1 style={title}>🐾 My Lovely Pets  🐾</h1>
      {pets.map((pet, i) => (
        <PetCard pet={pet} i={i} key={pet.name} />
      ))}
    </div>
  );
}

interface Pet {
  name: string;
  image: string; // 画像パス（publicからの相対）
  description: string;
  hueA: number;
  hueB: number;
}

interface CardProps {
  pet: Pet;
  i: number;
}

function PetCard({pet}: CardProps) {
  const background = `linear-gradient(306deg, ${hue(pet.hueA)}, ${hue(pet.hueB)})`;

  return (
    <motion.div
      style={cardContainer}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
    >
      <div style={{ ...splash, background }} />
      <motion.div style={card} variants={cardVariants}>
        <Image
          src={pet.image}
          alt={pet.name}
          width={240}
          height={240}
          style={{ borderRadius: "12px", objectFit: "cover" }}
        />
        <h2 style={{ marginTop: 16, fontSize: 24 }}>{pet.name}</h2>
        <p style={{ fontSize: 16 }}>{pet.description}</p>
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/* ----------------- スタイル ----------------- */

const container: React.CSSProperties = {
  margin: "80px auto",
  maxWidth: 600,
  paddingBottom: 100,
  width: "100%",
  textAlign: "center",
};

const title: React.CSSProperties = {
  fontSize: "2.5rem",
  marginBottom: "2rem",
  color: "#ffe81f",
};

const cardContainer: React.CSSProperties = {
  overflow: "hidden",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  paddingTop: 20,
  marginBottom: -80,
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
};

const card: React.CSSProperties = {
  width: 300,
  minHeight: 420,
  background: "#fff",
  borderRadius: 20,
  padding: 20,
  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

/* ----------------- ペットデータ ----------------- */

const pets: Pet[] = [
  {
    name: "ムーちゃん",
    image: "/images/pets/dog.jpg",
    description: "元気な柴犬の女の子",
    hueA: 20,
    hueB: 40,
  },
  {
    name: "",
    image: "/images/pets/dog1.jpg",
    description: "",
    hueA: 280,
    hueB: 310,
  },
  {
    name: "",
    image: "/images/pets/dog2.jpg",
    description: "",
    hueA: 160,
    hueB: 200,
  },
];
