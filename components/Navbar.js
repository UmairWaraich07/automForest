"use client";
import Image from "next/image";

import { menu, close } from "../public/assets";
import automForestLogo from "../public/assets/logo.png";
import { navLinks } from "@/constants";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full py-6 flex justify-between items-center navbar">
      <div className="flex items-center">
        <Image
          src={automForestLogo}
          alt="AutomForest AI"
          width={42}
          height={42}
          className="object-contain"
          priority
        />
        <h4 className="font-semibold text-lg text-white font-poppins tracking-wide">
          Autom
          <span className="text-[#33bbcf]">Forest</span> AI
        </h4>
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center space-x-10 flex-1">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`font-poppins font-normal text-[16px] text-white cursor-pointer`}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center flex-1 cursor-pointer">
        <Image
          src={`${toggle ? "/assets/close.svg" : "/assets/menu.svg"}`}
          alt="menu"
          width={28}
          height={28}
          className="object-contain"
          onClick={() => setToggle((prev) => !prev)}
          priority
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient min-w-[140px] absolute top-20 right-0 mx-4 my-2 rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-center items-center space-y-4 flex-1">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`font-poppins font-normal text-[16px] text-white cursor-pointer`}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
