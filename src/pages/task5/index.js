import { motion } from "framer-motion";

const block1Variants = {
  hidden: {
    x: 0,
    opacity: 0,
    scale: 0,
    rotate: 360,
  },
  visible: {
    x: [-600, -400, -200, 0, 200, 400, 600],
    opacity: 1,
    scale: [1, 2, 3, 3, 2, 1],
    rotate: 0,

    borderRadius: 0,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const Task5 = () => {
  return (
    <div className="relative h-screen  flex flex-col  items-center">
      <motion.div className="my-auto">
        <div className="flex">
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
        </div>

        <div className=" flex my-10">
          {Array.from("loading.....").map((item, i) => {
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
                className="text-9xl "
              >
                {item}
              </motion.h1>
            );
          })}
        </div>
        <div className="flex">
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
          <motion.div
            variants={block1Variants}
            initial="hidden"
            animate="visible"
            className={`h-5 w-5 bg-gray-700 `}
            drag="y"
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Task5;
