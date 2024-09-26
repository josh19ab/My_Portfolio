import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Download from '../assets/download.svg'

const Hero = () => {
  // Animation variants for staggering effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each child element
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.4 } },
  };

  const lottieVariant = {
    hidden: { opacity: 0, scale: 1.2 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-center lg:flex-row lg:items-center gap-8 px-5 xs:px-10 sm:px-12 md:px-24"
      id="hero"
    >
      <motion.div
        className="w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p className="text-blue-500 pb-1.5 sm:pb-3" variants={item}>
          Hi, my name is
        </motion.p>
        <motion.p
          className="font-sans text-4xl sm:text-5xl text-slate-900 dark:text-white font-extrabold pb-1.5 sm:pb-3"
          variants={item}
        >
          Joshua Abraham.
        </motion.p>
        <motion.p
          className="text-2xl font-sans sm:text-4xl text-slate-600 font-extrabold pb-2.5 sm:pb-5"
          variants={item}
        >
          I build things for the web.
        </motion.p>
        <motion.p
          className="sm:text-base text-slate-600 font-medium pb-4 sm:pb-10 dark:text-slate-400"
          variants={item}
        >
          I&apos;m a Full-Stack Developer from Wayanad. I enjoy working on every
          aspect of web development, from the user interface to the server
          logic.
        </motion.p>
        <motion.div
          className="flex gap-y-4 gap-x-8 flex-wrap justify-start"
          variants={item}
        >
          <a
            href="/MY_RESUME.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-300 dark:text-slate-200 text-sm sm:text-base px-6 py-2.5 sm:px-10 sm:py-4 font-roboto rounded-lg hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-800 transition-all hover:-translate-y-1 "
          >
            {" "}
            <Download
              className="w-8 h-8 sm:w-8 sm:h-8"
            />{" "}
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="w-full"
        variants={lottieVariant}
        initial="hidden"
        animate="show"
      >
        <DotLottieReact src="avatar.lottie" loop autoplay />
      </motion.div>
    </div>
  );
};

export default Hero;
