import { useRouter } from "next/router";

import { motion } from "framer-motion";

const Fade = ({ children }) => {
  const router = useRouter();
  return (
    <motion.div
      key={router.route}
      initial={{ opacity: 0, y: "100vh" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 3 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
