"use client";

import Image from "next/image";
import React, { useState } from "react";

function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);
  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-gray-50 bg-opacity-40 hover:bg-opacity-60 transition-all duration-300"
        >
          <Image
            className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            // style={{ width: "25px", height: "25px" }}
            alt=""
            src="/left-chevron.png"
            width={50}
            height={50}
          />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-gray-50 bg-opacity-40 hover:bg-opacity-60 transition-all duration-300"
        >
          <Image
            className="w-[25px] h-[25px] sm:w-[50px] sm:h-[50px]"
            alt=""
            src="/right-chevron.png"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
