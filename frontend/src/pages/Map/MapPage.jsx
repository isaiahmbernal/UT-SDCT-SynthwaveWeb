import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import PageLayout from "../PageLayout";
import MapInfo from "./MapInfo";
import Fireworks from "./Fireworks";

const MapPage = () => {
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});

  const markers = [
    {
      name: "Lambo",
      pos: { lat: 30.285334132718514, lng: -97.73454023334875 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/racing-car_1f3ce-fe0f.png",
      info: "This is a lamborghini, wow, so cool!",
    },
    {
      name: "Stage",
      pos: { lat: 30.285380455779517, lng: -97.73497743341647 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/musical-keyboard_1f3b9.png",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
    },
    {
      name: "Entrance",
      pos: { lat: 30.28529468192374, lng: -97.73404901655661 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/waving-hand_1f44b.png",
      info: "Entrance to the show, maybe there's some cool stuff here",
    },
    {
      name: "Indoor Performance",
      pos: { lat: 30.285910777093562, lng: -97.73478125961479 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/ticket_1f3ab.png",
      info: "You're probably not gonna wanna miss this preshow",
    },
    {
      name: "Outdoor Projection",
      pos: { lat: 30.28566063365411, lng: -97.73476516636173 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/film-projector_1f4fd-fe0f.png",
      info: "Wow, look how pretty!",
    },
  ];

  return (
    <PageLayout>
      {/* Wallpaper Background */}
      <motion.div
        className="bg-simple-running bg-center bg-cover flex flex-col items-center w-full h-full p-4"
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
      >
        {/* <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-md animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 p-[.2rem] rounded-lg"></div> */}
        {/* Map Container */}
        <Fireworks />
        <div className="relative aspect-[4/9] bg-center bg-cover max-w-[36rem] w-full max-h-[40rem] bg-[url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-01dGvJQ0DYw%2FU-pCnkiYILI%2FAAAAAAAAD_A%2FGEWTv7xRD00%2Fs1600%2F1-Plan.jpg&f=1&nofb=1&ipt=f0be7985de87184b4ac267e8a58bef353c1867677d1e56292b8bf643085bac12&ipo=images')]">
          <motion.img
            className="left-[35%] top-[12%] absolute w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce"
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.25 }}
            src={
              process.env.PUBLIC_URL + "/images/icons/outdoor_projection.png"
            }
          ></motion.img>
          <motion.img
            className="left-[20%] top-[30%] absolute w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce"
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 }}
            src={process.env.PUBLIC_URL + "/images/icons/entrance.png"}
          ></motion.img>
          <motion.img
            className="left-[50%] top-[50%] absolute w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce"
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.75 }}
            src={process.env.PUBLIC_URL + "/images/icons/lambo.png"}
          ></motion.img>
          <motion.img
            className="left-[30%] top-[60%] absolute w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce"
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1 }}
            src={process.env.PUBLIC_URL + "/images/icons/stage.png"}
          ></motion.img>
          <motion.img
            className="left-[50%] top-[70%] absolute w-[5rem] h-[5rem] cursor-pointer hover:animate-custom-bounce"
            initial={{ scale: 0, rotate: 360 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.25 }}
            src={process.env.PUBLIC_URL + "/images/icons/live_performance.png"}
          ></motion.img>
        </div>
        <AnimatePresence>
          {infoShow && (
            <MapInfo selectedInfo={selectedInfo} setInfoShow={setInfoShow} />
          )}
        </AnimatePresence>
      </motion.div>
    </PageLayout>
  );
};

export default MapPage;
