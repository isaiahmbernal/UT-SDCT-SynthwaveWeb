const GoodJob = ({ scannedQR, totalQR }) => {
  return (
    <section className="relative w-full h-full">
      <div className="z-[-1] absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500/75 to-blue-500/75"></div>
      <div className="w-full h-full bg-black/75 text-white text-xl text-center rounded-xl flex flex-col px-10 py-8 justify-center items-center">
        {/* <h1>Good Job!</h1> */}
        {scannedQR < 8 ? (
          <p>
            Great! You've visited {scannedQR} out of {totalQR} locations!
          </p>
        ) : (
          <div className="flex flex-col gap-4">
            <p>
              Congratulations, you've completed your journey through Ride the
              Synthwave! Visit the SDCT table to collect your prize!
            </p>
            <p>
              Also, don't forget to scan one final QR code in the Payne Theater
              for a chance to ride a virtual Lamborghini.
            </p>
            <p>
              See you at The Midnight show at 8pm, doors open at 7:30. All
              welcome!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GoodJob;
