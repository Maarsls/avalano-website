import React from "react";

import Timeline from "@/components/avalano/Timeline";
import THREED from "@/components/avalano/ThreeDProduct";
import CustomHead from "@/components/CustomHead";

function Avalano() {
  return (
    <div>
      <CustomHead title="Das Produkt" description={"Einfach baba"} />

      {/* <THREED /> */}
      <Timeline />
    </div>
  );
}

export default Avalano;
