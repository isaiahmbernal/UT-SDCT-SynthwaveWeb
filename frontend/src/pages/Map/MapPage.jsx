import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import PageLayout from "../PageLayout";
import MapInfo from "./MapInfo";

const MapPage = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const [center, setCenter] = useState({
    lat: 30.2853294530747,
    lng: -97.7345134112601,
  });
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [zoom, setZoom] = useState(18);

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
      {isLoaded ? (
        <motion.div
          className="relative bg-simple-running bg-center bg-cover flex flex-col items-center w-full h-full p-4"
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
        >
          {/* <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-md animate-pulse bg-gradient-to-r from-blue-500 to-blue-600 p-[.2rem] rounded-lg"></div> */}
          <div className="flex justify-center flex-grow-0 relative w-full h-full bg-red-100">
            <img
              src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1.bp.blogspot.com%2F-01dGvJQ0DYw%2FU-pCnkiYILI%2FAAAAAAAAD_A%2FGEWTv7xRD00%2Fs1600%2F1-Plan.jpg&f=1&nofb=1&ipt=733a0c9bab93acff7fb8d8deaddbc8f5aabeaff4a44e6b368cdb99fecd0f886d&ipo=images"
              className=""
            />
            <motion.img
              className="left-[50%] top-[50%] absolute bg-blue-600 w-[5rem] h-[5rem] cursor-pointer hover:animate-spin"
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              transition={{ delay: 1 }}
              src="https://cdn.discordapp.com/attachments/1014238964061847654/1024392516688154694/lambo.png"
            ></motion.img>
            <motion.div
              className="left-[50%] top-[30%] absolute bg-blue-600 w-[5rem] h-[5rem] cursor-pointer hover:animate-spin"
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              transition={{ delay: 2 }}
            ></motion.div>
          </div>

          {/* <GoogleMap
            options={{
              mapId: "3f5b35b7ec5cba24",
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              zoomControl: false,
              maxZoom: zoom + 1,
              minZoom: zoom - 0.3,
            }}
            zoom={zoom}
            center={center}
            mapContainerClassName="relative self-center w-full h-full border-[.1rem] border-border shadow-xl"
          >
            <motion.button
              className="absolute left-[6.6rem] top-[.35rem] bg-black/90 border-[.1rem] border-border text-white p-2 font-share-tech-mono"
              initial={{ x: -100 }}
              onClick={() => setCenter(markers[0].pos)}
            >
              Re-center Map
            </motion.button>
            {markers.map((marker, index) => (
              <MarkerF
                position={marker.pos}
                key={index}
                onClick={() => {
                  setInfoShow(true);
                  setSelectedInfo(marker);
                  setCenter(marker.pos);
                }}
                icon={{
                  url: marker.ico
                    ? marker.ico
                    : "https://www.svgrepo.com/show/129576/music-note.svg",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            ))}
          </GoogleMap> */}
          <AnimatePresence>
            {infoShow && (
              <MapInfo selectedInfo={selectedInfo} setInfoShow={setInfoShow} />
            )}
          </AnimatePresence>
        </motion.div>
      ) : (
        <h1 className="text-center text-white">Loading...</h1>
      )}
    </PageLayout>
  );
};

export default MapPage;
