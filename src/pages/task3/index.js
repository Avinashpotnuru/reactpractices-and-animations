import React from "react";

import { motion } from "framer-motion";

const TaskPage3 = () => {
  return (
    <div>
      <div className="flex">
        {Array.from("WELCOME TO OUR PAGE").map((item, i) => {
          return (
            <motion.h1
              initial={{ opacity: 0, rotate: 360 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{
                delay: i + 1 * 0.5,
                duration: i + 1 * 0.5,
                type: "spring",
                stiffness: 120,
              }}
              key={i}
              className="text-9xl"
            >
              {item}
            </motion.h1>
          );
        })}
      </div>
    </div>
  );
};

export default TaskPage3;
