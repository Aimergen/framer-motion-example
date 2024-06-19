"use client";

import React, { useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface SpringConfig {
  mass: number;
  tension: number;
  friction: number;
  precision: number;
}

interface SpringProps {
  from: { x: number };
  config: SpringConfig;
}

const Home = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="container flex flex-col items-center gap-4 justify-center py-5">
      <button
        onClick={() => setIsAnimating(!isAnimating)}
        className="px-8 py-4 bg-yellow-200 rounded-lg hover:bg-yellow-300"
      >
        Хөдөлгөөнийг эхлүүлэх
      </button>
      <motion.div
        className=" bg-gray-200 p-10 rounded border border-green-300"
        initial={{ opacity: 0, y: 100 }} // Анхны байрлал: дэлгэцээс доор
        animate={isAnimating ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // Хөдөлгөөний төгсгөл: дэлгэцэн дээр
        transition={{ duration: 0.8, ease: "easeOut" }} // Хөдөлгөөний хугацаа, хөнгөн болох
      >
        <h1>Доороос гарч ирэх гарчиг</h1>
        <p>Энэ бол доороос гарч ирэх бүрхүүл юм.</p>
      </motion.div>

      <motion.div
        className="bg-gray-200 p-10 rounded border border-green-300"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />

      <motion.div
        className="bg-gray-200 p-10 rounded border border-green-300"
        animate={{
          scale: [1, 1.2, 1.1, 1],
          rotate: [0, 10, -10, 0],
          borderRadius: ["0%", "20%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.div
        className="bg-gray-200 p-10 rounded border border-green-300"
        initial={{ x: "100%" }}
        animate={{ x: "calc(100vw - 50%)" }}
      />

      <motion.div
        className="bg-gray-200 p-10 rounded border border-green-300"
        animate={{
          rotate: [0, 10, -10, 0],
          x: [0, 20, -20, 0],
          y: [0, 10, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />

      <motion.div
        className="bg-gray-200 p-10 rounded border border-green-300"
        animate={{
          x: ["100%", "-100%"],
          scale: [1, 1.4, 1],
          rotate: [0, 270, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1,
        }}
      />
    </div>
  );
};

export default Home;
