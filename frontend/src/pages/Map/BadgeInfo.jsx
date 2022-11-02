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
      <div className="flex flex-col justify-between items-center w-full h-full gap-6">
        <div className="relative max-w-[23rem] w-full min-h-[3rem] flex flex-col justify-center items-center">
          <div className="z-[-1] rounded-xl absolute bg-gradient-to-r from-pink-500 to-blue-500 blur-[.5rem] w-full h-full flex justify-center items-center"></div>
          <div className="bg-black rounded-xl w-full h-full flex justify-center items-center">
            <h1 className="text-white text-xl">Badge Progress</h1>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-full max-w-[19rem] w-full place-items-center">
          {badges.map((image, index) => (
            <motion.div
              className="relative max-w-[8rem]"
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
        <motion.div
          className="relative max-w-[23rem] min-h-[3rem] w-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="z-[-1] absolute w-full h-full blur-[.5rem] rounded-xl bg-gradient-to-r from-pink-500 to-blue-500"></div>
          <motion.button
            className="bg-black text-white text-xl w-full h-full rounded-xl shadow-md"
            onClick={() => setBadgeShow(false)}
          >
            Back
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BadgeInfo;
