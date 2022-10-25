import { motion } from "framer-motion";

const badgeIcons = [
  "/images/icons/entrance_star.png",
  "/images/icons/lambo_star.png",
  "/images/icons/live_performance_star.png",
  "/images/icons/outdoor_projection_star.png",
  "/images/icons/stage_star.png",
];

const ProgressBar = ({ scannedQR, totalQR, setBadgeShow }) => {
  const fillPercent = (scannedQR / totalQR) * 100;
  return (
    <div className="absolute bottom-[2%] left-[5%] w-[90%]  flex gap-2 justify-between items-end">
      <motion.div
        className="w-fit cursor-pointer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setBadgeShow(true)}
      >
        <img
          src={`${badgeIcons[scannedQR]}`}
          className="w-[8rem] cursor-pointer animate-wiggle"
        />
      </motion.div>
      <div className="flex flex-col justify-between w-full h-[3rem]">
        {/* Progress Bar */}
        <div className="relative rounded-md bg-white/90 shadow-md h-[1rem] w-[100%] flex flex-col">
          <div
            className="absolute h-full blur-[.5rem] animate-pulse bg-gradient-to-r from-blue-600 to-red-600 rounded-lg"
            style={{ width: `${fillPercent}%` }}
          ></div>
          <div
            className={"z-[1] rounded-md bg-purple-800 h-full"}
            style={{ width: `${fillPercent}%` }}
          ></div>
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
