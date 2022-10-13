import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PageLayout from "../PageLayout";
import MapInfo from "./MapInfo";
import Fireworks from "./Fireworks";
import { useSearchParams } from "react-router-dom";
import BadgeInfo from "./BadgeInfo";

const MapPage = () => {
  const codes = {
    entrance: false,
    lambo: false,
    stage: false,
    projection: false,
    concert: false,
  };

  if (localStorage.getItem("synthwaver") === null) {
    localStorage.setItem("synthwaver", true);
    localStorage.setItem("codes", JSON.stringify(codes));
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  // console.log("QR Code Value:", code);

  const progressString = localStorage.getItem("codes");
  const progress = JSON.parse(progressString);

  if (code !== null) {
    if (Object.keys(progress).includes(code)) {
      console.log("*** That QR code looks legit!");
      progress[code] = true;
      localStorage.setItem("codes", JSON.stringify(progress));
      console.log("New Local Storage:", progress);
    } else {
      console.log("*** Nope, nice try buddy");
      console.log("Local Storage:", progress);
    }
  }

  const totalQR = Object.values(progress).length;
  const scannedQR = Object.values(progress).filter((val) => {
    return val === true;
  }).length;

  // console.log("QR Progress:", progress);

  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [badgeShow, setBadgeShow] = useState(false);

  const markers = [
    {
      code: "lambo",
      name: "Lambo",
      info: "This is a lamborghini, wow, so cool!",
      className:
        "absolute left-[20%] top-[5%] w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce",
      transition: { delay: 0.25 },
      src: "/images/icons/lambo.png",
    },
    {
      code: "stage",
      name: "Stage",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
      className:
        "absolute left-[40%] top-[30%] w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce",
      transition: { delay: 0.75 },
      src: "/images/icons/stage.png",
    },
    {
      code: "entrance",
      name: "Entrance",
      info: "Entrance to the show, maybe there's some cool stuff here",
      className:
        "absolute left-[60%] top-[15%] w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce",
      transition: { delay: 0.5 },
      src: "/images/icons/entrance.png",
    },
    {
      code: "concert",
      name: "Live Performance",
      info: "You're probably not gonna wanna miss this preshow",
      className:
        "absolute left-[20%] top-[50%] w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce",
      transition: { delay: 1 },
      src: "/images/icons/live_performance.png",
    },
    {
      code: "projection",
      name: "Outdoor Projection",
      info: "Wow, look how pretty!",
      className:
        "absolute left-[60%] top-[70%] w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce",
      transition: { delay: 1.25 },
      src: "/images/icons/outdoor_projection.png",
    },
  ];

  return (
    <PageLayout>
      {/* Wallpaper Background */}
      <motion.div
        className="bg-[url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3oEduOOq2VZhvNfZ6w%2Fgiphy.gif&f=1&nofb=1&ipt=30228e569abcd965b5888a9180f0ad9ad886f926270bded755719295ee53aba6&ipo=images')] bg-center bg-cover flex flex-col items-center w-full h-full p-4"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
      >
        <Fireworks />
        {/* <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-md animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 p-[.2rem] rounded-lg"></div> */}
        <p className="text-white">
          QR Code Progress: {scannedQR} / {totalQR}
        </p>
        <div className="relative bg-red-100 max-w-[20rem] w-full max-h-[33rem] h-full">
          <button
            className="absolute top-1 right-1 bg-blue-100"
            onClick={() => setBadgeShow(true)}
          >
            Show Badge
          </button>
          {markers.map((marker, index) => (
            <motion.img
              className={marker.className}
              // initial={marker.initial}
              initial={
                progress[marker.code]
                  ? { y: -500, rotate: 4000 }
                  : { scale: 0, rotate: 360 }
              }
              animate={
                progress[marker.code]
                  ? { y: 0, rotate: 0 }
                  : { scale: 1, rotate: 0 }
              }
              transition={marker.transition}
              src={
                progress[marker.code]
                  ? process.env.PUBLIC_URL + "/images/icons/star.png"
                  : process.env.PUBLIC_URL + marker.src
              }
              key={index}
              onClick={() => {
                setSelectedInfo(marker);
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
      </motion.div>
    </PageLayout>
  );
};

export default MapPage;
