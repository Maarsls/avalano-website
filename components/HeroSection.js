import React, { useState, useEffect } from "react";

function HeroSection() {
  return (
    <div className="">
      {/* backgroundimage */}
      <div className="relative  w-full h-screen">
        <img
          src="/images/hero.jpg"
          alt="hero"
          className="absolute h-full w-full object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex justify-center align-middle">
          {/* headline Avalano */}
          <div className="flex flex-col justify-center align-middle">
            <h1 className="text-5xl text-white font-bold text-center">
              Avalano
            </h1>
            <p className="text-2xl text-white text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        {/* <div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
