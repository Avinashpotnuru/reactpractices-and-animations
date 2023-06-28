import { motion } from "framer-motion";

const block1Variants = {
  hidden: {
    opacity: 0,
    y: -1000,
  },
  visible: {
    opacity: 1,
    y: 0,

    transition: {
      delay: 2,
      duration: 0.3,
      type: "spring",
      stiffness: 1200,
    },
  },
};
const block2Variants = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4,
      duration: 0.5,
      type: "spring",
      stiffness: 1200,
    },
  },
};

const block33Variants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 4,
      duration: 0.5,
      type: "spring",
      stiffness: 1200,
    },
  },
};

const block3Variants = {
  hidden: {
    opacity: 0,
    y: 1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 6,
      duration: 0.7,
      type: "spring",
      stiffness: 1200,
    },
  },
};

const block4Variants = {
  hidden: {
    opacity: 0,
    x: 1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6,
      duration: 0.7,
      type: "spring",
      stiffness: 1200,
    },
  },
};

const block5Variants = {
  hidden: {
    opacity: 0,
    y: -1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 6,
      duration: 0.7,
      type: "spring",
      stiffness: 1200,
    },
  },
};

const block6Variants = {
  hidden: {
    opacity: 0,
    x: -1000,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 6,
      duration: 0.7,
      type: "spring",
      stiffness: 1200,
    },
  },
};

function Task4() {
  return (
    <div className="flex flex-col justify-center items-start w-screen h-screen">
      <div className="grid grid-cols-1 justify-items-center mx-auto">
        <motion.div
          variants={block1Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-blue-200"
        ></motion.div>
      </div>
      <div className="grid grid-cols-2  justify-items-center mx-auto ">
        <motion.div
          variants={block2Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-red-500"
        ></motion.div>
        <motion.div
          variants={block33Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-green-500"
        ></motion.div>
      </div>
      <div className="grid grid-cols-3  justify-items-center mx-auto">
        <motion.div
          variants={block4Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-stone-400"
        ></motion.div>
        <motion.div
          variants={block5Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-yellow-200"
        ></motion.div>
        <motion.div
          variants={block6Variants}
          initial="hidden"
          animate="visible"
          className="h-40 w-40 bg-blue-500"
        ></motion.div>
      </div>
    </div>
  );
}
export default Task4;
