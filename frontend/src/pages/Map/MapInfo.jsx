import { motion } from "framer-motion";

const MapInfo = ({ selectedInfo, setInfoShow }) => {
  return (
    <motion.section
      className="fixed bottom-[.7%] w-[97%] z-10 h-[35vh] shadow-xl bg-gray-200 text-black flex flex-col rounded-xl items-center justify-between p-4 gap-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 300 }}
      key="map-info"
    >
      <div className="h-[20%] w-full flex items-center justify-between">
        <motion.h1
          className="bg-white px-2 py-1 font-bold text-xl rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {selectedInfo.name}
        </motion.h1>
        <motion.button
          className="bg-white font-bold px-4 py-2 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: .9 }}
          onClick={() => setInfoShow(false)}
        >
          X
        </motion.button>
      </div>
      <motion.p
        className="text-justify h-full w-full bg-white overflow-y-scroll text-lg px-2 py-1 rounded-lg shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {selectedInfo.info}
      </motion.p>
    </motion.section>
  );
};

export default MapInfo;
