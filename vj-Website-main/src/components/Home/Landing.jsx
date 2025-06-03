import { motion } from "framer-motion";
import "./Landing.css";

function GradientBackground() {
  return (
    <div className="gradient-bg absolute inset-0">
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g4"></div>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className=" h-screen w-full bg-center flex flex-col justify-center items-center relative">
      <div className="z-10 w-full h-full absolute top-0 left-0 flex flex-row justify-evenly items-center bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">
        <motion.div className="hidden lg:block ">
          <img src="dq_logo.png" alt="dqlogo" className="max-w-sm" />
        </motion.div>

        <div className="box max-w-[90%] sm:w-auto flex flex-col justify-center items-center opacity-80 select-none text-white mx-ato my-8 text-4xl">
          <h1 className="font-semibold text-center text-3xl sm:text-5xl my-3 md:my-6">
            VJ DATA QUESTERS
          </h1>
          <p className="text-base sm:text-xl">VNRVJIET, Hyderabad</p>
          <p className="mt-1 text-xs font-thin sm:text-sm text-center">
            Differentiated by inputs / Integrated by outputs
          </p>
        </div>
      </div>

      <GradientBackground />

      <div className="absolute inset-0 opacity-10 bg-[url('/graph-grid.png')]"></div>
    </div>
  );
}
