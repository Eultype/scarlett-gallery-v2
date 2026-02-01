"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function InitialLoader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Vérifier si l'utilisateur a déjà vu l'intro dans cette session
        const hasVisited = sessionStorage.getItem("hasVisitedScarlett");

        if (hasVisited) {
            setIsLoading(false);
        } else {
            // Si c'est la première fois, on joue l'animation
            // Bloquer le scroll
            document.body.style.overflow = "hidden";

            // Durée de l'animation (ex: 2.5 secondes)
            const timer = setTimeout(() => {
                setIsLoading(false);
                sessionStorage.setItem("hasVisitedScarlett", "true");
                document.body.style.overflow = "auto";
            }, 3500);

            return () => {
                clearTimeout(timer);
                document.body.style.overflow = "auto";
            };
        }
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="initial-loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#FDFBF7]"
                >
                    <div className="flex flex-col items-center gap-6">
                        
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                                y: 0,
                                transition: { duration: 1, ease: "easeOut", delay: 0.5 }
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
                                transition: { duration: 0.8, ease: "easeInOut", delay: 1.2 }
                            }}
                            className="h-[1px] bg-terra/50"
                        />

                        {/* Signature / Nom de l'artiste */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: 1,
                                transition: { duration: 1, delay: 1.8 }
                            }}
                            className="text-center"
                        >
                            <p className="font-autumn text-2xl md:text-3xl text-gray-800 tracking-wide">
                                Emma De Noni
                            </p>
                            <p className="font-cormorant text-sm uppercase tracking-[0.3em] text-terra mt-2">
                                Artiste Peintre
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
