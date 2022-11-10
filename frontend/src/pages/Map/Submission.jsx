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
        <p className="text-white font-bold text-xl text-center">
          Thanks for participating!
        </p>
      </div>

      <div className="flex max-w-[23rem] w-full flex-col gap-2">
        <p className="text-white font-bold text-2xl">Name:</p>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="px-2 py-1 rounded-md"
        />
      </div>

      <input
        type="hidden"
        value="unknown"
        name="location"
        className="px-2 py-1 rounded-md"
      />

      <select id="color" name="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>

      <input type="hidden" name="score" value="10" />

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
