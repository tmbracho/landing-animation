import { motion } from "framer-motion";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const titleAnimationChildren = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const imgAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const explainAnimation = {
    hidden: {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        delay: 2.8,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const circleAnimation = {
    hidden: {
      scale: 0,
    },
    show: {
      scale: 1,
      transition: {
        delay: 3.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div>
      <Navbar />
      <section className="flex flex-col items-center mt-[60px]">
        <div className="w-[500px] m-auto relative my-32">
          <div className="absolute -left-[180px] top-[30px] h-[100px] flex items-center overflow-hidden">
            <motion.div
              variants={titleAnimation}
              initial="hidden"
              animate="show"
              className="flex text-6xl font-bold text-orange-600 drop-shadow-lg z-30"
            >
              {Array.from("Net-Vision").map((letter, idx) => (
                <motion.span key={idx} variants={titleAnimationChildren}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <motion.img
            src="/images/circle.png"
            alt="circle"
            className="w-[100px] absolute -top-[65px] -right-[65px] animate-spin-slow"
            variants={circleAnimation}
            initial="hidden"
            animate="show"
          />
          <motion.img
            src="/images/network_1920.jpg"
            alt="art"
            className="object-cover rounded"
            variants={imgAnimation}
            initial="hidden"
            animate="show"
          />
          <motion.div
            className="bg-[#0e0e0e] p-4 w-[300px] absolute -bottom-[60px] -right-[120px] drop-shadow-lg z-30 rounded"
            variants={explainAnimation}
            initial="hidden"
            animate="show"
          >
            <p className="text-[#eaeaea] text-sm text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
              interdum nisi eget nulla ultricies, eu ultrices dolor volutpat. In id purus
              neque. Nulla auctor aliquam gravida. Aenean auctor pellentesque odio, eget
              rutrum erat.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default App;
