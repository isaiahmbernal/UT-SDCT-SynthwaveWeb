import { motion } from 'framer-motion';

// const badges = [
//   { src: '/images/icons/shoe.png', alt: '/images/icons/shoe.png' },
//   { src: '/images/icons/scooter.png', alt: '/images/icons/scooter.png' },
//   {
//     src: '/images/icons/bad_car.png',
//     alt: '/images/icons/bad_car.png',
//   },
//   {
//     src: '/images/icons/good_car.png',
//     alt: '/images/icons/good_car.png',
//   },
//   { src: '/images/icons/lambo_car.gif', alt: '/images/icons/lambo_car.png' },
// ];

const BadgeInfo = ({ setBadgeShow, scannedQR, totalQR, markers, progress }) => {
  return (
    <motion.div
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ duration: .1 }}
      className="z-[200] fixed flex flex-col justify-between items-center bg-black w-screen h-screen px-8 py-4"
    >
      <div className="flex flex-col items-center w-full h-full gap-6">
        <div className="max-w-[23rem] w-full min-h-[3rem] flex gap-4 justify-center items-center">
          <motion.div
            className="relative w-[4rem] h-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="z-[-1] absolute w-full h-full blur-[.5rem] rounded-xl bg-gradient-to-r from-pink-500 to-blue-500"></div>
            <motion.button
              className="bg-black text-white text-xl w-full h-full rounded-xl shadow-md"
              onClick={() => setBadgeShow(false)}
            >
              {"<"}
            </motion.button>
          </motion.div>
          <div className='relative w-full h-full'>
            <div className="z-[-1] rounded-xl absolute bg-gradient-to-r from-pink-500 to-blue-500 blur-[.5rem] w-full h-full flex justify-center items-center"></div>
            <div className="bg-black rounded-xl w-full h-full flex justify-center items-center">
              <h1 className="text-white text-xl">Badge Progress</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 min-h-[0rem] max-w-[17rem] w-full overflow-y-scroll p-2">
          {Object.entries(markers).map(([key, value]) => (
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {progress[key] ? (
                <div className="-z-10 w-full h-full absolute blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl"></div>
              ) : (
                <div className="-z-10 w-full h-full absolute blur-[.5rem] bg-gray-400 rounded-3xl"></div>
              )}
              <div
                className={`${
                  progress[key] ? 'bg-black' : 'bg-black/70'
                } z-[1] w-full h-full p-1 rounded-3xl shadow-md`}
                // key={value}
              >
                <img
                  src={progress[key] ? value.alt : value.src}
                  className={`${
                    progress[key] ? 'animate-wiggle' : 'brightness-[6%]'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BadgeInfo;
