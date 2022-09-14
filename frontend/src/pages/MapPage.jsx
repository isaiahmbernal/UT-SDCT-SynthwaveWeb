import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapPage = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});

  const center = { lat: 30.2853294530747, lng: -97.7345134112601 };
  const markers = [
    {
      name: "Stage",
      pos: { lat: 30.285380455779517, lng: -97.73497743341647 },
      ico: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/musical-keyboard_1f3b9.png",
      info: "Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.",
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
    <div className="min-w-screen min-h-screen bg-mountain-wave bg-center bg-cover flex flex-col gap-6">
      <nav className="bg-purple-700 text-white h-10 flex gap-4 items-center justify-center rounded-b-lg shadow-lg">
        <p className="cursor-pointer">Map</p>
        <p className="cursor-pointer">Countdown</p>
        <p className="cursor-pointer">About</p>
      </nav>
      {isLoaded ? (
        <div className=" w-full flex flex-col items-center">
          <GoogleMap
            options={{ mapId: "3f5b35b7ec5cba24" }}
            zoom={18}
            center={center}
            mapContainerClassName="self-center w-full max-w-[90%] h-[30rem] border-[.2rem] border-gray-800 rounded-xl shadow-2xl"
          >
            {markers.map((marker, index) => (
              <MarkerF
                position={marker.pos}
                key={index}
                onClick={() => {
                  setInfoShow(true);
                  setSelectedInfo(marker);
                }}
                icon={{
                  url: marker.ico ? marker.ico : "https://www.svgrepo.com/show/129576/music-note.svg",
                  scaledSize: new window.google.maps.Size(50, 50),
                }}
              />
            ))}
          </GoogleMap>
          {infoShow && (
            <section className="absolute bottom-0 z-10 h-[50%] w-full rounded-t-lg shadow-xl bg-black/80 text-white flex flex-col items-center justify-between gap-4 p-8">
              <h1 className="font-bold text-2xl">{selectedInfo.name}</h1>
              <p className="text-center">{selectedInfo.info}</p>
              <button className="bg-red-700 p-2 rounded-lg" onClick={() => setInfoShow(false)}>
                Close
              </button>
            </section>
          )}
        </div>
      ) : (
        <h1 className="text-center">Loading...</h1>
      )}
    </div>
  );
};

export default MapPage;