import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import PageLayout from "./PageLayout";

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
      name: "Stage",
      pos: { lat: 30.285380455779517, lng: -97.73497743341647 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/musical-keyboard_1f3b9.png",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
    },
    {
      name: "Lambo",
      pos: { lat: 30.285334132718514, lng: -97.73454023334875 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/racing-car_1f3ce-fe0f.png",
      info: "This is a lamborghini, wow, so cool!",
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
        <>
          <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-md animate-pulse bg-gradient-to-r from-pink-500 to-purple-500 p-[.2rem] rounded-lg"></div>
          <GoogleMap
            options={{
              mapId: "3f5b35b7ec5cba24",
              fullscreenControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              zoomControl: false,
            }}
            zoom={zoom}
            center={center}
            mapContainerClassName="self-center w-full h-full rounded-xl border-[.2rem] border-purple-700 shadow-xl"
          >
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
          </GoogleMap>
          {infoShow && (
            <motion.section
              className="absolute bottom-0 z-10 h-[35vh] w-full font-share-tech-mono rounded-xl shadow-2xl bg-purple-800/90 text-white flex flex-col items-center justify-between p-4 gap-4"
              initial={{ y: 100 }}
              animate={{ y: 0 }}
            >
              <div className="h-[20%] w-full flex items-center justify-between">
                <motion.h1
                  className="bg-black/10 rounded-xl px-2 py-1 font-bold text-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {selectedInfo.name}
                </motion.h1>
                <motion.button
                  className="bg-red-700 px-4 py-2 rounded-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  onClick={() => setInfoShow(false)}
                >
                  X
                </motion.button>
              </div>
              <motion.p
                className="text-justify rounded-xl h-full w-full bg-black/10 text-white overflow-y-scroll text-lg px-2 py-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {selectedInfo.info}
              </motion.p>
            </motion.section>
          )}
        </>
      ) : (
        <h1 className="text-center text-white">Loading...</h1>
      )}
    </PageLayout>
  );
};

export default MapPage;
