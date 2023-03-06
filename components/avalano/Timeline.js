import React from "react";
import Heading from "../Heading";
import Milestone from "./Milestone";

function Timeline() {
  return (
    <section className="items-center py-5 bg-primary-background-color font-poppins ">
      <div className="justify-center max-w-6xl px-4 mx-auto lg:py-8 md:px-6">
        <Heading title="Geschichte" />

        <div className="w-full mx-auto lg:max-w-3xl">
          <Milestone milestone={"Idee"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit"} when={"September 2021"}/>
          <Milestone milestone={"Konkretisierung mit Lawinenwarndienst Tirol"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit"} when={"September 2021"}/>
          <Milestone milestone={"Fertigstellung erster Prototyp"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit"} when={"September 2021"}/>
          <Milestone milestone={"Fertigstellung Avalano-App v1.0"} description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. veniam libero facilis minus reprehenderit"} when={"September 2021"}/>

          
        </div>
      </div>
    </section>
  );
}

export default Timeline;
