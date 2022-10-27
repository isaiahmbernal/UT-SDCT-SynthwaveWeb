import { motion } from "framer-motion";

const GoodJob = ({ scannedQR, totalQR }) => {
  return (
    <motion.section
      className="fixed top-[1%] w-[97%] z-[100] h-[20vh] shadow-md bg-white text-black flex flex-col items-center justify-center text-xl font-bold text-center p-4 gap-4 rounded-xl"
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      exit={{ y: -500 }}
      transition={{delay: 1, duration: 1}}
      key="map-info"
    >
      <h1>Good Job!</h1>
      <p>
        You've scanned {scannedQR} out of {totalQR} QR codes!
      </p>
    </motion.section>
  );
};

export default GoodJob;
