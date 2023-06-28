import React from "react";
import { motion } from "framer-motion";

const Card4 = () => {
  return (
    <motion.div whileHover={{ y: 50 }} className="mx-auto my-10">
      <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <motion.img
          whileHover={{ y: -30 }}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://srv-cdn.onedio.com/store/bf2cbc886120f284ef46fd92a48f5fb58c62e6a50fbdf8fa796d057dd0ddc242.png"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <motion.h5
            initial={{ scale: 0, opacity: 0, y: "200" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 3.5 }}
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Noteworthy technology acquisitions 2021
          </motion.h5>
          <motion.p
            initial={{ scale: 0, opacity: 0, y: "200" }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 3.8 }}
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
          >
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card4;
