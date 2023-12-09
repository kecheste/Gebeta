"use client";

import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "@/redux/cartSlice";

function ProductCard() {
  const dispatch = useDispatch();

  const handleRemoveCart = (product) => {
    dispatch(remove(product));
  };
  return (
    <div className="grid grid-cols-12 sm:gap-4 gap-2">
      <div className="col-span-1 flex items-center">
        <input
          className="w-4 h-4 text-blue-600 rounded outline-none"
          type="checkbox"
        />
      </div>
      <div className="col-span-3">
        <Image alt="" src="/1.jpg" width={200} height={200} />
      </div>
      <div className="col-span-6">
        <h1 className="font-semibold text-lg mb-1">
          Microsoft 365 Personal | 12-Month Subscription, 1 person | Word,
          Excel, PowerPoint
        </h1>
        <h3 className="text-gray-600">Product description</h3>
      </div>
      <div className="col-span-2 flex flex-col items-center font-bold sm:ml-4 ml-0">
        <h3>$132.59</h3>
        <button
          onClick={() => handleRemoveCart(2)}
          className="px-4 py-1 bg-red-500 text-white rounded-lg mt-4 hover:bg-red-400 transition-all duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
