"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";
import { TransitionProvider, useTransitionState } from "@/context/TransitionContext";

function TemplateContent({ children }: { children: React.ReactNode }) {
  const { isTransitioning, setIsTransitioning } = useTransitionState();

  useEffect(() => {
    // Un délai très court (150ms) juste pour masquer le Layout Shift sans donner d'impression de lag
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 150);

    return () => clearTimeout(timer);
  }, [setIsTransitioning]);

  return (
    <>
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-[#FDFBF7] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <TransitionProvider>
      <TemplateContent>{children}</TemplateContent>
    </TransitionProvider>
  );
}
