import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useState } from 'react';

const Submission = ({ setBadgeShow, scannedQR, totalQR }) => {
  return (
    <motion.form
      className="z-50 relative flex flex-col items-center bg-black/90 min-w-[100vw] min-h-[100vh] p-8 gap-8"
      action="https://synthwave.site/"
      method="POST"
    >
      <div className="flex flex-col gap-4">
        <p className="text-white font-bold text-3xl text-center">
          Thanks for participating!
        </p>
      </div>

      <div className="flex max-w-[23rem] w-full flex-col gap-2">
        <p className="text-white font-bold text-2xl">Your Name:</p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-3 py-1 text-xl rounded-md"
        />
      </div>

      <input
        type="hidden"
        value="unknown"
        name="location"
        className="px-2 py-1 rounded-md"
      />

      <select
        id="color"
        name="color"
        className="max-w-[23rem] w-full h-[2.5rem] text-xl rounded-lg px-2"
      >
        <option disabled selected className="block w-full">
          Choose a color
        </option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <input type="hidden" name="score" value="10" />

      <button
        className="bg-black max-w-[23rem] border-double border-neonBlue border-4 text-white self-center w-full h-[3rem] rounded-lg shadow-md"
        type="submit"
      >
        Submit
      </button>
    </motion.form>
  );
};

export default Submission;
