import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapPage = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });
  const [center, setCenter] = useState({ lat: 30.2853294530747, lng: -97.7345134112601 });
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [zoom, setZoom] = useState(18);
  const infoHeight = "40vh";

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
    <div className="min-w-screen min-h-screen bg-running-background bg-center bg-cover flex flex-col items-center gap-[3vh]">
      <nav className="bg-purple-600 text-white h-[7vh] w-full flex gap-4 items-center justify-center rounded-b-lg shadow-lg">
        <p className="cursor-pointer">Map</p>
        <p className="cursor-pointer">Countdown</p>
        <p className="cursor-pointer">About</p>
      </nav>
      {isLoaded ? (
        <div>
          <div className="absolute w-[90vw] h-[87vh] flex flex-col items-center blur-sm animate-pulse bg-gradient-to-r from-pink-500 to-purple-500 p-[.2rem] rounded-lg"></div>
          <div className="w-[90vw] h-[87vh] flex flex-col items-center p-[.2rem] rounded-lg">
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
              mapContainerClassName="self-center w-full h-full rounded-lg border-[.2rem] border-purple-700 shadow-xl"
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
                    url: marker.ico ? marker.ico : "https://www.svgrepo.com/show/129576/music-note.svg",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                />
              ))}
            </GoogleMap>
            {infoShow && (
              <section className="group absolute transition ease-in-out hover:-translate-y-[30vh] -bottom-[30vh] z-10 h-[40vh] w-full rounded-t-lg shadow-2xl bg-black/80 text-white flex flex-col items-center justify-between">
                <div className="h-[10vh] w-full relative flex items-center justify-center">
                  <h1 className="font-bold text-2xl">{selectedInfo.name}</h1>
                  <img
                    className="group-hover:hidden absolute h-[40%] left-4"
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.iconsdb.com%2Ficons%2Fpreview%2Fwhite%2Farrow-up-xxl.png&f=1&nofb=1"
                  />
                </div>
                <div className="w-[80%] h-[40%] flex flex-col items-center justify-center">
                  <p className="overflow-y-scroll">{selectedInfo.info}</p>
                </div>
                <button className="bg-purple-600 w-[92%] p-2 m-[4vh] rounded-lg" onClick={() => setInfoShow(false)}>
                  Close
                </button>
              </section>
            )}
          </div>
        </div>
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </div>
  );
};

export default MapPage;
