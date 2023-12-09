"use client";

import Image from "next/image";
import React, { useState } from "react";
import Overview from "./Overview";
import Link from "next/link";

function Shop() {
  const [clicked, setClicked] = useState(false);

  const productOverview = () => {
    setClicked((curr) => !curr);
  };

  return (
    <>
      <section id="shop" className="w-full max-h-auto min-h-screen bg-gray-200">
        <div className="sm:mx-24 mx-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl sm:text-5xl mt-8">
              Explore Our Products
            </h1>
            <div className="flex w-[100px] h-[40px] justify-between">
              <button className="rounded-full bg-gray-50">
                <Image src="/left-chevron.png" alt="" width={40} height={40} />
              </button>
              <button className="rounded-full bg-gray-50">
                <Image alt="" src="/right-chevron.png" width={40} height={40} />
              </button>
            </div>
          </div>
          {/* Products */}
          <div className="grid cursor-pointer grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-6 sm:mt-10 mt-8">
            <Link href="/products/1">
              <div className="sm:mb-8 mb-4">
                <div className="flex flex-col img-store overflow-hidden relative sm:pt-12 pt-8 sm:px-8 px-4 items-center hover:scale-105 transition-all duration-300">
                  <Image
                    className="w-full"
                    src="/t1.jpg"
                    alt=""
                    width={200}
                    height={200}
                    style={{
                      width: "200px",
                      height: "200px",
                      objectPosition: "center",
                      objectFit: "cover",
                    }}
                  />
                  <div className="flex flex-col my-4 sm:my-8">
                    <h3 className="font-bold italic text-xl">Iphone 15</h3>
                    <h4 className="font-bold text-md italic">$999.99</h4>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {clicked ? <Overview onClick={productOverview} /> : ""}
    </>
  );
}

export default Shop;
