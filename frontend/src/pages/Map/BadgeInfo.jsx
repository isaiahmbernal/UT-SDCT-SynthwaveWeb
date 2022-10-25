import { motion } from "framer-motion";

const badges = [
  {src: "/images/icons/entrance_star.png", alt: "/images/icons/entrance.png",},
  {src: "/images/icons/lambo_star.png", alt: "/images/icons/lambo.png",},
  {src: "/images/icons/live_performance_star.png", alt: "/images/icons/live_performance.png",},
  {src: "/images/icons/outdoor_projection_star.png", alt: "/images/icons/outdoor_projection.png",},
  {src: "/images/icons/stage_star.png", alt: "/images/icons/stage.png",},
];

const BadgeInfo = ({ setBadgeShow, scannedQR, totalQR }) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ duration: 0.3 }}
      className="z-50 absolute flex flex-col bg-black/90 min-w-[100vw] h-[98vh]"
    >
      <div className="grid grid-rows-2 grid-cols-2 gap-8 self-center">
        {badges.map((image, index) => (
          <img src={index < scannedQR ? image.src : image.alt} className="bg-purple-900/30 rounded-xl shadow-md w-[10rem] h-[10rem]"/>
        ))}
      </div>
      <button
        className="bg-purple-800 text-white absolute bottom-[2%] left-[25%] w-[50%] h-[3rem] rounded-lg shadow-md"
        onClick={() => setBadgeShow(false)}
      >
        Back
      </button>
    </motion.div>
  );
};

export default BadgeInfo;
