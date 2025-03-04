/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Image from "next/image";
import { css } from "@emotion/react";
import { Socials } from "@/constants";

const nameStyle = css`
  background: linear-gradient(45deg, #ff6b6b, #f06595, #845ef7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("about");

  const navItems = [
    { label: "About", id: "about", href: "#about" },
    { label: "Skills", id: "skills", href: "#skills" },
    { label: "Projects", id: "projects", href: "#projects" },
  ];

  return (
    <div className="select-none w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 sm:px-4 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo and Name */}
        <a href="#about" className="flex items-center flex-shrink-0">
          <div className="relative w-[30px] h-[30px] md:w-[45px] md:h-[45px]">
            <Image
              src="/images/bmw.png"
              alt="BMW Logo"
              fill
              className="object-contain animate-spin-slow select-none"
            />
          </div>
          <span
            className="mx-3 font-bold ml-2 text-gray-300 text-[0.75rem] sm:text-sm md:text-base"
            css={nameStyle}
          >
            Yogesh
          </span>
        </a>

        {/* Navigation Links */}
        <div className="px-1 flex-1 flex items-center justify-center">
          <div className="flex items-center justify-between w-full max-w-[400px] sm:max-w-[400px] border border-[#7042f861] bg-[#0300145e] px-2 py-1 md:px-4 md:py-2 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`font-mono cursor-pointer transition-colors duration-300 text-[0.65rem] sm:text-xs md:text-[20px] ${
                  activeNav === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-pink-500"
                }`}
              >
                {item.label}
              </a>
            ))}
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
                  title={social.name}
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
