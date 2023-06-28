import React from "react";

import { motion } from "framer-motion";
import CharacterAnimation from "./LetterAnimation";
import WordAnimation from "./WordAnimation";

const TextAnimations = () => {
  return (
    <div className="w-screen h-3/4">
      <h1 className="mx-auto">TextAnimations</h1>

      <motion.h1
        className="text-8xl"
        initial={{ x: 0, scale: 0 }}
        animate={{ x: [0, 1200, 0], scale: 1 }}
        transition={{ delay: 1, duration: 4 }}
      >
        welcome to our page
      </motion.h1>

      <h1 className>each letter</h1>
      <CharacterAnimation text={"hello"} />
      <h1>each word</h1>
      <WordAnimation text={"hello world"} />
    </div>
  );
};

export default TextAnimations;
