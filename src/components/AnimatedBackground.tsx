// components/AnimatedBackground.tsx

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// Import all 10 chemical components
import { ChemicalOne } from "./icons/ChemicalOne";
import { ChemicalTwo } from "./icons/ChemicalTwo";
import { ChemicalThree } from "./icons/ChemicalThree";
import { ChemicalFour } from "./icons/ChemicalFour";
import { ChemicalFive } from "./icons/ChemicalFive";
import { ChemicalSix } from "./icons/ChemicalSix";
import { ChemicalSeven } from "./icons/ChemicalSeven";
import { ChemicalEight } from "./icons/ChemicalEight";
import { ChemicalNine } from "./icons/ChemicalNine";
import { ChemicalTen } from "./icons/ChemicalTen";

const chemicalComponents = [
  ChemicalOne,
  ChemicalTwo,
  ChemicalThree,
  ChemicalFour,
  ChemicalFive,
  ChemicalSix,
  ChemicalSeven,
  ChemicalEight,
  ChemicalNine,
  ChemicalTen,
];

const FallingChemical = () => {
  const Component = React.useMemo(
    () =>
      chemicalComponents[Math.floor(Math.random() * chemicalComponents.length)],
    [],
  );

  const initialX = React.useMemo(() => Math.random() * 100, []);
  const duration = React.useMemo(() => Math.random() * 15 + 20, []);
  const size = React.useMemo(() => Math.random() * 40 + 20, []);

  return (
    <motion.div
      className="absolute -top-[10vh] text-foreground opacity-50"
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
  // State to track if the component has mounted on the client
  const [isMounted, setIsMounted] = useState(false);

  // useEffect runs only on the client, after the initial render
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component has not mounted yet, render nothing (null)
  // This prevents the random values from being part of the server render
  if (!isMounted) {
    return null;
  }

  // Once mounted, render the background on the client
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {Array.from({ length: 15 }).map((_, i) => (
        <FallingChemical key={i} />
      ))}
    </div>
  );
};

export default AnimatedBackground;
