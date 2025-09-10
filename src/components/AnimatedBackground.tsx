// components/AnimatedBackground.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// A simple, generic shape for the animation
const Circle = () => (
  <div
    style={{
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      backgroundColor: "rgba(128, 128, 128, 0.2)", // Use a specific, semi-transparent color
    }}
  />
);

const animatedComponents = [Circle];

const FallingItem = () => {
  const Component = React.useMemo(
    () =>
      animatedComponents[Math.floor(Math.random() * animatedComponents.length)],
    [],
  );

  const initialX = React.useMemo(() => Math.random() * 100, []);
  const duration = React.useMemo(() => Math.random() * 15 + 20, []);
  const size = React.useMemo(() => Math.random() * 30 + 10, []); // Smaller circles

  return (
    <motion.div
      className="absolute -top-[10vh] text-foreground"
      style={{
        left: `${initialX}vw`,
        width: size,
        height: size,
      }}
      initial={{ y: "-10vh", rotate: 0 }}
      animate={{ y: "110vh", rotate: 360 }}
      transition={{
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
        delay: Math.random() * 30,
      }}
    >
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
        }}
        transition={{
          duration: Math.random() * 8 + 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <Component />
      </motion.div>
    </motion.div>
  );
};

const AnimatedBackground = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <FallingItem key={i} />
      ))}
    </div>
  );
};

export default AnimatedBackground;