"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function InitialLoader() {
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isRemoved, setIsRemoved] = useState(false);

    useEffect(() => {
        const isBot = /bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent);
        const hasVisited = sessionStorage.getItem("hasVisitedScarlett");

        if (hasVisited || isBot) {
            document.documentElement.classList.remove("js-show-loader");
            document.body.style.overflow = "auto";
            setIsRemoved(true);
            return;
        }

        // Déclencher le fondu de sortie après 2.2s
        const fadeTimer = setTimeout(() => {
            setIsFadingOut(true);
            sessionStorage.setItem("hasVisitedScarlett", "true");
            document.body.style.overflow = "auto";
        }, 2200);

        // Retirer complètement l'overlay après la fin de la transition (0.8s)
        const removeTimer = setTimeout(() => {
            document.documentElement.classList.remove("js-show-loader");
            setIsRemoved(true);
        }, 3000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
            document.body.style.overflow = "auto";
        };
    }, []);

    if (isRemoved) return null;

    return (
        <div
            id="initial-loader-overlay"
            aria-hidden="true"
            className={`fixed inset-0 z-[9999] flex-col items-center justify-center bg-[#FDFBF7] transition-opacity duration-700 ease-in-out ${
                isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
        >
            <div className="flex flex-col items-center gap-6">
                
                {/* Logo Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: { duration: 0.9, ease: "easeOut", delay: 0.2 }
                    }}
                    className="relative w-64 h-32 md:w-80 md:h-40"
                >
                    <Image
                        src="/images/logos/img.png"
                        alt="Scarlett Gallery"
                        fill
                        className="object-contain"
                        priority
                    />
                </motion.div>

                {/* Ligne de séparation qui s'étire */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                        width: "100px",
                        transition: { duration: 0.7, ease: "easeInOut", delay: 0.8 }
                    }}
                    className="h-[1px] bg-terra/50"
                />

                {/* Signature / Nom de l'artiste */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { duration: 0.8, delay: 1.2 }
                    }}
                    className="text-center px-4"
                >
                    <p className="font-autumn text-2xl md:text-3xl text-gray-800 tracking-wide leading-relaxed py-2 overflow-visible">
                        Emma De Noni
                    </p>
                    <p className="font-cormorant text-sm uppercase tracking-[0.3em] text-terra mt-2">
                        Artiste Peintre
                    </p>
                </motion.div>
            </div>
        </div>
    );
}

