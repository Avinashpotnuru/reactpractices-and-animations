import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TaskPage2 = () => {
  const [text, setText] = useState(true);

  setTimeout(() => {
    setText(false);
  }, 6000);

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex">
        <motion.h1
          initial={{ opacity: 0, x: "-100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          A
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "-100vh", y: "-100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          V
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "100vh", y: "100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          I
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: "100vh", rotate: 180 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          N
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "-100vh", y: "100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{
            delay: 2,
            duration: 2,
          }}
          className="text-9xl"
        >
          A
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "100vh", y: "-100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          S
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: "100vh", rotate: 180 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ delay: 2, duration: 2 }}
          className="text-9xl"
        >
          H
        </motion.h1>
      </div>
      <AnimatePresence>
        {text && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 2 }}
            exit={{ y: -600 }}
            className="text-9xl"
          >
            POTNURU
          </motion.h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TaskPage2;
