import React from "react";

import { motion } from "framer-motion";

const Card1 = () => {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03, rotateY: 360, delay: 0.3 }}
        className="flex flex-col justify-center items-center w-[400px]   mx-auto my-20 shadow-2xl   "
      >
        <div className="  ">
          <motion.div
            className="h-1/2 "
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 1.2 }}
          >
            <motion.img
              className="h-full w-[400px]"
              src="https://images.pexels.com/photos/1004119/pexels-photo-1004119.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt="Card image cap"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 2,
              duration: 1.2,
            }}
            className="p-6 h-1/2"
          >
            <motion.h1
              whileHover={{ scale: 1.2, x: 150, repeatCount: 10 }}
              className="my-4"
            >
              Lorem Ipsum
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 1.4 }}
              className=""
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </motion.h1>
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2, duration: 1.8 }}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-4"
            >
              change
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Card1;
