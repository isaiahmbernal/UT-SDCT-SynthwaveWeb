import { motion } from "framer-motion";

const MapInfo = ({ selectedInfo, setInfoShow }) => {
  return (
    <motion.section
      className="absolute bottom-[1%] w-[97%] z-10 h-[35vh] font-share-tech-mono shadow-2xl bg-black/90 border-[.1rem] border-border text-white flex flex-col items-center justify-between p-4 gap-4"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 300 }}
      key="map-info"
    >
      <div className="h-[20%] w-full flex items-center justify-between">
        <motion.h1
          className="bg-white/10 px-2 py-1 font-bold text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {selectedInfo.name}
        </motion.h1>
        <motion.button
          className="bg-white/10 font-bold px-4 py-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setInfoShow(false)}
        >
          X
        </motion.button>
      </div>
      <motion.p
        className="text-justify h-full w-full bg-white/10 text-white overflow-y-scroll text-lg px-2 py-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {selectedInfo.info}
      </motion.p>
    </motion.section>
  );
};

export default MapInfo;
