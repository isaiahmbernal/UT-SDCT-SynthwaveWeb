import { motion } from "framer-motion";

const MissingPage = () => {
  return (
    <motion.div
      className="bg-center bg-cover flex flex-col items-center min-w-[100vw] min-h-[100vh] p-4 bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oEduOOq2VZhvNfZ6w%2Fgiphy.gif&f=1&nofb=1&ipt=30228e569abcd965b5888a9180f0ad9ad886f926270bded755719295ee53aba6&ipo=images')]"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
    >
      <div className="text-white h-[10%] flex flex-col justify-between items-center font-share-tech-mono font-bold text-xl">
        <motion.p initial={{ x: -100 }} animate={{ x: 0 }}>
          Missing Page
        </motion.p>
        <motion.p initial={{ x: 100 }} animate={{ x: 0 }}>
          404
        </motion.p>
        <motion.p initial={{ x: -100 }} animate={{ x: 0 }}>
          This Page Does Not Exist
        </motion.p>
      </div>
      <motion.div
        className="absolute z-10 bottom-0 bg-confused-travolta bg-center bg-cover rounded-lg w-[20rem] h-[20rem]"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
      ></motion.div>
    </motion.div>
  );
};

export default MissingPage;
