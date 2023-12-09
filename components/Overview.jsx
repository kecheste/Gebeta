"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavBar from "./NavBar";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { add } from "@/redux/cartSlice";

function Overview() {
  const [currImage, setCurrImage] = useState("/t3.jpg");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(143);

  const dispatch = useDispatch();

  const currentPreview = (image) => {
    setCurrImage((curr) => (curr = image));
  };

  const handleAddCart = (product) => {
    dispatch(add(product));
  };

  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <section className="bg-white w-full">
      <div className="fixed sm:relative top-0 right-0 left-0 bg-white">
        <NavBar />
      </div>
      <div className="flex justify-center mx-12 sm:mt-8 mt-16">
        <div className="grid sm:grid-cols-12 grid-cols-8 gap-6">
          <div className="sm:col-span-1 col-span-2">
            <div className="flex flex-col">
              <div className={`w-[60px] cursor-pointer outline-slate-300 mb-2`}>
                <Image
                  onClick={() => currentPreview("/t3.jpg")}
                  alt=""
                  src="/t3.jpg"
                  width={60}
                  height={60}
                />
              </div>
              <div
                className={`w-[60px] cursor-pointer outline-slate-300 mb-2 `}
              >
                <Image
                  onClick={() => currentPreview("/t2.jpg")}
                  alt=""
                  src="/t2.jpg"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-7 col-span-6">
            <div>
              <Image
                style={{
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                alt=""
                src={currImage}
                width={500}
                height={400}
              />
            </div>
          </div>
          <div className="col-span-8 sm:col-span-4 mb-8">
            <div>
              <h1 className="font-semibold text-2xl mb-4">
                Election cheap Cotton Tshirts Sublimation T Shirts Plain white
                Custom Printing Oversized White Blank T-Shirts
              </h1>
              <div className="mb-2 flex items-center">
                <ReactStars count={5} size={24} color2="#ffd700" />
                <div>
                  <p className="ml-8 text-blue-600 underline">142 ratings</p>
                </div>
              </div>
              <div className="flex flex-row items-center mb-8 mt-2">
                <div>
                  <p className="font-semibold text-md text-gray-600">
                    Price: ${price}
                  </p>
                </div>
                <div className="ml-8">
                  <label htmlFor="quantity">Quantity: </label>
                  <select
                    name=""
                    id="quantity"
                    onChange={handleQuantity}
                    className="outline-none"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => handleAddCart({ id: 2, name: "What" })}
                className="px-4 py-2 text-sm rounded-lg outline-none bg-red-600 text-white hover:bg-red-500 transition-all duration-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
