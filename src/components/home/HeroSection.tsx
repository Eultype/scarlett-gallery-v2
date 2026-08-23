"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { motion, useScroll, useTransform } from "framer-motion";

const backgroundImages = [
    "/images/hero/eteHD.webp",
    "/images/hero/automneHD.webp",
    "/images/hero/hiverHD.webp",
    "/images/hero/printempsHD.webp",
];

export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lenis = useLenis();
    const containerRef = useRef<HTMLDivElement>(null);

    // Parallax effect
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Background moves down slightly slower than the scroll
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    // Text fades out and moves up
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        lenis?.scrollTo("#about");
    };

    return (
        <section 
            ref={containerRef}
            className="relative h-screen w-full overflow-hidden bg-black"
        >
            {/* Images de fond avec Parallax & Ken Burns */}
            <motion.div style={{ y }} className="absolute inset-0 z-0 w-full h-[120%] -top-[10%]">
                {backgroundImages.map((src, index) => {
                    const isActive = index === currentImageIndex;
                    return (
                        <div
                            key={src}
                            className={`absolute inset-0 transition-all duration-[2000ms] ease-out ${
                                isActive ? "opacity-100 scale-100" : "opacity-0 scale-110"
                            }`}
                        >
                            <Image
                                src={src}
                                alt="Tableau original Scarlett Gallery"
                                fill
                                className="object-cover"
                                priority={index === 0}
                            />
                            {/* Overlay léger pour que le texte blanc reste lisible */}
                            <div className="absolute inset-0 bg-black/20" />
                        </div>
                    );
                })}
            </motion.div>

            {/* Titre et indicateur */}
            <motion.div 
                style={{ y: textY, opacity: textOpacity }}
                className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 pt-10 md:pt-20"
            >
                <div className="overflow-hidden pb-4">
                    <motion.h1 
                        initial={{ y: 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="font-autumn text-6xl md:text-8xl lg:text-9xl px-4 py-2 block leading-normal drop-shadow-lg"
                    >
                        Scarlett Gallery
                    </motion.h1>
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                    className="mt-6 flex items-center gap-4 md:gap-8"
                >
                    <div className="w-8 md:w-24 h-[1px] bg-white/40" />
                    <span className="text-[10px] md:text-sm font-montserrat tracking-[0.4em] uppercase text-white/90">
                        Artiste Peintre
                    </span>
                    <div className="w-8 md:w-24 h-[1px] bg-white/40" />
                </motion.div>
            </motion.div>

            {/* Ligne animée de scroll (s'efface au scroll) */}
            <motion.div style={{ opacity: textOpacity }} className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 z-20">
                <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    onClick={scrollToAbout}
                    className="flex flex-col items-center gap-3 cursor-pointer group"
                    aria-label="Découvrir"
                >
                    <div className="w-[1px] h-8 md:h-12 bg-white/20 relative overflow-hidden">
                        <motion.div 
                            animate={{ y: ["-100%", "200%"] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-1/2 bg-white" 
                        />
                    </div>
                    <span className="text-[9px] uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors">Découvrir</span>
                </motion.button>
            </motion.div>
        </section>
    );
}
