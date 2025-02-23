// import Button from "./components/Button";
"use client";
import {Button } from "@headlessui/react"
import StarsCanvas from "./components/Main/StarCanvas";
export default function Home() {
  return (
    <>
      {/* <StarsCanvas /> */}

      <div className="absolute top-0 left-0 right-0 z-[30] flex justify-center items-center h-20">
        <Button>Click Me</Button>
      </div>
    </>
  );
}
