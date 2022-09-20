import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black border-[.1rem] border-border text-white font-share-tech-mono h-[7vh] w-full flex gap-4 items-center justify-center shadow-2xl">
      <Link to={"/"}>Countdown</Link>
      <Link to={"/map"}>Map</Link>
      <Link to={"/progress"}>Progress</Link>
      <Link to={"/about"}>About</Link>
    </nav>
  );
};

export default Navbar;
