import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PageLayout from "./PageLayout";

const CountdownPage = () => {
  const codes = {
    entrance: false,
    lambo: false,
    stage: false,
    projection: false,
    concert: false,    
  };

  if (localStorage.getItem("synthwaver") === null) {
    localStorage.setItem("synthwaver", true);
    localStorage.setItem("codes", JSON.stringify(codes));
  }

  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");

  console.log("QR Code Value:", code);

  if (code !== null) {
    const progressString = localStorage.getItem("codes");
    const progress = JSON.parse(progressString);

    if (Object.keys(progress).includes(code)) {
      console.log("*** That QR code looks legit!");
      progress[code] = true;
      localStorage.setItem("codes", JSON.stringify(progress));
      console.log("New Local Storage:", progress);
    } else {
      console.log("*** Nope, nice try buddy");
      console.log("Local Storage:", progress);
    }
  }

  return (
    <PageLayout>
      {/* Background Div */}
      <div className="relative bg-pink-grid bg-center flex flex-col items-center w-full h-full p-4">
        {/* Component Code Goes Here */}
        <p className="text-white">Countdown Page</p>
        <p className="text-white">Test, is this thing on</p>
        {/* <p className="text-white">{code}</p> */}
      </div>
    </PageLayout>
  );
};

export default CountdownPage;
