import React from "react";

import { motion } from "framer-motion";

const Card3 = () => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2 mt-8 mx-auto">
      <div className="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
        <figure className="mb-2">
          <img
            src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
            alt=""
            className="h-64 ml-auto mr-auto"
          />
        </figure>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="rounded-lg p-4 bg-purple-700 flex flex-col"
        >
          <div>
            <motion.h5
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.4, duration: 3 }}
              className="text-white text-2xl font-bold leading-none"
            >
              iPhone 11 Pro Max
            </motion.h5>
            <span className="text-xs text-gray-400 leading-none">
              And then there was Pro.
            </span>
          </div>
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="text-lg text-white font-light"
            >
              $1099,00
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.1, rotateY: 360, repeatCount: 10 }}
              className="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300"
            >
              <svg
                whileHover={{ scale: 1.4 }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="stroke-current m-auto"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card3;
