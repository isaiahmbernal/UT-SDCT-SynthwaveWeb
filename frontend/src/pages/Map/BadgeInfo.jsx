import { motion } from "framer-motion";

const badges = [
  { src: "/images/icons/entrance_star.png", alt: "/images/icons/entrance.png" },
  { src: "/images/icons/lambo_star.png", alt: "/images/icons/lambo.png" },
  {
    src: "/images/icons/live_performance_star.png",
    alt: "/images/icons/live_performance.png",
  },
  {
    src: "/images/icons/outdoor_projection_star.png",
    alt: "/images/icons/outdoor_projection.png",
  },
  { src: "/images/icons/stage_star.png", alt: "/images/icons/stage.png" },
];

const BadgeInfo = ({ setBadgeShow, scannedQR, totalQR }) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ duration: 0.15 }}
      className="z-[200] fixed flex flex-col justify-between items-center bg-black/80 w-screen h-screen px-8 py-4"
    >
      <div className="flex flex-col items-center w-full h-full gap-3">
        <h1 className="text-center text-white text-2xl bg-black rounded-lg w-full py-2">
          Badge Progress
        </h1>
        <div className="grid grid-rows-2 grid-cols-2 gap-6 self-center">
          {badges.map((image, index) => (
            <div className="relative max-w-[10rem] max-h-[10rem]">
              {index < scannedQR && (
                <div className="-z-10 w-full h-full absolute blur-[.6rem] animate-pulse bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl"></div>
              )}
              <div
                className={`${
                  index < scannedQR ? "bg-black" : "bg-gray-500"
                } z-[1] w-full h-full rounded-3xl shadow-md`}
                key={index}
              >
                <img
                  src={index < scannedQR ? image.src : image.alt}
                  className={`${index < scannedQR ? "animate-wiggle" : ""}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-pink-600 text-white text-xl  max-w-[20rem] w-full py-3 rounded-lg shadow-md"
        onClick={() => setBadgeShow(false)}
      >
        Back
      </button>
    </motion.div>
  );
};

export default BadgeInfo;
