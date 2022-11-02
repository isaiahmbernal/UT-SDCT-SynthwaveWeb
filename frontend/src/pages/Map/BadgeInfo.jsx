import { motion } from 'framer-motion';

const badges = [
  { src: '/images/icons/shoe.png', alt: '/images/icons/shoe.png' },
  { src: '/images/icons/scooter.png', alt: '/images/icons/scooter.png' },
  {
    src: '/images/icons/bad_car.png',
    alt: '/images/icons/bad_car.png',
  },
  {
    src: '/images/icons/good_car.png',
    alt: '/images/icons/good_car.png',
  },
  { src: '/images/icons/lambo_car.gif', alt: '/images/icons/lambo_car.png' },
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
        <div className="relative max-w-[23rem] w-full h-[3rem] flex flex-col justify-center items-center">
          <div className="z-[-1] absolute bg-gradient-to-r from-pink-500 to-blue-500 blur-[.5rem] w-full h-full flex justify-center items-center"></div>
          <div className="bg-black rounded-lg w-full h-full flex justify-center items-center">
            <h1 className="text-white text-xl">Badge Progress</h1>
          </div>
        </div>

        <div className="grid grid-rows-2 grid-cols-2 gap-6 self-center">
          {badges.map((image, index) => (
            <motion.div
              className="relative max-w-[10rem] max-h-[10rem]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {index < scannedQR ? (
                <div className="-z-10 w-full h-full absolute blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl"></div>
              ) : (
                <div className="-z-10 w-full h-full absolute blur-[.5rem] bg-gray-400 rounded-3xl"></div>
              )}
              <div
                className={`${
                  index < scannedQR ? 'bg-black' : 'bg-black/70'
                } z-[1] w-full h-full p-1 rounded-3xl shadow-md`}
                key={index}
              >
                <img
                  src={index < scannedQR ? image.src : image.alt}
                  className={`${
                    index < scannedQR ? 'animate-wiggle' : 'brightness-[6%]'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <motion.div
        className="relative max-w-[23rem] max-h-[3rem] w-full h-full"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="z-[-1] absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500"></div>
        <motion.button
          className="bg-black text-white text-xl w-full h-full rounded-lg shadow-md"
          onClick={() => setBadgeShow(false)}
        >
          Back
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default BadgeInfo;
