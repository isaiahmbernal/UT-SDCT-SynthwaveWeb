import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

const badges = [
  "/logo192.png",
  "/images/icons/entrance_star.png",
  "/images/icons/lambo_star.png",
  "/images/icons/live_performance_star.png",
  "/images/icons/outdoor_projection_star.png",
  "/images/icons/stage_star.png",
  "/images/icons/games_star.png",
];

const Submission = ({ setBadgeShow, scannedQR, totalQR }) => {
  const [name, setName] = useState("");
  const [hometown, setHometown] = useState("");

  // useEffect(() => {
  //   console.log("Name:", name, "Hometown:", hometown);
  // }, [name, hometown]);

  return (
    <motion.form
      // initial={{ x: 1000 }}
      // animate={{ x: 0 }}
      // exit={{ x: 1000 }}
      // transition={{ duration: 0.15 }}
      className="z-50 relative flex flex-col bg-black/90 min-w-[100vw] min-h-[100vh] p-8 gap-8"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-2xl text-center">
          Thanks for participating in our event!
        </p>
        <p className="text-white font-bold text-2xl text-center">
          Submit below to see your score on the screen!
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold text-3xl">Name:</p>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="px-2 py-1 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-white font-bold text-3xl">Hometown:</p>
        <input
          type="text"
          placeholder="Hometown"
          value={hometown}
          onChange={(event) => setHometown(event.target.value)}
          className="px-2 py-1 rounded-md"
        />
      </div>

      <p className="text-white text-center font-bold text-3xl">
        Score: {scannedQR}
      </p>
      <img src={badges[scannedQR]} className="w-15 h-15 self-center animate-wiggle hover:animate-custom-spin" />
      <button
        className="bg-purple-800 text-white self-center w-[75%] h-[3rem] rounded-lg shadow-md"
        type="submit"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default Submission;
