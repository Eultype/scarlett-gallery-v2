"use client";

import { motion } from "framer-motion";
import { Html } from "@react-three/drei";

// Composant pour l'effet machine à écrire dans la bulle HTML
export function TypewriterText({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) {
    const letters = Array.from(text);
    return (
        <motion.span
            className={className}
            initial="hidden"
            animate="visible"
            variants={{
                visible: { transition: { staggerChildren: 0.03, delayChildren: delay } },
                hidden: {}
            }}
        >
            {letters.map((char, i) => (
                <motion.span
                    key={i}
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 5 }
                    }}
                    transition={{ duration: 0.1 }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </motion.span>
    );
}

export function Loader() {
  return (
    <Html center>
      <div className="flex flex-col items-center">
        <div className="w-16 h-[1px] bg-white animate-pulse mb-4"></div>
        <div className="text-white text-[10px] tracking-[0.5em] uppercase font-light text-center w-64">
            Construction des salles d'exposition...
        </div>
      </div>
    </Html>
  );
}
