import React from "react";
import Heading from "@/components/Heading";

import GoogleMap from "@/components/map/GoogleMap";

export default function map() {
  return <div className="pt-24">
    <Heading title="Karte" />
    <GoogleMap />
  </div>;
}
