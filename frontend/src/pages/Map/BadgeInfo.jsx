const imageSources = [
  "/images/icons/entrance.png",
  "/images/icons/lambo.png",
  "/images/icons/live_performance.png",
  "/images/icons/outdoor_projection.png",
  "/images/icons/stage.png",
  "/images/icons/entrance.png",
  "/images/icons/lambo.png",
  "/images/icons/live_performance.png",
  "/images/icons/star.png",
  "/images/icons/star.png"
];

const BadgeInfo = ({ setBadgeShow, scannedQR }) => {
  return (
    <div className="absolute bg-black/90 w-[100vw] h-[97vh]">
      <button
        className="text-white bg-black absolute top-1 right-1"
        onClick={() => setBadgeShow(false)}
      >
        Hide Badge
      </button>
      <div className="absolute m-8 bg-white max-w-[20rem] w-[50vw]">

        <div className="text-center mt-4">
          <b className="text-3xl text-violet-700">
            Badges Earned
          </b>
        </div>

        
        <div className="mx-4 mt-4 mb-8 grid gap-4 grid-cols-2 grid-rows-5">
          {
            imageSources.filter((s, i) => i < scannedQR).map
              (src => (
                <img src={src} />
              ))
          }
        </div>

        {/* {scannedQR == 1 && (
          <div style={{ margin: "10px" }}>
            {
              imageSources.filter((s, i) => i < scannedQR).map
                (src => (
                  <img class="w-[33vw]" src={src} />
                ))
            }
          </div>
        )} */}

      </div>
    </div>
  );
};

export default BadgeInfo;
