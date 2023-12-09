import Image from "next/image";
import React from "react";
import Carousel from "./Carousel";

function HeroSection() {
  const data = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];
  return (
    <section className="grid grid-cols-1 w-full">
      <div className="sm:w-3/4 w-[90%] bg-gray-100 mx-auto mb-4 rounded-2xl py-6">
        <div className="flex mx-auto justify-center w-[95%] sm:w-[700px]">
          <Carousel>
            {data.map((d) => (
              <Image key={d} alt="" src={d} width={700} height={450} />
            ))}
          </Carousel>
        </div>
        <h1 className="mt-8 mx-2 font-semibold text-2xl sm:text-4xl text-center">
          Get Unlimited Offer{" "}
          <span className="bg-gray-300 text-blue-700 rounded-full px-4 py-1">
            30% Off.
          </span>
        </h1>
      </div>
    </section>
  );
}

export default HeroSection;
