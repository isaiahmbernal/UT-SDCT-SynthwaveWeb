import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MapInfo from "./MapInfo";
import Fireworks from "./Fireworks";
import { useNavigate, useSearchParams } from "react-router-dom";
import BadgeInfo from "./BadgeInfo";
import GoodJob from "./GoodJob";
import ProgressBar from "./ProgressBar";

const MapPage = () => {
  const markers = {
    lambo: {
      name: "Lambo",
      info: "This is a lamborghini, wow, so cool!",
      className:
        "absolute fixed left-[20%] top-[5%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.25 },
      src: "/images/icons/lambo.png",
      alt: "/images/icons/lambo_star.png",
    },
    stage: {
      name: "Stage",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
      className:
        "absolute left-[40%] top-[30%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.75 },
      src: "/images/icons/stage.png",
      alt: "/images/icons/stage_star.png",
    },
    entrance: {
      name: "Entrance",
      info: "Entrance to the show, maybe there's some cool stuff here",
      className:
        "absolute left-[60%] top-[15%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 0.5 },
      src: "/images/icons/entrance.png",
      alt: "/images/icons/entrance_star.png",
    },
    concert: {
      name: "Live Performance",
      info: "You're probably not gonna wanna miss this preshow",
      className:
        "absolute left-[20%] top-[50%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 1 },
      src: "/images/icons/live_performance.png",
      alt: "/images/icons/live_performance_star.png",
    },
    projection: {
      name: "Outdoor Projection",
      info: "Wow, look how pretty!",
      className:
        "absolute left-[60%] top-[70%] w-[5rem] h-[5rem] cursor-pointer",
      transition: { delay: 1.25 },
      src: "/images/icons/outdoor_projection.png",
      alt: "/images/icons/outdoor_projection_star.png",
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
        }, 6000);
        setGoodJob(true);
        setTimeout(() => {
          setGoodJob(false);
        }, 4000);
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
      className="bg-center font-share-tech-mono bg-cover flex flex-col items-center min-w-[100vw] min-h-[100vh] bg-[url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2e%2F0d%2F84%2F2e0d842575ee5586bcfea75e42b16fe4.gif&f=1&nofb=1&ipt=f90b30e6a2e9bc12d65a8e66bccc2d796c0bab094dc90a91c9f110a65dbe16f1&ipo=images)]"
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
    >
      {/* Confetti */}
      {confetti && <Fireworks />}

      {/* Map */}
      <div className="relative bg-gray-400 min-w-[22rem] min-h-[45rem] mt-3 mb-3 rounded-xl shadow-md">
        <ProgressBar
          scannedQR={scannedQR}
          totalQR={totalQR}
          setBadgeShow={setBadgeShow}
        />
        {!updating &&
          Object.entries(markers).map(([key, value]) => (
            <motion.div
              className={value.className}
              initial={
                progress[key]
                  ? { y: -800, rotate: 5000 }
                  : { scale: 0, rotate: 500 }
              }
              animate={
                progress[key] ? { y: 0, rotate: 0 } : { scale: 1, rotate: 0 }
              }
              exit={{ y: 100 }}
              transition={value.transition}
            >
              <img
                className={
                  progress[key]
                    ? "animate-wiggle hover:animate-custom-spin"
                    : "hover:animate-custom-bounce"
                }
                // style={{"transform": "none"}}

                src={progress[key] ? value.alt : value.src}
                key={key}
                onClick={() => {
                  setSelectedInfo(value);
                  setInfoShow(true);
                }}
              />
            </motion.div>
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
      <AnimatePresence>
        {goodJob && (
          <motion.img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F480%2F551%2Fb04.gif&f=1&nofb=1&ipt=5c14c11514a36193a5fb0615462db3a50e0ab0b9d3d0b4c3d469b2c09a2e7da0&ipo=images"
            className="z-50 fixed -bottom-[3rem]"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            exit={{ x: 500 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MapPage;
