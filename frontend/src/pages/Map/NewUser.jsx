const NewUser = () => {
  return (
    <section className="relative w-full h-full">
      <div className="z-[-1] absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500/75 to-blue-500/75"></div>
      <div className="w-full h-full bg-black/75 text-white text-xl text-center rounded-xl flex flex-col px-10 py-4 gap-4 items-center">
        <h1>Welcome!</h1>
        <p>Visit all the map locations, scan their QR codes and win a free T-shirt!</p>
      </div>
    </section>
  );
};

export default NewUser;
