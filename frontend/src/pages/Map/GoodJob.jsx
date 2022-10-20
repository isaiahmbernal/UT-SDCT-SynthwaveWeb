import { motion } from "framer-motion";

const GoodJob = ({ scannedQR, totalQR }) => {
  return (
    <motion.section
      className="fixed bottom-[1%] w-[97%] z-50 h-[20vh] font-share-tech-mono shadow-2xl bg-white text-black flex flex-col items-center justify-between p-4 gap-4 rounded-tl-lg rounded-tr-lg rounded-br-lg"
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      exit={{ y: 1000 }}
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
