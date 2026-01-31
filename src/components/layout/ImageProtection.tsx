"use client";

import { useEffect } from "react";

export default function ImageProtection() {
  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      // Vérifie si la cible du clic droit est une image (ou contient une image)
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // Ajoute l'écouteur d'événement au document
    document.addEventListener("contextmenu", handleContextmenu);

    // Nettoyage
    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
}
