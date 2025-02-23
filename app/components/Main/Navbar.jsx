import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <div className="flex items-center justify-center h-screen">
            <Image
              src="/images/bmw.png"
              alt="BMW Logo"
              width={50}
              height={50}
              className="animate-spin-slow"
            />
          </div>

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            YOGESH
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <h1>hi</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
