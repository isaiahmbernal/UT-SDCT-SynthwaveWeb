import { motion } from 'framer-motion';

// const badgeIcons = [
//   '/images/icons/sun.png',
//   '/images/icons/shoe.png',
//   '/images/icons/scooter.png',
//   '/images/icons/bad_car.png',
//   '/images/icons/good_car.png',
//   '/images/icons/lambo_car.gif',
//   '/images/icons/lambo_car.gif',
// ];

const ProgressBar = ({ scannedQR, totalQR, setBadgeShow, markers }) => {
  const fillPercent = (scannedQR / totalQR) * 100;
  const recentCode = localStorage.getItem('recentScan');
  console.log('Recent Code:', recentCode);
  return (
    <div className="absolute bottom-[2%] left-[4%] w-[92%] flex gap-2 h-[5rem] justify-between items-end">
      <motion.div
        className="relative h-full aspect-square cursor-pointer rounded-2xl flex"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setBadgeShow(true)}
      >
        <div className="absolute w-full h-full cursor-pointer animate-custom-spin-slow blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl"></div>
        <div className="z-[2] w-full h-full cursor-pointer bg-black rounded-2xl flex justify-center items-center p-2">
          <img
            src={
              localStorage.getItem('recentScan') != ''
                ? markers[localStorage.getItem('recentScan')].alt
                : '/images/icons/sun.png'
            }
            className="w-full h-full cursor-pointer animate-wiggle"
          />
        </div>
      </motion.div>
      <div className="relative flex w-full h-full">
        <div className="absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl"></div>
        <div className="z-[1] bg-black flex flex-col justify-center gap-2 px-4 w-full h-full rounded-2xl">
          {/* Progress Bar */}
          <div className="relative rounded-md bg-gray-200 shadow-md h-[1rem] w-[100%] flex flex-col">
            <motion.div
              className="absolute h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
              initial={{ width: 0 }}
              animate={{ width: `${fillPercent}%` }}
              transition={{ duration: 1 }}
            ></motion.div>
            <motion.div
              className={'z-[1] rounded-md bg-purple-600 shadow-md h-full'}
              initial={{ width: 0 }}
              animate={{ width: `${fillPercent}%` }}
              transition={{ duration: 1 }}
            ></motion.div>
          </div>
          {/* Text */}
          <p className="text-white text-center">
            {scannedQR} / {totalQR} QR Codes Found
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
