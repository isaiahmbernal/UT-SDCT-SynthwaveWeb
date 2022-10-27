import { motion } from "framer-motion";

const badges = [
  { src: "/images/icons/entrance_star.png", alt: "/images/icons/entrance.png", },
  { src: "/images/icons/lambo_star.png", alt: "/images/icons/lambo.png", },
  { src: "/images/icons/live_performance_star.png", alt: "/images/icons/live_performance.png", },
  { src: "/images/icons/outdoor_projection_star.png", alt: "/images/icons/outdoor_projection.png", },
  { src: "/images/icons/stage_star.png", alt: "/images/icons/stage.png", },
];

const BadgeInfo = ({ setBadgeShow, scannedQR, totalQR }) => {
  scannedQR = 0;
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ duration: 0.15 }}
      className="z-50 fixed flex flex-col bg-black/90 min-w-[100vw] min-h-[100vh]"
    >
      <div className="m-8 grid grid-rows-3 grid-cols-2 gap-8 self-center">
        {badges.map((image, index) => (
          <img src={index < scannedQR ? image.src : image.alt} className="bg-purple-900/30 rounded-3xl" key={index} />
        ))}
      </div>
      <div className="absolute bottom-[5%] m-8 self-center content-center">
        <button
          className="w-full py-4 px-8 bg-black/30 text-purple-300 text-3xl font-bold border-4 border-purple-800 rounded-xl"
          onClick={() => setBadgeShow(false)}
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};

export default BadgeInfo;
