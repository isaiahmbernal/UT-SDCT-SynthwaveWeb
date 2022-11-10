import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const Submission = ({ setBadgeShow, scannedQR, totalQR }) => {
  // const [name, setName] = useState('');
  // const [hometown, setHometown] = useState('');

  // useEffect(() => {
  //   console.log("Name:", name, "Hometown:", hometown);
  // }, [name, hometown]);

  return (
    <motion.form
      className="z-50 relative flex flex-col items-center bg-black/90 min-w-[100vw] min-h-[100vh] p-8 gap-8"
      // onSubmit={(event) => {
      //   event.preventDefault();
      // }}
      action="https://synthwave.site/"
      method="POST"
    >
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-xl text-center">
          Thanks for participating!
        </p>
        {/* <p className="text-white font-bold text-2xl text-center">
          Submit below to see your score on the screen!
        </p> */}
      </div>

      <div className="flex max-w-[23rem] w-full flex-col gap-2">
        <p className="text-white font-bold text-2xl">Name:</p>
        <input
          type="text"
          placeholder="Name"
          // value={name}
          name="name"
          // onChange={(event) => setName(event.target.value)}
          className="px-2 py-1 rounded-md"
        />
      </div>

      {/* <div className="flex flex-col max-w-[23rem] w-full gap-2"> */}
      {/* <p className="text-white font-bold text-2xl">Hometown:</p> */}
      <input
        type="hidden"
        // placeholder="Hometown"
        value="unknown"
        name="location"
        // onChange={(event) => setHometown(event.target.value)}
        className="px-2 py-1 rounded-md"
      />
      {/* </div> */}

      <select id="color" name="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      {/* <p className="text-white text-center max-w-[23rem] w-full font-bold text-3xl">
        Score: {scannedQR}
      </p> */}
      <input type="hidden" name="score" value="10" />
      {/* <img src={badges[scannedQR]} className="max-w-[10rem] w-full self-center animate-wiggle hover:animate-custom-spin" /> */}
      <button
        className="bg-purple-800 max-w-[23rem] text-white self-center w-full h-[3rem] rounded-lg shadow-md"
        type="submit"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default Submission;
