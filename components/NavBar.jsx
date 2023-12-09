"use client";

import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import Link from "next/link";
import { useSelector } from "react-redux";

function NavBar() {
  const item = useSelector((state) => state.cart);

  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    setMenuOpened((curr) => !curr);
  };

  return (
    <nav className="transition ease-in-out">
      <div className="flex justify-between my-4 mx-4 sm:mx-20 sm:my-10 items-center">
        <div className="sm:hidden block" onClick={openMenu}>
          <Image src="/hamburger.png" alt="" width={20} height={20} />
        </div>
        <div>
          <Link href="/" className="font-bold text-3xl tracking-[2px]">
            Gebeta
          </Link>
        </div>
        <div className="hidden sm:flex w-[250px] justify-between items-center">
          <Link
            className="hover:font-semibold hover:text-xl transition-all duration-300"
            href="/"
          >
            HOME
          </Link>
          <Link
            className="hover:font-semibold hover:text-xl transition-all duration-300"
            href="#shop"
          >
            SHOP
          </Link>
          <Link
            className="hover:font-semibold hover:text-xl transition-all duration-300"
            href="#women"
          >
            WOMEN
          </Link>
          <Link
            className="hover:font-semibold hover:text-xl transition-all duration-300"
            href="#men"
          >
            MEN
          </Link>
        </div>
        <div className="hidden sm:flex items-center justify-between w-[100px] sm:w-[150px]">
          <NavLink src="/message.png" link="/chats" />
          <div className="relative w-[20px] hover:scale-110 sm:w-[30px]">
            <span className="text-red-500 absolute font-semibold text-md right-0 left-3 bottom-3">
              {item.length}
            </span>
            <NavLink src="/shopping-cart.png" link="/cart" />
          </div>
          <NavLink src="/user.png" link="/profile" />
        </div>
        <div className="sm:hidden w-[25px] h-[25px]">
          <div className="relative w-[20px] hover:scale-110 sm:w-[30px]">
            <span className="text-red-500 absolute font-semibold text-md right-0 left-3 bottom-3">
              {item.length}
            </span>
            <NavLink src="/shopping-cart.png" link="/cart" />
          </div>
        </div>
      </div>
      {menuOpened ? (
        <div className="flex flex-col items-center bg-opacity-80 justify-center my-4 transition ease-in">
          <Link className="flex mb-2 items-center gap-2" href="/profile">
            <Image alt="" src="/user.png" width={20} height={20} />
            Profile
          </Link>
          <Link className="flex items-center gap-2" href="/chats">
            <Image alt="" src="/message.png" width={20} height={20} />
            Chats
          </Link>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default NavBar;
