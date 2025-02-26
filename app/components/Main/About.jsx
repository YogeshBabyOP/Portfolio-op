"use client";

import React from "react";
import Image from "next/image";
import Type from "@/constants/type"; // Adjust this path if necessary

const About = () => {
  return (
    <>
      <section
        id="about"
        className="mx-11 relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-black-100 px-4 sm:px-10"
      >
        {/* Text Section: Always first (order-1) */}
        <div className="order-1 w-full md:w-1/2 text-center md:text-left">
          <p className="text-white text-3xl mb-2">
            Hi There! <span className="inline-block animate-wave">👋</span>
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-sans">
            <span className="text-red-100">I’m</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">
              {" "}
              Yogesh{" "}
            </span>
          </h1>
          <div className="my-11 text-2xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-serif">
            <Type />
          </div>

          {/* <div className="text-white text-lg sm:text-xl">
            yogesh is a software engineer who loves to build web applications
          </div> */}
        </div>

        {/* Image Section: Always second (order-2) */}
        <div className="order-2 w-full md:w-1/2  flex justify-center md:justify-end mt-6 md:mt-0">
          <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] animate-float">
            <Image
              src="/images/astro.png"
              alt="Astronaut Image"
              fill
              className="object-cover rounded-full select-none"
            />
          </div>
        </div>
      </section>

      {/* CSS Animations */}
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
