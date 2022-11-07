import { motion } from "framer-motion";

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
            <div className="z-[-1] absolute w-full h-full rounded-xl blur-[.5rem] animate-pulse bg-neonBlue"></div>
            <motion.button
              className="bg-black text-white text-xl w-full h-full rounded-xl shadow-md flex justify-center items-center border-double border-4 border-neonBlue"
              onClick={() => setBadgeShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={"w-6 h-6 focus:invisible"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                />
              </svg>
            </motion.button>
          </motion.div>
          <div className="relative w-full h-full">
            <div className="z-[-1] rounded-xl absolute w-full h-full flex justify-center items-center blur-[.5rem] animate-pulse bg-neonBlue"></div>
            <div className="bg-black rounded-xl w-full h-full flex justify-center items-center border-double border-4 border-neonBlue">
              <h1 className="text-white text-xl">Badge Progress</h1>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 min-h-[0rem] max-w-[23rem] w-full overflow-y-scroll p-2">
          {Object.entries(markers).map(([key, value]) => (
            <motion.div
              className="relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {progress[key] ? (
                <div className="-z-10 w-full h-full absolute blur-[.4rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl"></div>
              ) : (
                <div className="-z-10 w-full h-full absolute blur-[.4rem] bg-gray-400 rounded-3xl"></div>
              )}
              <div
                className={`${
                  progress[key] ? 'bg-black' : 'bg-black/70'
                } z-[1] w-full h-full p-1 rounded-3xl shadow-md`}
                // key={value}
              >
                <img
                  src={value.src}
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
