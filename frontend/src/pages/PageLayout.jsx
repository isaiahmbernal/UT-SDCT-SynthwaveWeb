import { Link } from "react-router-dom";

const PageLayout = ({ children }) => {
  return (
    <div className="min-w-screen min-h-screen bg-running-background bg-center bg-cover flex flex-col items-center gap-[3vh]">
      <nav className="bg-purple-600 text-white font-share-tech-mono h-[7vh] w-full flex gap-4 items-center justify-center shadow-2xl">
        <Link to={"/"}>Map</Link>
        <Link to={"/countdown"}>Countdown</Link>
        <Link to={"/progress"}>Progress</Link>
        <Link to={"/about"}>About</Link>
      </nav>
      <div className="relative w-[90vw] h-[87vh]">{children}</div>
    </div>
  );
};

export default PageLayout;
