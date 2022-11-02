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
      info: 'This is a lamborghini, wow, so cool!',
      className:
        'absolute fixed left-[23%] top-[51%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: 1.25 },
      src: '/images/icons/lambo.png',
      alt: '/images/icons/lambo_star.png',
    },
    stage: {
      name: 'Stage',
      info: 'Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non. Cumque quas libero tempora magni beatae saepe nam. Voluptate et pariatur vel aperiam ipsum quisquam. Provident corporis eos recusandae quisquam veritatis corrupti non.',
      className:
        'absolute left-[0%] top-[42%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: 0.75 },
      src: '/images/icons/stage.png',
      alt: '/images/icons/stage_star.png',
    },
    entrance: {
      name: 'Entrance',
      info: "Entrance to the show, maybe there's some cool stuff here",
      className:
        'absolute left-[45%] top-[55%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: 1 },
      src: '/images/icons/entrance.png',
      alt: '/images/icons/entrance_star.png',
    },
    concert: {
      name: 'Live Performance',
      info: "You're probably not gonna wanna miss this preshow",
      className:
        'absolute left-[18%] top-[3%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: .25 },
      src: '/images/icons/live_performance.png',
      alt: '/images/icons/live_performance_star.png',
    },
    projection: {
      name: 'Outdoor Projection',
      info: 'Wow, look how pretty!',
      className:
        'absolute left-[45%] top-[40%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: .5 },
      src: '/images/icons/outdoor_projection.png',
      alt: '/images/icons/outdoor_projection_star.png',
    },
    games: {
      name: 'Block World',
      info: "Block world, it can't get any better than this",
      className:
        'absolute left-[60%] top-[70%] w-[5rem] h-[5rem] cursor-pointer',
      transition: { delay: 1.5 },
      src: '/images/icons/games.png',
      alt: '/images/icons/games_star.png',
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
    entrance: false,
    lambo: false,
    stage: false,
    projection: false,
    concert: false,
    games: false,
  };

  if (localStorage.getItem('codes') === null) {
    localStorage.setItem('codes', JSON.stringify(codes));
    localStorage.setItem('finale', false);
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
        setFinale(true);
      } else if (Object.keys(progress).includes(code)) {
        console.log('*** That QR code looks legit!');
        console.log('Progress ', code + ':', progress[code]);
        progress[code] = true;
        console.log('New Progress ', code + ':', progress[code]);
        localStorage.setItem('codes', JSON.stringify(progress));
        console.log('New Local Storage:', progress);
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
    <div className="bg-gradient-to-b from-backgroundTop to-backgroundBot bg-center bg-cover font-share-tech-mono flex flex-col items-center justify-center min-w-[100vw] min-h-[100vh]">
      {/* Confetti */}
      {confetti && <Fireworks />}

      {/* Map */}
      {!finale && (
        <div className="relative w-[22rem] h-[95vh] mt-4 mb-3 flex flex-col">
          {/* <div className="absolute bg-red-100 w-full h-full "></div> */}
          <div className="z-[1] relative bg-map bg-cover bg-center w-full h-full rounded-xl">
            <ProgressBar
              scannedQR={scannedQR}
              totalQR={totalQR}
              setBadgeShow={setBadgeShow}
            />
            {!updating &&
              Object.entries(markers).map(([key, value]) => (
                <motion.div
                  key={key}
                  className={value.className}
                  initial={
                    progress[key]
                      ? { y: -800, rotate: 5000 }
                      : { scale: 0, rotate: 500 }
                  }
                  animate={
                    progress[key]
                      ? { y: 0, rotate: 0 }
                      : { scale: 1, rotate: 0 }
                  }
                  exit={{ y: 100 }}
                  transition={value.transition}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.4 }}
                >
                  <img
                    className={
                      progress[key]
                        ? 'animate-wiggle hover:animate-custom-spin'
                        : 'hover:animate-custom-bounce'
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
        </div>
      )}
      <AnimatePresence>
        {infoShow && (
          <MapInfo selectedInfo={selectedInfo} setInfoShow={setInfoShow} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {badgeShow && (
          <BadgeInfo setBadgeShow={setBadgeShow} scannedQR={scannedQR} />
        )}
      </AnimatePresence>
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
