import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MapInfo from './MapInfo';
import Fireworks from './Fireworks';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BadgeInfo from './BadgeInfo';
import GoodJob from './GoodJob';
import ProgressBar from './ProgressBar';
import Submission from './Submission';

const MapPage = () => {
  const markers = {
    lambo: {
      name: 'Lambo',
      info: "Woah, where'd they get a lamborghini! 🤩",
      className:
        'absolute fixed left-[49%] top-[49%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.7 },
      src: '/images/icons/lambo.png',
      alt: '/images/icons/lambo_star.png',
    },
    stage: {
      name: 'Interactive Music',
      info: 'Time to interact with some music 😎',
      className:
        'absolute left-[5%] top-[42%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.2 },
      src: '/images/icons/stage.png',
      alt: '/images/icons/stage_star.png',
    },
    lobby: {
      name: 'Lobby',
      info: "Maybe there's some cool stuff here 👀",
      className:
        'absolute left-[55%] top-[43%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.3 },
      src: '/images/icons/entrance.png',
      alt: '/images/icons/entrance_star.png',
    },

    projection: {
      name: 'Outdoor Projection',
      info: 'Wow, how pretty 📽',
      className:
        'absolute left-[38%] top-[39%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.4 },
      src: '/images/icons/outdoor_projection.png',
      alt: '/images/icons/outdoor_projection_star.png',
    },
    games: {
      name: 'Games',
      info: "1v1 me, let's go",
      className:
        'absolute left-[29%] top-[51%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.5 },
      src: '/images/icons/games.png',
      alt: '/images/icons/games_star.png',
    },
    river: {
      name: 'River of Light',
      info: "Please, don't swim",
      className:
        'absolute left-[60%] top-[72%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.9 },
      src: '/images/icons/river_star.png',
      alt: '/images/icons/river_star.png',
    },
    bike: {
      name: 'Light Bike',
      info: "Please, don't go for a ride",
      className:
        'absolute left-[66%] top-[58%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.6 },
      src: '/images/icons/bike_star.png',
      alt: '/images/icons/bike_star.png',
    },
    steprepeat: {
      name: 'Step & Repeat',
      info: 'Smile and wave, smile and wave.',
      className:
        'absolute left-[51%] top-[55%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.8 },
      src: '/images/icons/steprepeat_star.png',
      alt: '/images/icons/steprepeat_star.png',
    },
    finale: {
      name: 'Live Performance',
      info: "It's time to ride the synthwave 🏄",
      className:
        'absolute left-[21%] top-[5%] w-[3.5rem] h-[3.5rem] cursor-pointer',
      transition: { delay: 0.1 },
      src: '/images/icons/live_performance.png',
      alt: '/images/icons/live_performance_star.png',
    },
  };

  const [infoShow, setInfoShow] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({});
  const [badgeShow, setBadgeShow] = useState(false);
  const [updating, setUpdating] = useState(true);
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
  }

  const [searchParams, setSearchParams] = useSearchParams();
  let code = searchParams.get('code');
  // console.log("QR Code Value:", code);
  let finaleString = localStorage.getItem('finale');
  let finaleStorage = JSON.parse(finaleString);

  const progressString = localStorage.getItem('codes');
  const progress = JSON.parse(progressString);

  const totalQR = Object.values(progress).length;
  const scannedQR = Object.values(progress).filter((val) => {
    return val === true;
  }).length;

  useEffect(() => {
    console.log('Local Storage:', progress);
    console.log('Finale Storage:', finaleStorage);
    console.log(finale);
    if (finaleStorage === true) {
      setFinale(true);
    } else if (code) {
      if (code == 'finale') {
        localStorage.setItem('finale', true);
        console.log('*** That QR code looks legit!');
        console.log('Progress ', code + ':', progress[code]);
        progress[code] = true;
        console.log('New Progress ', code + ':', progress[code]);
        localStorage.setItem('codes', JSON.stringify(progress));
        console.log('New Local Storage:', progress);
        localStorage.setItem('recentScan', code);
        setFinale(true);
      } else if (Object.keys(progress).includes(code)) {
        console.log('*** That QR code looks legit!');
        console.log('Progress ', code + ':', progress[code]);
        progress[code] = true;
        console.log('New Progress ', code + ':', progress[code]);
        localStorage.setItem('codes', JSON.stringify(progress));
        console.log('New Local Storage:', progress);
        localStorage.setItem('recentScan', code);
        setUpdating(false);
        setConfetti(true);
        setTimeout(() => {
          setConfetti(false);
        }, 5500);
        setGoodJob(true);
        setTimeout(() => {
          setGoodJob(false);
        }, 4000);
        navigate('/?code=');
      } else {
        console.log('*** Nope, nice try buddy');
      }
    }
    setUpdating(false);
  }, []);

  return (
    // Wallpaper Background
    <div className="bg-gradient-to-b from-backgroundTop to-backgroundBot bg-center bg-cover font-share-tech-mono flex flex-col items-center justify-start min-w-[100vw] min-h-[100vh]">
      {/* Confetti */}
      {confetti && <Fireworks />}

      {/* Map */}

      {!finale && !badgeShow && (
        <motion.div
          className="relative max-w-[26rem] w-full h-screen min-h-[41.7rem] max-h-[43rem] flex flex-col"
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.1 }}
        >
          <div className="absolute w-full h-full blur-[.5rem] bg-gradient-to-r from-pink-500 to-blue-500"></div>
          <div className="z-[1] relative bg-map bg-cover bg-center  w-full h-full shadow-md">
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
                  className={value.className}
                  initial={
                    progress[key]
                      ? { scale: 0, rotate: 1000 }
                      : { scale: 0, opacity: 0 }
                  }
                  animate={
                    progress[key]
                      ? { scale: 1, rotate: 0 }
                      : { scale: 1, opacity: 1 }
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
                        ? 'animate-wiggle hover:animate-custom-spin'
                        : 'hover:animate-custom-bounce saturate-0'
                    }
                    src={progress[key] ? value.alt : value.src}
                    key={key}
                    onClick={() => {
                      setSelectedInfo(value);
                      setInfoShow(true);
                    }}
                  />
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
        {goodJob && <GoodJob scannedQR={scannedQR} totalQR={totalQR} />}
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
      <AnimatePresence>
        {finale && (
          <Submission setBadgeShow={setBadgeShow} scannedQR={scannedQR} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MapPage;
