import NavBar from "@/components/NavBar";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <section className="w-full">
      <NavBar />
      <div className="sm:mx-24 mx-4 mt-8">
        <div className="grid sm:grid-cols-12 grid-cols-5 gap-1 sm:gap-4">
          <div className="sm:col-span-4 sm:mb-0 mb-4 col-span-5 border border-gray-300 transition-all duration-300 cursor-pointer hover:bg-gray-100 rounded-xl flex px-4 py-6 items-center">
            <div className="mr-4">
              <Image
                alt=""
                src="/delivery-service.png"
                width={100}
                height={100}
              />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Your Orders</p>
              <p className="text-md text-gray-500">
                Track, return, cancel an order, download invoice or buy again
              </p>
            </div>
          </div>
          <div className="sm:col-span-4 sm:mb-0 mb-4 col-span-5 border border-gray-300 transition-all duration-300 cursor-pointer hover:bg-gray-100 rounded-xl flex px-4 py-6 items-center">
            <div className="mr-4">
              <Image alt="" src="/security.png" width={60} height={60} />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Login & Security</p>
              <p className="text-md text-gray-500">
                Edit login, name, and mobile number
              </p>
            </div>
          </div>
          <div className="sm:col-span-4 sm:mb-0 mb-4 col-span-5 border border-gray-300 transition-all duration-300 cursor-pointer hover:bg-gray-100 rounded-xl flex px-4 py-6 items-center">
            <div className="mr-4">
              <Image alt="" src="/payment.png" width={80} height={80} />
            </div>
            <div className="flex flex-col">
              <p className="text-lg">Payment & Transaction</p>
              <p className="text-md text-gray-500">
                View all transactions, manage payment methods and settings
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
