import Image from "next/image";
import Link from "next/link";
import React from "react";

function NavLink({ src, link }) {
  return (
    <Link
      className="cursor-pointer transition-all duration-200 w-[20px] hover:scale-110 sm:w-[30px]"
      href={link}
    >
      <Image className="" alt="" src={src} width={50} height={50} />
    </Link>
  );
}

export default NavLink;
