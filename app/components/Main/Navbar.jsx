import React from "react";
import Image from "next/image";
import { Socials } from "@/constants";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo and Name */}
        <a href="#about" className="flex items-center flex-shrink-0">
          {/* Responsive container for the image */}
          <div className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px]">
            <Image
              src="/images/bmw.png"
              alt="BMW Logo"
              fill
              className="object-contain animate-spin-slow select-none"
            />
          </div>
          <span className="mx-3 font-bold ml-2 text-gray-300 text-[0.75rem] sm:text-sm md:text-base">
            YOGESH
          </span>
        </a>

        {/* Navigation Links */}
        <div className="flex-1 flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-[400px] sm:max-w-[400px] border border-[#7042f861] bg-[#0300145e] px-2 py-1 md:px-4 md:py-2 rounded-full text-gray-200">
            <a
              href="#about"
              className="cursor-pointer hover:text-white text-[0.65rem] sm:text-xs md:text-sm"
            >
              About
            </a>
            <a
              href="#skills"
              className="cursor-pointer hover:text-white text-[0.65rem] sm:text-xs md:text-sm"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="cursor-pointer hover:text-white text-[0.65rem] sm:text-xs md:text-sm"
            >
              Projects
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-row gap-3">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <div className="relative w-[25px] h-[30px] md:w-[40px] md:h-[40px]">
                <Image
                  src={social.src}
                  alt={social.name}
                  fill
                  className="object-contain cursor-pointer"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
