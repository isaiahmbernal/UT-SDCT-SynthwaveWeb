import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MapInfo from "./MapInfo";
import Fireworks from "./Fireworks";
import { useNavigate, useSearchParams } from "react-router-dom";
import BadgeInfo from "./BadgeInfo";
import GoodJob from "./GoodJob";
import NavBar from "./NavBar";

const MapPage = () => {
  const markers = {
    lambo: {
      name: "Lambo",
      info: "This is a lamborghini, wow, so cool!",
      className:
        "absolute fixed left-[20%] top-[5%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.25 },
      src: "/images/icons/lambo.png",
    },
    stage: {
      name: "Stage",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
      className:
        "absolute left-[40%] top-[30%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.75 },
      src: "/images/icons/stage.png",
    },
    entrance: {
      name: "Entrance",
      info: "Entrance to the show, maybe there's some cool stuff here",
      className:
        "absolute left-[60%] top-[15%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.5 },
      src: "/images/icons/entrance.png",
    },
    concert: {
      name: "Live Performance",
      info: "You're probably not gonna wanna miss this preshow",
      className:
        "absolute left-[20%] top-[50%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 1 },
      src: "/images/icons/live_performance.png",
    },
    projection: {
      name: "Outdoor Projection",
      info: "Wow, look how pretty!",
      className:
        "absolute left-[60%] top-[70%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 1.25 },
      src: "/images/icons/outdoor_projection.png",
    },
  };
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [badgeShow, setBadgeShow] = useState(false);
  const [updating, setUpdating] = useState(true);
  const [goodJob, setGoodJob] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const navigate = useNavigate();

  const codes = {
    entrance: false,
    lambo: false,
    stage: false,
    projection: false,
    concert: false,
  };

  if (localStorage.getItem("codes") === null) {
    localStorage.setItem("codes", JSON.stringify(codes));
  }

  const [searchParams, setSearchParams] = useSearchParams();
  let code = searchParams.get("code");
  // console.log("QR Code Value:", code);

  const progressString = localStorage.getItem("codes");
  const progress = JSON.parse(progressString);

  const totalQR = Object.values(progress).length;
  const scannedQR = Object.values(progress).filter((val) => {
    return val === true;
  }).length;

  useEffect(() => {
    console.log("Local Storage:", progress);
    if (code) {
      if (Object.keys(progress).includes(code)) {
        console.log("*** That QR code looks legit!");
        console.log("Progress ", code + ":", progress[code]);
        progress[code] = true;
        console.log("New Progress ", code + ":", progress[code]);
        localStorage.setItem("codes", JSON.stringify(progress));
        console.log("New Local Storage:", progress);
        setUpdating(false);
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 3000);
        setGoodJob(true);
        setTimeout(() => {
          setGoodJob(false);
        }, 6000);
        navigate("/?code=");
      } else {
        console.log("*** Nope, nice try buddy");
      }
    }
    setUpdating(false);
  }, []);

  return (
    // Wallpaper Background
    <motion.div
      className="bg-center bg-cover flex flex-col items-center min-w-[100vw] min-h-[100vh] p-8 bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oEduOOq2VZhvNfZ6w%2Fgiphy.gif&f=1&nofb=1&ipt=30228e569abcd965b5888a9180f0ad9ad886f926270bded755719295ee53aba6&ipo=images')]"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
    >
      {/* <NavBar /> */}
      {/* Confetti */}
      {confetti && <Fireworks />}
      {/* <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-md animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 p-[.2rem] rounded-lg"></div> */}
      {/* <p className="text-white">
          QR Code Progress: {scannedQR} / {totalQR}
        </p> */}
      {/* Map */}
      <div className="relative bg-red-100 max-w-[20rem] w-full min-h-[45rem]">
        {/* REPLACE WITH HAMBURGER */}
        <button
          className="absolute top-1 right-1 bg-blue-100"
          onClick={() => setBadgeShow(true)}
        >
          Show Badge
        </button>
        {/* ^^^^^^^^^^^^ */}
        {!updating &&
          Object.entries(markers).map(([key, value]) => (
            <motion.img
              className={progress[key] ? value.className + " hover:animate-custom-spin" : value.className + " hover:animate-custom-bounce"}
              // style={{"transform": "none"}}
              initial={
                progress[key]
                  ? { y: -600, rotate: 5000 }
                  : { scale: 0, rotate: 500 }
              }
              animate={
                progress[key] ? { y: 0, rotate: 0 } : { scale: 1, rotate: 0 }
              }
              exit={{ y: 100 }}
              transition={value.transition}
              src={
                progress[key]
                  ? process.env.PUBLIC_URL + "/images/icons/star.png"
                  : process.env.PUBLIC_URL + value.src
              }
              key={key}
              onClick={() => {
                setSelectedInfo(value);
                setInfoShow(true);
              }}
            />
          ))}
      </div>
      <AnimatePresence>
        {infoShow && (
          <MapInfo selectedInfo={selectedInfo} setInfoShow={setInfoShow} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {badgeShow && (
          <BadgeInfo setBadgeShow={setBadgeShow} scannedQR={scannedQR} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {goodJob && <GoodJob scannedQR={scannedQR} totalQR={totalQR} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default MapPage;
