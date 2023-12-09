import NavBar from "@/components/NavBar";
import ProductCard from "@/components/ProductCard";
import React from "react";

function page() {
  return (
    <section className="w-full">
      <div className="bg-white">
        <NavBar />
      </div>
      <div className="sm:mx-20 mx-2 mt-8 sm:mt-0">
        <div className="grid sm:grid-cols-12 sm:gap-6 grid-cols-8">
          <div className="col-span-9">
            <div className="flex px-4 py-2 justify-between mb-4 bg-gray-100">
              <h1 className="font-semibold text-xl text-gray-600">
                Shopping Cart
              </h1>
              <h3 className="font-semibold text-lg text-gray-600">Price</h3>
            </div>
            <div className="bg-gray-100 sm:px-4 px-2 py-2 sm:py-4 mb-4">
              <ProductCard />
            </div>
          </div>
          <div className="col-span-9 sm:col-span-3">
            <div className=" flex flex-col w-full items-center sm:items-start bg-gray-100 px-4 py-4">
              <h3 className="mb-2">
                Subtotal (2 items): <span className="font-bold">$354</span>
              </h3>
              <button className="rounded-lg hover:bg-red-600 outline-none bg-red-500 px-6 py-1 text-white transition-all duration-300">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
