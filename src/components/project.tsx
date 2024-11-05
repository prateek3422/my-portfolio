"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { DATA } from "@/Data/detail";

const Project = () => {
  return (
    <>
      <HoverEffect items={DATA?.projects} />
    </>
  );
};

export default Project;
