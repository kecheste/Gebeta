import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <section className="w-full m-0 bg-gray-200 flex h-screen justify-center items-center">
      <div className="sm:w-[60%] w-full grid grid-cols-12 items-center sm:h-[60%] h-screen bg-white rounded-2xl shadow-md">
        <div className="hidden col-span-6 sm:grid justify-center items-center">
          <Image src="/shopping.png" alt="" width={150} height={150} />
        </div>
        <div className="sm:col-span-6 col-span-12 flex flex-col items-center justify-center m-0">
          <h1 className="text-2xl text-center tracking-[1px] font-bold py-4 sm:pt-8 pt-0">
            Welcome
          </h1>
          <form action="" className="my-4">
            <div className="flex flex-col mx-4 relative w-full sm:w-[300px]">
              <Image
                className="absolute top-2 left-4 opacity-75"
                alt=""
                src="/email.png"
                width={19}
                height={19}
              />
              <input
                type="text"
                id="fname"
                placeholder="Email"
                className="outline-none text-sm border border-gray-300 bg-gray-200 rounded-full pl-10 py-2 w-[300px] mb-4"
              />
            </div>
            <div className="flex flex-col mx-4 relative w-full sm:w-[300px]">
              <Image
                className="absolute top-2 left-4 opacity-75"
                alt=""
                src="/name.png"
                width={19}
                height={19}
              />
              <input
                type="text"
                placeholder="Full Name"
                className="outline-none text-sm border border-gray-300 bg-gray-200 rounded-full pl-10 py-2 w-[300px] mb-4"
              />
            </div>
            <div className="flex flex-col mx-4 relative w-[300px]">
              <Image
                className="absolute top-2 left-4 opacity-75"
                alt=""
                src="/password.png"
                width={19}
                height={19}
              />
              <input
                type="password"
                id="fname"
                placeholder="Password"
                className="outline-none text-sm border border-gray-300 bg-gray-200 rounded-full pl-10 py-2 w-[300px] mb-4"
              />
            </div>
            <div className="flex flex-col items-center mx-4 relative w-[300px]">
              <button className="bg-red-500 hover:bg-red-600 transition-all duration-300 outline-none text-white rounded-full px-14 py-1 my-4">
                Sign Up
              </button>
            </div>
            <div className="mx-4 text-center relative w-[300px]">
              Already a memeber?{" "}
              <Link
                className="text-blue-500 hover:text-blue-600 font-semibold underline"
                href="/login"
              >
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default page;
