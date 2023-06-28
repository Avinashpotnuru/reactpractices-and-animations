import React from "react";

import { motion } from "framer-motion";

// console.log("array,", [...Array(12)]);

const Task8 = () => {
  return (
    <div className="w-screen">
      <h1 className="text-4xl text-center">Animations while scrolling</h1>
      <div className="grid grid-cols-1 h-[1400px] w-full gap-8 my-5   ">
        {[...Array(12)].map((e, i) => (
          <motion.div
            key={i}
            className={`${
              i % 2 === 0 ? "bg-red-400" : "bg-gray-500"
            }  flex justify-center h-52   items-center shadow-2xl  border-2 border-black  `}
            initial={{
              opacity: 0,
              translateX: i % 2 === 1 ? "-100vh" : "100vh",
              translateY: -50,
            }}
            whileInView={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <h2 className="text-4xl m-auto">{`${i + 1}`}</h2>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Task8;
