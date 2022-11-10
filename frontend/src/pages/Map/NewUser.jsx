const NewUser = () => {
  return (
    <section className="relative w-full h-full">
      <div className="z-[-1] absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500"></div>
      <div className="w-full h-full bg-black/90 text-white text-xl text-center rounded-xl flex flex-col px-10 py-4 justify-between items-center">
        <h1>Welcome!</h1>
        <p>Scan all the QR codes and win a free T-shirt!</p>
      </div>
    </section>
  );
};

export default NewUser;
