import { motion } from 'framer-motion';

const GoodJob = ({ scannedQR, totalQR }) => {
  return (
    <motion.section
      className="fixed top-[1%] max-w-[23rem] w-full z-[100] h-[8rem]"
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      exit={{ y: -500 }}
      transition={{ delay: 1, duration: 1 }}
      key="map-info"
    >
      <div className="z-[-1] absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500"></div>
      <div className="w-full h-full bg-black/90 text-white text-xl text-center rounded-xl flex flex-col px-10 py-4 justify-between items-center">
        <h1>Good Job!</h1>
        <p>
          You've scanned {scannedQR} out of {totalQR} QR codes!
        </p>
      </div>
    </motion.section>
  );
};

export default GoodJob;
