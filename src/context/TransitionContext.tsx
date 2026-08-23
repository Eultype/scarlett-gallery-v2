"use client";

import React, { createContext, useContext, useState } from "react";

interface TransitionContextType {
  isTransitioning: boolean;
  setIsTransitioning: (val: boolean) => void;
}

const TransitionContext = createContext<TransitionContextType>({
  isTransitioning: true,
  setIsTransitioning: () => {},
});

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [isTransitioning, setIsTransitioning] = useState(true);

  return (
    <TransitionContext.Provider value={{ isTransitioning, setIsTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionState() {
  return useContext(TransitionContext);
}
