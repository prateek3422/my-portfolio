"use client";

import { motion } from "framer-motion";
import Project from "@/components/project";
import Service from "@/components/service";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { Spotlight } from "@/components/ui/spotlight";
import { DATA } from "@/Data/detail";
import { Button, Divider } from "@nextui-org/react";
import { Copyright, Github, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black antialiased overflow-hidden">
      <AnimatedBackground />
      <Spotlight className="-top-40 left-0" />

      {/* hero sections */}

      <div className="relative  max-w-6xl mx-auto  px-6 pt-32 md:pt-44">
        <div className="text-center space-y-6">
          <h1 className=" text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
            Full-Stack Developer
          </h1>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg  md:text-xl">
            Crafting digital experiences with modern web technologies.
            Specialized in React, Node.js, and cloud architecture.
          </p>
          <div className="flex justify-center gap-8 items-center">
            <Link href="mailto:ps0431299@gmail.com" target="_blank">
              <Button className="bg-[#8f61c8] text-neutral-100">
                Contact <Mail />
              </Button>
            </Link>

            <Link href="https://github.com/prateek3422" target="_blank">
              <Button className="bg-[#8f61c8] text-neutral-100">
                Git hub <Github />
              </Button>
            </Link>
          </div>
        </div>

        {/* skill section */}

        <div className="mt-20" id="skills">
          <h1 className="text-center text-3xl font-bold  text-neutral-200">
            {" "}
            Technical Skills
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-6  gap-8 mt-8">
            {DATA.skill?.map(
              (
                data: {
                  icon: React.ReactNode;
                  name: string;
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="bg-neutral-900/50 flex items-center justify-center flex-col backdrop-blur-sm rounded-xl aspect-square   text-center border border-neutral-800 "
                  >
                    {data.icon}
                    <h1 className="text-neutral-200 capitalize font-bold text-lg">
                      {data.name}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>

        {/* // project section */}

        <div className="mt-8 mx-auto max-w-6xl" id="projects">
          <h1 className="text-center text-3xl font-bold  text-neutral-200">
            Projects
          </h1>
          <Project />
        </div>

        {/* // service section */}

        <div className="mt-8 max-w-6xl mx-auto" id="services">
          <h1 className="text-center text-3xl font-bold  text-neutral-200">
            Services
          </h1>
          <Service />
        </div>

        {/* footer section */}
        <div className="mb-4">
          <Divider className=" bg-neutral-400 " />

          <div className="flex items-center justify-between">
            <p className="text-center text-neutral-200 flex items-center justify-start gap-2 py-4">
              <Copyright />
              2024 Prateek Singh
            </p>
            <motion.h1
              className=" rounded-lg text-neutral-200  px-4 py-2 font-bold text-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              ps0431299@gmail.com
            </motion.h1>

            <div className="flex items-center justify-center gap-2">
              <motion.div
                className=" rounded-lg  "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/x.png" alt="" className=" w-8" />
              </motion.div>
              <motion.div
                className=" rounded-lg  "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/in.png" alt="" className="w-10" />
              </motion.div>
              <motion.div
                className=" rounded-lg  "
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src="/dd.png" alt="" className="w-10" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
