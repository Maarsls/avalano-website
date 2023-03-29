import React, { useState, useEffect } from "react";

function HeroSection() {
  return (
    <div className="">
      {/* backgroundimage */}
      <div className="relative w-full h-screen">
        <img
          src="/assets/hero2.jpeg"
          alt="hero"
          className="absolute object-cover w-full h-full"
        />

        <div className="absolute top-0 left-0 flex justify-center w-full h-full align-middle bg-black opacity-30">
          {/* headline Avalano */}
          <div className="flex flex-col justify-center align-middle">
            <h1 className="text-3xl font-bold text-center text-white">
              Avalano - Lawinensonde zur Schneedeckendiagnose
            </h1>
            {/* <p className="text-2xl text-center text-white">
              Die Lawinensonde die mitdenkt - Know your snow
            </p> */}
          </div>
        </div>
        {/* <div>
          <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2 animate-bounce">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div> */}
        {/* <span class="absolute bottom-10 left-1/2 inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">
          <AiOutlineArrowDown />
        </span> */}
      </div>
    </div>
  );
}

export default HeroSection;
