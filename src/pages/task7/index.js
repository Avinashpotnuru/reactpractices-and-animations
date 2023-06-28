import React from "react";

import { motion } from "framer-motion";

// console.log("array,", [...Array(12)]);

const Task7 = () => {
  return (
    <div className="grid grid-cols-3 h-[1400px] w-full gap-8 my-5 ">
      {[...Array(12)].map((e, i) => (
        <motion.div
          key={i}
          className={`${
            i % 2 === 0 ? "bg-red-400" : "bg-gray-500"
          } flex justify-center items-center shadow-2xl`}
          initial={{
            opacity: 0,
            translateX: i % 2 === 1 ? -70 : 70,
            translateY: -50,
          }}
          whileHover={{ scale: 1.1, borderRadius: "50%" }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.3, delay: i * 0.2 }}
        >
          <h2 className="text-4xl m-auto">{`${i + 1}`}</h2>
        </motion.div>
      ))}
    </div>
  );
};

export default Task7;
