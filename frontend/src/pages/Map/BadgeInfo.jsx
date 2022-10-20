const imageSources = [
  "/images/icons/entrance.png",
  "/images/icons/lambo.png",
  "/images/icons/live_performance.png",
  "/images/icons/outdoor_projection.png",
  "/images/icons/stage.png"
];

const BadgeInfo = ({ setBadgeShow, scannedQR }) => {
  scannedQR = 4
  return (
    <div className="absolute bg-black/90 w-[100vw] h-[90vh]">
      <button
        className="text-white bg-black absolute top-1 right-1"
        onClick={() => setBadgeShow(false)}
      >
        Hide Badge
      </button>
      <div className="absolute bg-white/20 w-[33vw]">

        <div style={{ textAlign: "center", margin: "10px" }}>
          <b style={{ fontSize: "Large", color: "green" }}>
            Badges Earned
          </b>
        </div>

        <div style={{ margin: "10px" }}>
          {
            imageSources.filter((s, i) => i < scannedQR).map
              (src => (
                <img class="w-[33vw]" src={src} />
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
