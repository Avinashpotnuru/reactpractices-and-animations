import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import Fade from "@/components/Fade";

const redBallVariants = {
  hidden: { x: "-100vh", borderRadius: "0%" },
  visible: {
    x: 0,
    borderRadius: "50%",
    transition: { delay: 2, duration: 3, type: "spring", stiffness: 100 },
  },
};
const yellowBallVariants = {
  hidden: { y: "-100vh", borderRadius: "0%" },
  visible: {
    y: 0,
    borderRadius: "50%",
    transition: { delay: 1.8, duration: 3, type: "spring", stiffness: 100 },
  },
};
const greenBallVariants = {
  hidden: { x: "100vh", borderRadius: "0%" },
  visible: {
    x: 0,
    borderRadius: "50%",
    transition: { delay: 2, duration: 3, type: "spring", stiffness: 100 },
  },
};

const TaskPage1 = () => {
  return (
    <>
      <div className="flex justify-evenly items-center h-screen">
        <motion.div
          variants={redBallVariants}
          initial="hidden"
          animate="visible"
          className="h-56 w-56 bg-red-400 flex justify-center items-center "
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 3 }}
            className="text-9xl"
          >
            1{" "}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={yellowBallVariants}
          exit={{ y: "-100vh" }}
          initial="hidden"
          animate="visible"
          className="h-56 w-56 bg-yellow-400 flex justify-center items-center "
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 3 }}
            className="text-9xl"
          >
            2{" "}
          </motion.h1>
        </motion.div>

        <motion.div
          variants={greenBallVariants}
          initial="hidden"
          animate="visible"
          className="h-56 w-56 bg-green-400 flex justify-center items-center "
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.5, duration: 3 }}
            className="text-9xl"
          >
            3{" "}
          </motion.h1>
        </motion.div>
      </div>
    </>
  );
};

export default TaskPage1;
