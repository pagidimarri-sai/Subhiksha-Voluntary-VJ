import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../Reveal";

export const HomeAbout = () => {
  return (
    <div className="clip-art-1 w-full">
      <Reveal>
        <div className="flex flex-col  justify-evenly items-center z-10 text-justify sm:text-left bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">
          <div className="w-4/5 lg:hidden ">
            <img src="dq_logo.png" className="max-w-64 mx-auto" />
          </div>

          <div className="w-11/12 lg:w-7/12 pb-20 lg:pt-4">
            <h2 className="text-white pb-3 text-center text-3xl font-semibold flex flex-row items-start justify-center">
              About VJDQ{" "}
              <img
                src="dq_logo.png"
                className="hidden lg:block w-10 ml-3"
                alt=""
              />
            </h2>
            <p className="text-white text-base leading-5 sm:text-lg ">
              Welcome to our Data Science Club, the premier hub for data science
              enthusiasts at our college. Established with the vision of driving
              innovation and collaboration, our club serves as the central point
              for all data science-related activities on campus. We provide
              comprehensive guidance on projects, offer certifications for both
              students and faculty, and keep our members informed about the
              latest industry trends and real-world applications of data
              science.
            </p>

            <Link to="/about">
              <button className="rounded-sm w-28 h-8 bg-white text-black border-none hover:bg-white/85 text-base italic mt-8 ">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
