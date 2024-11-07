"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import React, { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    image: string;
    title: string;
    description: string;
    technologies: string[];
    links: {
      type: string;
      href: string;
      icon: React.ReactNode;
    }[];
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-2xl"
            />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {item.description.substring(0, 100)}
            </CardDescription>
            <CardTechnologies>
              {item.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-300 text-zinc-800 px-2 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </CardTechnologies>

            <div className="flex flex-wrap gap-2 mt-6">
              {item.links.map((link, idx) => (
                <CardLinks
                  key={idx}
                  type={link.type}
                  href={link.href}
                  icons={link.icon}
                />
              ))}
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden bg-neutral-950/50 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

const CardTechnologies = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn("flex flex-wrap gap-2 mt-4 text-black mx-auto", className)}
    >
      {children}
    </div>
  );
};

const CardLinks = ({
  type,
  href,
  icons,
}: {
  type: string;
  href: string;
  icons: React.ReactNode;
}) => {
  return (
    <Link href={href}>
      <Button
        size="sm"
        className={cn(`flex items-center justify-center gap-2 bg-[#8f61c8]`)}
      >
        <h1 className="text-neutral-200 ">{icons}</h1>
        <h1 className="text-neutral-200">{type}</h1>
      </Button>
    </Link>
  );
};
