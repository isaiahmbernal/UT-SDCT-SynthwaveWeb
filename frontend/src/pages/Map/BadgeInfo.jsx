import { motion } from "framer-motion";

const imageSources = [
  "/images/icons/entrance.png",
  "/images/icons/lambo.png",
  "/images/icons/live_performance.png",
  "/images/icons/outdoor_projection.png",
  "/images/icons/stage.png",
  "/images/icons/entrance.png",
  "/images/icons/lambo.png",
  "/images/icons/live_performance.png",
  "/images/icons/star.png",
  "/images/icons/star.png",
];

const BadgeInfo = ({ setBadgeShow, scannedQR }) => {
  scannedQR = 5;
  return (
    <motion.div
      className="absolute bg-black/90 min-h-[97vh]"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
    >
      <div className="m-8 grid gap-8 grid-cols-2 grid-rows-3 self-center">
        {imageSources
          .filter((s, i) => i < scannedQR)
          .map((src) => (
            <img className="bg-indigo-900 rounded-3xl" src={src} />
          ))}
      </div>

      <div className="relative m-8 content-center">
        <button
          className="w-full bg-black text-blue-300 text-3xl font-bold py-2 border-2 border-blue-700 rounded"
          onClick={() => setBadgeShow(false)}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default BadgeInfo;
