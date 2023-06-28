import React from "react";

import { motion } from "framer-motion";

const Buttons = () => {
  return (
    <div className="mt-10 flex flex-col justify-center items-center">
      <h1 className="mb-10">button styles</h1>
      <motion.button
        initial={{ x: -900, rotate: [-360, -200, -100, 0, 100, 200, 360] }}
        animate={{ x: 0, rotate: 0 }}
        transition={{ delay: 1, duration: 3 }}
        className="w-40 py-4"
        whileHover={{
          scaleX: 1.2,
          backgroundColor: "greenyellow",
          boxShadow: "0px 0px 8px #ff0080",
        }}
        whileTap={{ scale: 0.9 }}
      >
        click here
      </motion.button>
      <h1>tap animations</h1>

      <motion.button
        className="bg-orange-300 py-3 px-4 my-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Read more
        </motion.h1>
      </motion.button>
    </div>
  );
};

export default Buttons;
