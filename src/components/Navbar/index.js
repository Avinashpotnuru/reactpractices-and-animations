import Link from "next/link";
import React from "react";

import { motion } from "framer-motion";

export const tasksData = [
  { id: 1, name: "TASK 1", link: "/task1" },
  { id: 2, name: "TASK 2", link: "/task2" },
  { id: 3, name: "TASK 3", link: "/task3" },
  { id: 4, name: "TASK 4", link: "/task4" },
  { id: 5, name: "TASK 5", link: "/task5" },
  { id: 6, name: "TASK 6", link: "/task5" },
  { id: 7, name: "TASK 7", link: "/task7" },
  { id: 8, name: "TASK 8", link: "/task8" },
  // { id: 9, name: "TASK 9", link: "/task9" },
  { id: 10, name: "Cards", link: "/cards" },
];

const navLinksVariants = {
  hidden: {
    x: "-100vh",
    opacity: 0,
  },
  visible: {
    scale: 1.5,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1.1,
      type: "spring",
      stiffness: 120,
    },
  },
};

const Navbar = () => {
  return (
    <motion.div className="bg-gray-400 hidden sm:flex justify-evenly items-center py-3">
      {tasksData.map((item) => (
        <Link key={item.id} href={item?.link}>
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            exit={{
              opacity: 0,
              y: 90,
              transition: {
                ease: "easeInOut",
                delay: 1,
              },
            }}
          >
            {item?.name}
          </motion.h1>
        </Link>
      ))}
    </motion.div>
  );
};

export default Navbar;
