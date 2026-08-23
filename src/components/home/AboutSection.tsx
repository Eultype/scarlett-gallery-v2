"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";

export default function AboutSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

    return (
        <section id="about" ref={sectionRef} className="py-24 lg:py-40 bg-[#FDFBF7] overflow-hidden">
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
                    
                    {/* Zone Texte (Maintenant à Droite sur grand écran) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-2">
                        <RevealTitle 
                            text="L'Artiste" 
                            className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic mb-2 -ml-2" 
                        />
                        
                        
                        <p className="text-xl text-terra italic font-medium mb-8">
                            Emma De Noni, Peintre à Bruxelles
                        </p>
                        
                        <div className="prose prose-lg text-gray-600 leading-relaxed mb-12 space-y-4 text-justify lg:text-left">
                            <p className="first-letter:text-7xl first-letter:font-cormorant first-letter:text-terra first-letter:mr-3 first-letter:float-left first-letter:leading-none first-letter:-mt-1.5">
                                Je m’appelle Emma, artiste peintre originaire de Tourcoing et aujourd’hui installée à <strong>Bruxelles</strong>.
                                Ma passion pour la <strong>peinture à l'huile</strong> est née très tôt, au contact de ma tante,
                                qui m’a transmis non seulement les techniques classiques, mais aussi l’amour du geste et de la matière.
                            </p>
                            <p>
                                Ce qu’elle m’a appris dépasse la simple maîtrise technique : elle m’a ouvert les yeux
                                sur la puissance des émotions qu’une toile peut véhiculer. Chaque <strong>portrait</strong> ou paysage que je réalise
                                est le reflet d’une histoire unique, d’une lumière ou d’un instant suspendu.
                            </p>
                            <p className="hidden md:block">
                                Mon univers artistique s’inspire de mes rencontres et de la richesse culturelle bruxelloise.
                                J’aime explorer les nuances, expérimenter le clair-obscur et laisser une
                                place à l'intuition pour créer des <strong>œuvres authentiques</strong> et vibrantes.
                            </p>
                            <p>
                                Aujourd’hui, je continue de peindre avec la même ferveur, animée par le
                                désir de partager mon regard et de réaliser des <strong>commandes personnalisées</strong> qui
                                toucheront le cœur de ceux qui les reçoivent.
                            </p>
                        </div>

                        <div>
                            <Link
                                href="/about"
                                className="group inline-flex flex-col items-start"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                                    Découvrir mon parcours d'artiste peintre
                                </span>
                                <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Zone Image (Maintenant à Gauche sur grand écran) */}
                    <div className="w-full lg:w-5/12 order-1 lg:order-1 relative group">
                        <div className="relative aspect-[4/5] overflow-hidden">
                            <motion.div 
                                style={{ y: imageY }} 
                                className="w-full h-[110%] absolute -top-[5%] left-0"
                            >
                            {/* Image Noir & Blanc par défaut */}
                            <Image
                                src="/images/about/Scarlett_conv(noirblanc).webp"
                                alt="Emma De Noni - Artiste peintre"
                                fill
                                className="object-cover transition-opacity duration-1000 ease-in-out group-hover:opacity-0"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            
                            {/* Révélation de la couleur au survol (ou toujours visible sur mobile) */}
                            <Image
                                src="/images/about/Scarlett_conv2.webp"
                                alt="Emma De Noni dans son atelier"
                                fill
                                className="object-cover transition-opacity duration-1000 ease-in-out opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
