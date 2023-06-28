import { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { motion, AnimatePresence } from "framer-motion";

import { tasksData } from "../Navbar";
import Link from "next/link";

const NavPopup = () => {
  const items = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };
  return (
    <AnimatePresence>
      <motion.div className="bg-orange-200  flex flex-col justify-center items-center space-y-3 w-full">
        {tasksData.map((item) => (
          <Link key={item.id} href={item?.link}>
            <motion.h1
              variants={items}
              initial={{ y: 80, opacity: 0, rotate: 180 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
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
        <hr className="border-2 " />
      </motion.div>
    </AnimatePresence>
  );
};

const MobileNavbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="bg-gray-400 py-3 sm:hidden w-full flex justify-center items-center relative">
        {Array.from("MENU").map((item, i) => {
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
              className="text-lg"
            >
              {item}
            </motion.h1>
          );
        })}

        <div
          className="mx-4 absolute right-0"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      <motion.div>{toggle && <NavPopup />} </motion.div>
    </>
  );
};

export default MobileNavbar;
