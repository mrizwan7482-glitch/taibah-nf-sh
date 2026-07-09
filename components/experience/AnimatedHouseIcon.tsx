"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function AnimatedHouseIcon() {
  const [animationState, setAnimationState] = useState<"draw" | "fade" | "reset">("draw");

  useEffect(() => {
    let fadeTimeout: NodeJS.Timeout;
    let resetTimeout: NodeJS.Timeout;
    let drawTimeout: NodeJS.Timeout;

    const runCycle = () => {
      // 1. Fade out the SVG container after it stays fully drawn
      fadeTimeout = setTimeout(() => {
        setAnimationState("fade");
      }, 4200);

      // 2. Reset the path lengths to 0 while hidden
      resetTimeout = setTimeout(() => {
        setAnimationState("reset");
      }, 4900);

      // 3. Trigger redraw
      drawTimeout = setTimeout(() => {
        setAnimationState("draw");
      }, 5200);
    };

    // Run cycle every 5.8 seconds
    const interval = setInterval(runCycle, 5800);
    runCycle();

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimeout);
      clearTimeout(resetTimeout);
      clearTimeout(drawTimeout);
    };
  }, []);

  const pathVariants = {
    reset: { pathLength: 0 },
    draw: (custom: { duration: number; delay: number }) => ({
      pathLength: 1,
      transition: {
        duration: custom.duration,
        delay: custom.delay,
        ease: "easeInOut" as const,
      },
    }),
  };

  return (
    <motion.div
      className="animated-house-wrapper"
      animate={{ opacity: animationState === "fade" ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <svg
        viewBox="0 0 100 80"
        className="animated-house-svg"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Ground line */}
        <motion.line
          x1="10"
          y1="72"
          x2="90"
          y2="72"
          variants={pathVariants}
          custom={{ duration: 1.1, delay: 0 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* House base structure */}
        <motion.path
          d="M 22 72 L 22 42 L 50 18 L 78 42 L 78 72 Z"
          variants={pathVariants}
          custom={{ duration: 1.6, delay: 0.2 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* Roof line overhang */}
        <motion.path
          d="M 16 44 L 50 14 L 84 44"
          variants={pathVariants}
          custom={{ duration: 1.3, delay: 0.5 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* Chimney */}
        <motion.path
          d="M 66 28 L 66 22 L 72 22 L 72 33"
          variants={pathVariants}
          custom={{ duration: 0.7, delay: 0.8 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* Doorway */}
        <motion.path
          d="M 44 72 L 44 54 L 56 54 L 56 72"
          variants={pathVariants}
          custom={{ duration: 0.9, delay: 1.0 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* Left window */}
        <motion.rect
          x="30"
          y="49"
          width="8"
          height="8"
          rx="1"
          variants={pathVariants}
          custom={{ duration: 0.8, delay: 1.2 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
        {/* Right window */}
        <motion.rect
          x="62"
          y="49"
          width="8"
          height="8"
          rx="1"
          variants={pathVariants}
          custom={{ duration: 0.8, delay: 1.2 }}
          animate={animationState === "draw" ? "draw" : "reset"}
        />
      </svg>
    </motion.div>
  );
}
