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
      className="absolute bg-black/90 grid gap-8 grid-cols-2 grid-rows-3 min-h-[97vh]"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
    >
      {imageSources
        .filter((s, i) => i < scannedQR)
        .map((src) => (
          <img className="bg-black rounded-lg" src={src} />
        ))}
    </motion.div>
  );
};

export default BadgeInfo;
