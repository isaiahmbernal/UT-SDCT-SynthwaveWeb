import PageLayout from "./PageLayout";
import { motion } from "framer-motion";

const MissingPage = () => {
  return (
    <PageLayout>
      {/* Background Div */}
      <div className="relative bg-crt-grid bg-cover bg-center flex flex-col justify-between items-center w-full h-full p-4">
        {/* Component Code Goes Here */}
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
      </div>
    </PageLayout>
  );
};

export default MissingPage;
