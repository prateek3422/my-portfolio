"use client";
import { Navbar } from "@/components/navbar";
import Project from "@/components/project";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Spotlight } from "@/components/ui/spotlight";
import { DATA } from "@/Data/detail";
import { Button } from "@nextui-org/react";
import { Code2, Github, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black antialiased overflow-hidden">
      <AnimatedBackground />
      <Spotlight className="-top-40 left-0" />

      {/* hero sections */}

      <div className="relative  max-w-7xl mx-auto space-y-20 px-6 pt-32 md:pt-44">
        <div className="text-center space-y-6">
          <h1 className=" text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Full-Stack Developer
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg  md:text-xl">
            Crafting digital experiences with modern web technologies.
            Specialized in React, Node.js, and cloud architecture.
          </p>
          <div className="flex justify-center gap-8 items-center">
            <Button className="bg-[#8f61c8] text-neutral-100">
              Contact <Mail />
            </Button>
            <Button className="bg-[#8f61c8] text-neutral-100">
              Git hub <Github />
            </Button>
          </div>
        </div>

        {/* skill section */}

        <div className="mt-8" id="skill">
          <h1 className="text-center text-3xl font-bold  text-neutral-200">
            {" "}
            Technical Skills
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-6  gap-8 mt-8">
            {DATA.skill?.map((data, index) => {
              return (
                <div
                  key={index}
                  className="bg-neutral-900/50 flex items-center justify-center flex-col backdrop-blur-sm rounded-xl aspect-square   text-center border border-neutral-800 "
                >
                  <Code2 className="h-6 w-6  mx-auto mb-2 items-center text-neutral-200" />
                  <h1 className="text-neutral-200 capitalize font-bold text-lg">
                    {data}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>

        {/* // project section */}

        <div className="mt-8">
          <h1 className="text-center text-3xl font-bold  text-neutral-200">
            {" "}
            Projects
          </h1>
          <Project />
        </div>
      </div>
    </main>
  );
}
