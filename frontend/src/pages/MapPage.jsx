import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const MapPage = () => {
  const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });
  const [center, setCenter] = useState({ lat: 30.2853294530747, lng: -97.7345134112601 });
  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [zoom, setZoom] = useState(18);

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
    <div className="min-w-screen min-h-screen bg-running-background bg-center bg-cover flex flex-col items-center gap-[3vh]">
      <nav className="bg-purple-600 text-white h-[7vh] w-full flex gap-4 items-center justify-center rounded-b-lg shadow-lg">
        <p className="cursor-pointer">Map</p>
        <p className="cursor-pointer">Countdown</p>
        <p className="cursor-pointer">About</p>
      </nav>
      {isLoaded ? (
        <div className="w-[90vw] h-[87vh] flex flex-col items-center">
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
            mapContainerClassName="self-center w-full h-full shadow-2xl border-[.20rem] border-purple-500 rounded-lg shadow-xl"
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
            <section className="absolute bottom-0 z-10 h-[40%] w-full rounded-t-lg shadow-xl bg-black/80 text-white flex flex-col items-center justify-between py-6 px-3">
              <h1 className="font-bold text-2xl">{selectedInfo.name}</h1>
              <p className="text-center">{selectedInfo.info}</p>
              <button className="bg-purple-600 p-2 rounded-lg" onClick={() => setInfoShow(false)}>
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
