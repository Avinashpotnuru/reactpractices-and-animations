import React from "react";

import { motion } from "framer-motion";

const Card2 = () => {
  return (
    <>
      <h1>card with </h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: "-100vh", rotateX: 360 }}
        animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="shadow-2xl flex mx-auto  w-[90%] h-[400px] mt-10"
      >
        <div className="p-10 flex flex-col items-center h-full w-1/2 ">
          <motion.div className="text-4xl my-5 flex">
            {Array.from("TITLE").map((e, idx) => (
              <motion.h1
                initial={{ opacity: 0, rotateX: 360 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{
                  delay: idx + 1 * 0.5,
                  duration: idx + 1 * 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                {e}
              </motion.h1>
            ))}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.2, y: "100vh" }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
            className="text-lg"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </motion.h1>
          <div className="flex justify-between items-center w-1/2">
            <motion.button
              initial={{ opacity: 0, scaleX: 0.5, x: "-100vh", rotateX: 360 }}
              animate={{ opacity: 1, scaleX: 1, x: 0, rotateX: 0 }}
              transition={{
                delay: 2,
                duration: 1.4,
                type: "spring",
                mass: 1,
                stiffness: 1100,
              }}
              whileHover={{ scale: 1.2, delay: 0.1, x: -120 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Click me
            </motion.button>
            <motion.button
              initial={{ opacity: 0, scaleX: 0.5, x: "100vh", rotateX: 360 }}
              animate={{ opacity: 1, scaleX: 1, x: 0, rotateX: 0 }}
              transition={{
                delay: 2,
                duration: 1.4,
                type: "spring",
                mass: 1,
                stiffness: 1100,
              }}
              whileHover={{ scale: 1.2, delay: 0.1 }}
              className="bg-red-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Read more
            </motion.button>
          </div>
        </div>
        <div className="w-1/2">
          <motion.img
            whileHover={{ rotateX: [360, 0] }}
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            transition={{ delay: 1, duration: 2 }}
            className="h-full w-full p-5"
            src="https://cdn.britannica.com/13/155313-050-2FEFBA7B/Taj-Mahal-masterpiece-architecture-Shah-Jahan-Mughal.jpg"
          />
        </div>
      </motion.div>
    </>
  );
};

export default Card2;
