import React from "react";
import Reveal from "../Reveal";
import Carousel from "./Carousel";

export const Glimpses = () => {
  return (
    <div className="clip-art-2 bg-[#0f323f] w-full bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')] p-1 pt-4">
      <Reveal>
        <div className="flex flex-col justify-center items-center mt-16 mb-4 mx-auto w-4/5 z-10">
          <h2 className="text-3xl text-white m-0">Glimpses</h2>
          <Carousel />
        </div>
      </Reveal>
    </div>
  );
};
