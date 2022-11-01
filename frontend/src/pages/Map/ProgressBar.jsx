import { motion } from "framer-motion";

const badgeIcons = [
  "/logo192.png",
  "/images/icons/entrance_star.png",
  "/images/icons/lambo_star.png",
  "/images/icons/live_performance_star.png",
  "/images/icons/outdoor_projection_star.png",
  "/images/icons/stage_star.png",
];

const ProgressBar = ({ scannedQR, totalQR, setBadgeShow }) => {
  const fillPercent = (scannedQR / totalQR) * 100;
  return (
    <div className="absolute bottom-[2%] left-[5%] w-[90%] flex gap-5 justify-between items-end">
      <motion.div
        className="relative w-[9rem] h-[6rem] bg-blue-500 cursor-pointer rounded-2xl flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setBadgeShow(true)}
      >
        <div className="absolute w-full h-full cursor-pointer blur-[.5rem] animate-pulse bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl"></div>
        <div className="z-[2] w-full h-full cursor-pointer bg-black rounded-2xl flex justify-center items-center">
          <img
            src={`${badgeIcons[scannedQR]}`}
            className="w-[90%] h-[90%] cursor-pointer animate-wiggle"
          />
        </div>
        
        
      </motion.div>

      <div className="flex flex-col justify-between w-full h-[3rem]">
        {/* Progress Bar */}
        <div className="relative rounded-md bg-white/90 shadow-md h-[1rem] w-[100%] flex flex-col">
          <motion.div
            className="absolute h-full blur-[.5rem] animate-pulse bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
            initial={{ width: 0 }}
            animate={{ width: `${fillPercent}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
          <motion.div
            className={"z-[1] rounded-md bg-pink-600 h-full"}
            initial={{ width: 0 }}
            animate={{ width: `${fillPercent}%` }}
            transition={{ duration: 1 }}
          ></motion.div>
        </div>
        {/* Text */}
        <p className="text-white">
          {scannedQR} / {totalQR} QR Codes Found
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;
