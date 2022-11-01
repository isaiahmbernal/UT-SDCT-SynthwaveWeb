import { motion } from "framer-motion";

const MapInfo = ({ selectedInfo, setInfoShow }) => {
  return (
    <motion.section
      className="fixed bottom-[1%] max-w-[30rem] w-[97%] z-10 h-[30vh] shadow-xl text-black flex flex-col items-center justify-between"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 300 }}
      key="map-info"
    >
      <div className="absolute w-full h-full blur-[.5rem] animate-pulse bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg"></div>
      <div className="z-[1] bg-black/80 flex flex-col gap-3 p-3 rounded-xl w-full h-full">
        <div className="w-full flex items-center justify-between">
          <h1 className="bg-white px-2 py-1 font-bold text-xl rounded-lg shadow-md">
            {selectedInfo.name}
          </h1>
          <motion.button
            className="bg-white font-bold px-4 py-2 rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setInfoShow(false)}
          >
            X
          </motion.button>
        </div>
        <p className="text-justify h-full w-full bg-white overflow-y-scroll text-lg px-4 py-3 rounded-lg shadow-md">
          {selectedInfo.info}
        </p>
      </div>
    </motion.section>
  );
};

export default MapInfo;
