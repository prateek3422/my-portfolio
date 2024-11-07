"use client";

import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import React, { useState } from "react";

export const ServiceHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
  }[];

  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 64 64"
              >
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0a_43988_gr1"
                  x1="11"
                  x2="11"
                  y1="24.125"
                  y2="27.956"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#6dc7ff"></stop>
                  <stop offset="1" stopColor="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0a_43988_gr1)"
                  d="M11 24.5A1.5 1.5 0 1 0 11 27.5A1.5 1.5 0 1 0 11 24.5Z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0b_43988_gr2"
                  x1="11"
                  x2="11"
                  y1="30.5"
                  y2="33.761"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#6dc7ff"></stop>
                  <stop offset="1" stopColor="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0b_43988_gr2)"
                  d="M11 30.5A1.5 1.5 0 1 0 11 33.5A1.5 1.5 0 1 0 11 30.5Z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0c_43988_gr3"
                  x1="11"
                  x2="11"
                  y1="36.188"
                  y2="39.743"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#6dc7ff"></stop>
                  <stop offset="1" stopColor="#e6abff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0c_43988_gr3)"
                  d="M11 36.5A1.5 1.5 0 1 0 11 39.5A1.5 1.5 0 1 0 11 36.5Z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0d_43988_gr4"
                  x1="32"
                  x2="32"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0d_43988_gr4)"
                  d="M49,36.051V18v-1v-1c0-1.654-1.346-3-3-3H34h-3.041c-0.304,0-0.587-0.136-0.776-0.374 l-2.8-3.498C26.811,8.411,25.955,8,25.036,8h-9H16H9.005C7.348,8,6,9.348,6,11.005V17v1v26c0,1.654,1.346,3,3,3h25.051 c0.503,5.046,4.773,9,9.949,9h4c5.514,0,10-4.486,10-10C58,40.824,54.046,36.554,49,36.051z M39.67,37H35v2h1.871 c-1.553,1.582-2.588,3.673-2.82,6H16V19h31v17h-3C42.448,36,40.982,36.366,39.67,37z M25.82,10.377L27.92,13h-5.961 c-0.304,0-0.587-0.136-0.776-0.374L19.081,10h5.955C25.344,10,25.629,10.137,25.82,10.377z M8,11.005C8,10.451,8.451,10,9.005,10H16 h0.036c0.308,0,0.593,0.137,0.784,0.377l2.8,3.498C20.19,14.59,21.043,15,21.959,15h9H34h12c0.552,0,1,0.448,1,1v1H8V11.005z M8,44 V19h6v26H9C8.448,45,8,44.552,8,44z M48,54h-4c-4.411,0-8-3.589-8-8s3.589-8,8-8h4c4.411,0,8,3.589,8,8S52.411,54,48,54z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0e_43988_gr5"
                  x1="28"
                  x2="28"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0e_43988_gr5)"
                  d="M23 25H33V27H23z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0f_43988_gr6"
                  x1="40"
                  x2="40"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0f_43988_gr6)"
                  d="M35 25H45V27H35z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0g_43988_gr7"
                  x1="42"
                  x2="42"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0g_43988_gr7)"
                  d="M39 29H45V31H39z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0h_43988_gr8"
                  x1="34"
                  x2="34"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0h_43988_gr8)"
                  d="M31 29H37V31H31z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0i_43988_gr9"
                  x1="42"
                  x2="42"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0i_43988_gr9)"
                  d="M39 33H45V35H39z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0j_43988_gr10"
                  x1="34"
                  x2="34"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0j_43988_gr10)"
                  d="M31 33H37V35H31z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0k_43988_gr11"
                  x1="28"
                  x2="28"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0k_43988_gr11)"
                  d="M23 37H33V39H23z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0l_43988_gr12"
                  x1="50"
                  x2="50"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0l_43988_gr12)"
                  d="M51,44c0-1.654-1.346-3-3-3h-1v2h1c0.552,0,1,0.448,1,1c0,0.768,0.29,1.469,0.766,2 C49.29,46.531,49,47.232,49,48c0,0.552-0.448,1-1,1h-1v2h1c1.654,0,3-1.346,3-3c0-0.552,0.448-1,1-1h1v-2h-1 C51.448,45,51,44.552,51,44z"
                ></path>
                <linearGradient
                  id="2~kIYcDjBjAVPnBA__RB0m_43988_gr13"
                  x1="42"
                  x2="42"
                  y1="7.5"
                  y2="56.684"
                  gradientUnits="userSpaceOnUse"
                  spreadMethod="reflect"
                >
                  <stop offset="0" stopColor="#1a6dff"></stop>
                  <stop offset="1" stopColor="#c822ff"></stop>
                </linearGradient>
                <path
                  fill="url(#2~kIYcDjBjAVPnBA__RB0m_43988_gr13)"
                  d="M41,44c0,0.552-0.448,1-1,1h-1v2h1c0.552,0,1,0.448,1,1c0,1.654,1.346,3,3,3h1v-2h-1 c-0.552,0-1-0.448-1-1c0-0.768-0.29-1.469-0.766-2C42.71,45.469,43,44.768,43,44c0-0.552,0.448-1,1-1h1v-2h-1 C42.346,41,41,42.346,41,44z"
                ></path>
              </svg>
            </div>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>
              {item.description.substring(0, 100)}
            </CardDescription>
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
        "rounded-2xl h-full w-full  overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
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
