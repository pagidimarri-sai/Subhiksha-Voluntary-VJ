import React from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { Link } from "react-router-dom";

export const WhatWeDo = () => {
  const cardVariants = {
    intial: {
      scale: 1,
      boxShadow: "none",
    },
    hover: {
      scale: 1.025,
      boxShadow: "0px 48px 100px 0px #110c2e26",
    },
    tap: { scale: 0.9 },
  };
  const data = [
    {
      title: "Data Science Workshops",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-data-science-data-analytics-flaticons-lineal-color-flat-icons-5.png",
      example: "/events/tableau2k24",
    },
    {
      title: "Hackathons",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-hackathon-ux-and-ui-icons-flaticons-lineal-color-flat-icons-2.png",
      example: "/events/TECHNOVISTA",
    },
    {
      title: "Webinars",
      imgURL: "https://img.icons8.com/color/48/video-conference.png",
      example: "/events/ltiGuestLecture2024",
    },
    {
      title: "Contests",
      imgURL:
        "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/48/external-competitions-dance-flaticons-lineal-color-flat-icons.png",
      example: "/events/blogAThon",
    },
    {
      title: "Guest lectures",
      imgURL:
        "https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-seminar-activism-flaticons-flat-flat-icons-2.png",
      example: "/events/guestLecture2023",
    },
    {
      title: "Fun events",
      imgURL: "https://img.icons8.com/cotton/64/events--v2.png",
      example: "/events/hitThe2ndChase",
    },
  ];
  return (
    <Reveal>
      <div className="w-full lg:w-4/5 mx-auto my-6 text-center bg-white bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')] ">
        <h2 className="text-3xl font-semibold ">What we do?</h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-4 w-full my-8 mx-0">
          {data.map((d, index) => (
            <Link to={d?.example} key={index}>
              <motion.div
                className="h3-card flex w-40 h-16 sm:w-60 sm:h-20 px-2 sm:p-4 items-center justify-evenly border border-black/50 rounded-lg  bg-white shadow-2xl"
                variants={cardVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <img src={d.imgURL} alt="img" className="w-[20%]" />
                <h3 className="text-sm sm:text-xl text-black font-semibold">
                  {d.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
};
