"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Type from "@/constants/type";

// Keep the Chevron icons inline as requested
const ChevronLeftIcon = ({ size = 16, color = "#FFFFFF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = ({ size = 16, color = "#FFFFFF" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const About = () => {
  const [open, setOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(true);
  const panelRef = useRef(null);

  // Close social panel and hide toggle if scrolling down past threshold.
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setShowSocial(false);
      } else {
        setShowSocial(true);
      }
      if (open) setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  // Close social panel if click occurs outside the panel area
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (open && panelRef.current && !panelRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      <section
        id="about"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black-100 px-4 sm:px-10"
      >
        {/* Left Text Column */}
        <div className="order-1 w-full md:w-1/2 text-center md:text-left mx-11">
          <p className="text-white text-3xl mb-2">
            Hi There! <span className="inline-block animate-wave">👋</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            <span className="text-red-100">I’m</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              Yogesh
            </span>
          </h1>
          <div className="my-11 text-[23px] sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-serif">
            <Type />
          </div>
        </div>

        {/* Right Image */}
        <div className="order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] animate-float">
            <Image
              src="/images/astro.png"
              alt="Astronaut Image"
              fill
              className="object-cover rounded-full select-none"
            />
          </div>
        </div>

        {/* Toggleable Social Panel Attached to Right Edge */}
        {showSocial && (
          <div
            ref={panelRef}
            className="absolute top-32 right-2 z-50 flex flex-col items-center"
          >
            {/* Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center w-8 h-8 bg-gray-800 border border-white rounded-full hover:scale-110 transition-transform duration-200"
            >
              {open ? (
                <ChevronRightIcon size={16} color="#FFFFFF" />
              ) : (
                <ChevronLeftIcon size={16} color="#FFFFFF" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                open
                  ? "max-h-[999px] opacity-100 mt-2 p-2"
                  : "max-h-0 opacity-0 p-0 mt-0"
              }`}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* YouTube */}
                <a
                title="Resume"
                  href="/Yogesh-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src="/images/rs2.png"
                    alt="YouTube"
                    width={36}
                    height={24}
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/yogeshbabyop/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src="/images/linkedin.png"
                    alt="LinkedIn"
                    width={32}
                    height={24}
                  />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/yogesh.babyy/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src="/images/instagram.png"
                    alt="Instagram"
                    width={32}
                    height={24}
                  />
                </a>

                {/* Twitter */}
                <a
                  href="https://twitter.com/__Yogeshh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src="/images/twitter.png"
                    alt="Twitter"
                    width={32}
                    height={24}
                  />
                </a>

                {/* Email */}
                <a
                  href="mailto:tummayogesh1433@gmail.com"
                  className="flex items-center justify-center w-12 h-12 hover:scale-110 transition-transform duration-200"
                >
                  <Image
                    src="/images/gmail.png"
                    alt="Email"
                    width={32}
                    height={24}
                  />
                </a>
              </div>
            </div>
          </div>
        )}
      </section>

      <style jsx>{`
        @keyframes wave {
          0% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(14deg);
          }
          20% {
            transform: rotate(-8deg);
          }
          30% {
            transform: rotate(14deg);
          }
          40% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(10deg);
          }
          60%,
          100% {
            transform: rotate(0deg);
          }
        }
        .animate-wave {
          animation: wave 1.5s infinite;
          transform-origin: 70% 70%;
        }
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
      `}</style>
    </>
  );
};

export default About;
