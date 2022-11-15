import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MapInfo from './MapInfo';
import Fireworks from './Fireworks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BadgeInfo from './BadgeInfo';
import GoodJob from './GoodJob';
import ProgressBar from './ProgressBar';
import Submission from './Submission';
import NewUser from './NewUser';

const MapPage = () => {
  const markers = {
    lambo: {
      name: 'Synthwave Lamborghini',
      info: 'Check out a life-size Lamborghini Countach, featuring a range of creative programming on custom interactive screens!',
      className: 'left-[53%] top-[49.3%]',
      transition: { delay: 0.7 },
      src: '/images/icons/MarkerGreenRight.png',
      alt: '/images/icons/MarkerRedRight.png',
      badge: '/images/icons/lambo_star.png',
    },
    stage: {
      name: 'Stage Performances',
      info: 'Enjoy live synth-music with custom lighting, written and performed by UT students!',
      className: 'left-[19%] top-[46%]',
      transition: { delay: 0.2 },
      src: '/images/icons/MarkerGreenLeft.png',
      alt: '/images/icons/MarkerRedLeft.png',
      badge: '/images/icons/stage_star.png',
    },
    lobby: {
      name: 'Arcade Experience',
      info: "Visit a playground for classic 80's arcade animation including a light reactive backdrop, reimagined arcade games, an ambient audio experience, and a TV Wave sculpture.",
      className: 'left-[23%] top-[15%]',
      transition: { delay: 0.3 },
      src: '/images/icons/MarkerGreenLeft.png',
      alt: '/images/icons/MarkerRedLeft.png',
      badge: '/images/icons/entrance_star.png',
    },
    projection: {
      name: 'Projection Experience',
      info: 'Admire iconic synthwave imagery, with active animation made visible on the side of the Winship Drama building!',
      className: 'left-[43%] top-[45%]',
      transition: { delay: 0.4 },
      src: '/images/icons/MarkerGreenRight.png',
      alt: '/images/icons/MarkerRedRight.png',
      badge: '/images/icons/outdoor_projection_star.png',
    },
    games: {
      name: 'Electric Avenue',
      info: "Show off your skill, and play in a number of synthwave-themed games!",
      className: 'left-[38%] top-[53%]',
      transition: { delay: 0.5 },
      src: '/images/icons/MarkerGreenLeft.png',
      alt: '/images/icons/MarkerRedLeft.png',
      badge: '/images/icons/games_star.png',
    },
    river: {
      name: 'Rivers of Light',
      info: "Stroll by the whimsical rivers of light, and take in the world of 80's themed colors and visuals!",
      className: 'left-[60%] top-[71%]',
      transition: { delay: 0.9 },
      src: '/images/icons/MarkerGreenLeft.png',
      alt: '/images/icons/MarkerRedLeft.png',
      badge: '/images/icons/river_star.png',
    },
    bike: {
      name: 'Light Bike',
      info: "Strike a pose at this synthwave photo-op, a homage to a classic '80s vehicle!",
      className: 'left-[40%] top-[80%]',
      transition: { delay: 0.6 },
      src: '/images/icons/MarkerGreenRight.png',
      alt: '/images/icons/MarkerRedRight.png',
      badge: '/images/icons/bike_star.png',
    },
    steprepeat: {
      name: 'Step & Repeat',
      info: 'Step up and smile! Gather your friends at this event-themed spot to snap a few memorable pics!',
      className: 'left-[53%] top-[55%]',
      transition: { delay: 0.8 },
      src: '/images/icons/MarkerGreenRight.png',
      alt: '/images/icons/MarkerRedRight.png',
      badge: '/images/icons/steprepeat_star.png',
    },
    finale: {
      name: 'The Theater',
      info: "Ride the Synthwave with The Midnight for an exclusive UT performance, doors open at 7:30.",
      className: 'left-[33%] top-[6.5%]',
      transition: { delay: 0.1 },
      src: '/images/icons/MarkerGreenLeft.png',
      alt: '/images/icons/MarkerRedLeft.png',
      badge: '/images/icons/live_performance_star.png',
    },
  };

  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [badgeShow, setBadgeShow] = useState(false);
  const [updating, setUpdating] = useState(true);
  const [isNew, setIsNew] = useState(false);
  const [goodJob, setGoodJob] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const [finale, setFinale] = useState(false);
  const navigate = useNavigate();

  const codes = {
    lambo: false,
    stage: false,
    lobby: false,
    river: false,
    // finale: false,
    projection: false,
    games: false,
    river: false,
    bike: false,
    steprepeat: false,
  };

  if (localStorage.getItem('codes') === null) {
    localStorage.setItem('codes', JSON.stringify(codes));
    localStorage.setItem('finale', false);
    localStorage.setItem('recentScan', '');
    localStorage.setItem('isNew', true);
  }

  const [searchParams, setSearchParams] = useSearchParams();
  let code = searchParams.get('code');
  // console.log("QR Code Value:", code);
  let finaleString = localStorage.getItem('finale');
  let finaleStorage = JSON.parse(finaleString);
  let isNewString = localStorage.getItem('isNew');
  let isNewStorage = JSON.parse(isNewString);

  const progressString = localStorage.getItem('codes');
  const progress = JSON.parse(progressString);

  const totalQR = Object.values(progress).length;
  const scannedQR = Object.values(progress).filter((val) => {
    return val === true;
  }).length;

  useEffect(() => {
    // console.log('Local Storage:', progress);
    // console.log('Finale Storage:', finaleStorage);
    // console.log('Finale:', finale);
    // console.log('isNew:', isNew);
    if (finaleStorage === true) {
      setFinale(true);
    } else if (isNewStorage) {
      setIsNew(true);
      setTimeout(() => {
        setIsNew(false);
        localStorage.setItem('isNew', false);
      }, 10000);
    }
    if (code) {
      if (code == 'finale') {
        localStorage.setItem('finale', true);
        // console.log('*** That QR code looks legit!');
        // console.log('Progress ', code + ':', progress[code]);
        progress[code] = true;
        // console.log('New Progress ', code + ':', progress[code]);
        localStorage.setItem('codes', JSON.stringify(progress));
        // console.log('New Local Storage:', progress);
        localStorage.setItem('recentScan', code);
        setFinale(true);
      } else if (Object.keys(progress).includes(code)) {
        // console.log('*** That QR code looks legit!');
        // console.log('Progress ', code + ':', progress[code]);
        progress[code] = true;
        // console.log('New Progress ', code + ':', progress[code]);
        localStorage.setItem('codes', JSON.stringify(progress));
        // console.log('New Local Storage:', progress);
        localStorage.setItem('recentScan', code);
        let goodJobTimer = 7000
        if (scannedQR == 8) {goodJobTimer = 15000}
        setUpdating(false);
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 3000);
        setGoodJob(true);
        setTimeout(() => {
          setGoodJob(false);
        }, goodJobTimer);
        navigate('/?code=');
      } else {
        // console.log('*** Nope, nice try buddy');
      }
    } else if (scannedQR == 8) {
      let goodJobTimer = 15000
      setGoodJob(true);
        setTimeout(() => {
          setGoodJob(false);
        }, goodJobTimer);
    }
    setUpdating(false);
  }, []);

  return (
    // Wallpaper Background
    <div className="bg-gradient-to-b from-backgroundTop to-backgroundBot bg-center bg-cover flex flex-col items-center justify-start min-w-[100vw] min-h-[100vh]">
      {/* Confetti */}
      {confetti && <Fireworks />}

      {/* Map */}
      {!finale && !badgeShow && (
        <motion.div
          className="relative max-w-[24.5rem] w-full h-screen min-h-[41.7rem] max-h-[43rem] flex flex-col"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500"></div>
          <div className="z-[1] relative bg-map bg-cover bg-center w-full h-full shadow-md">
            <ProgressBar
              scannedQR={scannedQR}
              totalQR={totalQR}
              setBadgeShow={setBadgeShow}
              markers={markers}
            />
            {!updating &&
              Object.entries(markers).map(([key, value]) => (
                <motion.div
                  key={key}
                  className={
                    value.className +
                    ` absolute cursor-pointer ${
                      progress[key]
                        ? 'w-[2rem] h-[2rem] hover:animate-custom-bounce'
                        : 'w-[2rem] h-[2rem] hover:animate-custom-bounce'
                    }`
                  }
                  onClick={() => {
                    setSelectedInfo(value);
                    setInfoShow(true);
                  }}
                  initial={
                    progress[key] ? { scale: 0 } : { scale: 0, opacity: 0 }
                  }
                  animate={
                    progress[key] ? { scale: 1 } : { scale: 1, opacity: 1 }
                  }
                  transition={
                    progress[key]
                      ? value.transition
                      : { ...value.transition, duration: 0.75 }
                  }
                >
                  <img
                    className={
                      progress[key]
                        ? 'absolute pointer-events-none'
                        : 'absolute pointer-events-none'
                    }
                    src={progress[key] ? value.src : value.alt}
                  />
                  {!progress[key] && (
                    <img
                      className={
                        'absolute left-[14%] top-[12%] w-[1.5rem] h-[1.5rem] pointer-events-none saturate-200 hue-rotate-[320deg] brightness-150 animate-custom-ping'
                      }
                      src={'/images/icons/GlowIcon.png'}
                    />
                  )}
                </motion.div>
              ))}
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {infoShow && (
          <MapInfo selectedInfo={selectedInfo} setInfoShow={setInfoShow} />
        )}
      </AnimatePresence>

      {badgeShow && (
        <BadgeInfo
          setBadgeShow={setBadgeShow}
          scannedQR={scannedQR}
          markers={markers}
          progress={progress}
        />
      )}

      <AnimatePresence>
        {(goodJob || isNew) && (
          <motion.div
            className="fixed top-[1%] max-w-[23rem] w-full z-[100] max-h-[16rem] flex flex-col gap-4"
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            exit={{ y: -500 }}
            transition={{ delay: 1, duration: 1 }}
            key="HUD"
          >
            {goodJob && <GoodJob scannedQR={scannedQR} totalQR={totalQR} />}
            {isNew && <NewUser />}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {finale && (
          <Submission setBadgeShow={setBadgeShow} scannedQR={scannedQR} />
        )}
      </AnimatePresence>

      {/* <AnimatePresence>
        {goodJob && (
          <motion.img
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F000%2F480%2F551%2Fb04.gif&f=1&nofb=1&ipt=5c14c11514a36193a5fb0615462db3a50e0ab0b9d3d0b4c3d469b2c09a2e7da0&ipo=images"
            className="z-50 fixed -bottom-[3rem]"
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            exit={{ x: 500 }}
          />
        )}
      </AnimatePresence> */}
    </div>
  );
};

export default MapPage;
