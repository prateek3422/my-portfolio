"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const AnimatedBackground = () => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  const number = 10;
  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * window.innerWidth) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 2 + 3) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02]" />

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Animated Meteors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...meteorStyles].map((style, idx) => (
          <div
            key={idx}
            className={cn(
              "animate-meteor absolute top-1/2 left-1/2",
              "h-0.5 w-0.5 rounded-full bg-purple-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
              'before:content-[""] before:absolute before:top-1/2 before:transform before:-translate-y-1/2',
              "before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-purple-500 before:to-transparent"
            )}
            style={style}
          />
        ))}
      </div>
    </>
  );
};
