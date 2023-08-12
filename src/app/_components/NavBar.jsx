"use client";

import Image from "next/image";
import Logo from "./_lib/White.svg";
import Profile from "./_lib/profile.png";
import Link from "next/link";
import Search from "./_lib/search.jsx";
import Bars from "./_lib/bars";
import Github from "./_lib/github.svg";
import { useState } from "react";

export default function NavBar() {
  return (
    <header className="w-full bg-kick-gray-75 px-4 py-2 rounded-[10px]">
      <nav className="w-full flex justify-between items-center gap-4">
        <div className="flex space-x-16 items-center">
          <div className="flex gap-3 ">
            <button className="block md:hidden">
              <Bars className="fill-white" />
            </button>
            <Link href={"/"}>
              <Image src={Logo} height={20} />
            </Link>
          </div>
        </div>

        <div className="sm:flex hidden flex-1 max-w-[600px] h-11">
          <input
            type="search"
            placeholder="Buscar"
            className="bg-transparent h-full px-4 rounded-l-full outline-none border-kick-gray-25 focus:border-kick-gray-20 border-[2px] flex flex-1"
          />
          <button
            className="h-full flex bg-kick-gray-25 justify-center items-center rounded-r-full pl-4 pr-6"
            aria-label="Buscar"
          >
            <Search color={"#fff"} />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="sm:hidden flex bg-kick-gray-50 w-10 aspect-square rounded justify-center items-center">
            <Search color={"#fff"} />
          </div>
          <div className="w-8 rounded-[5px] overflow-hidden">
            <Link href={"https://github.com/abraham-j-p-f"} target="_blank">
              <Image src={Github} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
