const BadgeInfo = ({ setBadgeShow, scannedQR }) => {
  return (
    <div className="absolute bg-black/80 w-[100vw] h-[100vh]">
      <button
        className="text-white bg-black absolute top-1 right-1"
        onClick={() => setBadgeShow(false)}
      >
        Hide Badge
      </button>
      {scannedQR == 0 && (
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fskateboard%2Fskateboard_PNG11728.png&f=1&nofb=1&ipt=adf5b84040bd31a9f61204ae937bdb6fd0ca65ddfe14a75bc35bf89c5368d47a&ipo=images" />
      )}
      {scannedQR == 1 && (
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpurepng.com%2Fpublic%2Fuploads%2Fmedium%2Flime-e-scooter-jkj.png&f=1&nofb=1&ipt=95de71135c8e0e608b46ff7307cef48c4aee2c6f9b6485334cd01634ce674e44&ipo=images" />
      )}
      {scannedQR == 2 && (
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.toyota-global.com%2Fcompany%2Fhistory_of_toyota%2F75years%2Fvehicle_lineage%2Fcar%2Fid60003543%2Fimages%2Fm1.png&f=1&nofb=1&ipt=1750dbf933d1ddd13cfe001cc86f771b7eb4a70f15d9f56f3caf6e59d88b5c66&ipo=images" />
      )}
      {scannedQR == 3 && (
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngplay.com%2Fwp-content%2Fuploads%2F13%2FToyota-AE86-Transparent-Image.png&f=1&nofb=1&ipt=c8f9621d8f28e6232b58d94ab60303ea0653a95f58e870fb20d871d9c668b358&ipo=images" />
      )}
    </div>
  );
};

export default BadgeInfo;
