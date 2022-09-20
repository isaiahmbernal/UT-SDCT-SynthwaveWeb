import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <motion.div
      className="min-w-screen min-h-screen bg-center bg-cover flex flex-col items-center"
      initial={{ x: -400 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.1 }}
    >
      <Navbar />
      <div className="relative w-full h-[93vh]">{children}</div>
    </motion.div>
  );
};

export default PageLayout;
