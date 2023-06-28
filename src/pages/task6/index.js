import React from "react";

import { motion } from "framer-motion";

const Task6Page = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <motion.div
        initial={{ x: "-100vh" }}
        animate={{ x: 0 }}
        transition={{
          delay: 1.2,
          duration: 1.3,
          //   repeat: Infinity,
          //   type: "spring",
          //   mass: 0.8,
          //   stiffness: 1100,
        }}
        className="bg-red-400 h-20 w-20  rounded-full flex justify-center items-center"
      >
        <h1 className="">1</h1>
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "100vh" }}
        transition={{ delay: 2.4, duration: 1.3 }}
        className="bg-green-400 h-20 w-20  rounded-full flex justify-center items-center"
      >
        <h1 className="">2</h1>
      </motion.div>
    </div>
  );
};

export default Task6Page;
