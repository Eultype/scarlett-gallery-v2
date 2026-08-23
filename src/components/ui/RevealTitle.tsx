"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTransitionState } from "@/context/TransitionContext";

interface RevealTitleProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function RevealTitle({ text, className = "", delay = 0 }: RevealTitleProps) {
  const ref = useRef(null);
  // once: true permet à l'animation de ne se jouer qu'une seule fois quand on scrolle
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // On sépare le texte en mots
  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Délai entre chaque mot
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      y: "120%", // Le mot est caché en bas
      opacity: 0,
    },
    visible: {
      y: "0%", // Le mot remonte à sa position
      opacity: 1,
      transition: {
        ease: [0.33, 1, 0.68, 1] as const, // Courbe d'accélération (cubic-bezier) très fluide
        duration: 0.8,
      },
    },
  };

  const { isTransitioning } = useTransitionState();
  const shouldAnimate = isInView && !isTransitioning;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden relative mr-[0.25em] inline-block pt-1 pb-[0.2em] -mb-[0.2em]">
          <motion.span 
            variants={wordVariants} 
            className="inline-block origin-bottom"
            style={{ willChange: "transform, opacity", transform: "translateZ(0)" }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
