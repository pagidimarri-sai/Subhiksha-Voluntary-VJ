import "../components/Home/Home.css";
import { motion } from "framer-motion";
import Landing from "../components/Home/Landing";
import { HomeAbout } from "../components/Home/HomeAbout";
import { WhatWeDo } from "../components/Home/WhatWeDo";
import { Glimpses } from "../components/Home/Glimpses";
import { PromoDiv } from "../components/Home/PromoDiv";

export default function Home() {
  const homeVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        when: "beforeChildren",
      },
    },
  };

  return (
    <motion.div
      className="home flex flex-col justify-center items-center"
      variants={homeVariants}
      initial="initial"
      animate="animate"
    >
      <Landing />

      <HomeAbout />

      <WhatWeDo />

      <Glimpses />

      {/* <div className="fixed z-[101] bottom-6 right-4 ">
        <PromoDiv
          eventName="Get Set Py"
          eventStatus="ongoing"
          eventLink="events/getsetpy"
        />
      </div> */}
    </motion.div>
  );
}
