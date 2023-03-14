import React, { useState, useEffect, useRef } from "react";
import Heading from "../Heading";
import Milestone from "./Milestone";

function Timeline() {
  return (
    <section className="items-center py-5 bg-primary-background-color font-poppins ">
      <div className="justify-center max-w-6xl px-4 mx-auto lg:py-8 md:px-6">
        <Heading title="Geschichte" />

        <div className="w-full mx-auto lg:max-w-3xl">
          <Milestone
            isActive={true}
            milestone={"Idee"}
            description={
              "Die Idee zu Avalano entstand im Winter 2020/21. Wir wollten eine Lawinensonde entwickeln, die mitdenkt und die Lawinengefahr in Echtzeit anzeigt."
            }
            when={"September 2021"}
          />
          <Milestone
            milestone={"Konkretisierung mit Lawinenwarndienst Tirol"}
            description={
              "Wir haben uns mit dem Lawinenwarndienst Tirol in Verbindung gesetzt und die Idee mit ihnen besprochen und konkretisiert. "
            }
            when={"Oktober 2021"}
          />
          <Milestone
            milestone={"Fertigstellung erster Prototyp"}
            description={
              "Der erste Prototyp wurde fertiggestellt und getestet. Dabei haben wir die Funktionalität und die Usability der Lawinensonde getestet."
            }
            when={"September 2022"}
          />
          <Milestone
            milestone={"Fertigstellung Avalano-App v1.0"}
            description={
              "Die Avalano-App wurde fertiggestellt und getestet. Dabei haben wir die Funktionalität und die Usability der Lawinensonde getestet."
            }
            when={"September 2022"}
          />
        </div>
      </div>
    </section>
  );
}

export default Timeline;
