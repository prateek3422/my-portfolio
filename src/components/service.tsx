import React from "react";
import { ServiceHoverEffect } from "./ui/service-hover-effect";
import { DATA } from "@/Data/detail";

const Service = () => {
  return <ServiceHoverEffect items={DATA.services} />;
};

export default Service;
