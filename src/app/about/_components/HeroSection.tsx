"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";
import Badge from "@/components/ui/Badge";

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <section ref={sectionRef} className="py-20 sm:pt-32 mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
            <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 justify-between">
                
                {/* Image de l'artiste */}
                <div className="w-full md:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] overflow-hidden"
                    >
                        <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                            <Image
                                src="/images/about/Scarlett_peint.webp"
                                alt="Emma De Noni dans son atelier"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>

                {/* Contenu Texte */}
                <div className="w-full md:w-1/2 flex flex-col items-start">
                    <div className="mb-6">
                        <Badge text="L'Artiste peintre" variant="solid" />
                    </div>

                    {/* Titre Principal */}
                    <RevealTitle 
                        text="Emma De Noni" 
                        className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light italic mb-4" 
                        delay={0.2}
                    />

                    {/* Ligne Signature */}
                    <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>

                    {/* Sous-titre */}
                    <p className="text-xl md:text-2xl text-terra italic mb-8">L'émotion au bout du pinceau</p>

                    {/* Description */}
                    <div className="text-gray-500 font-light leading-relaxed text-lg space-y-6 max-w-lg">
                        <p>
                            Originaire du Nord de la France et désormais établie au cœur de Bruxelles,
                            mon parcours d'artiste peintre est une quête perpétuelle de lumière et de sensations.
                            Chaque toile est une invitation à ralentir et à observer la beauté dans l'imperfection.
                        </p>
                        <p>
                            Je ne cherche pas à figer le réel, mais à en capturer l'essence vibrante.
                            Mon travail est une exploration de l'intime, un dialogue constant entre
                            la matière et la lumière où chaque coup de pinceau tente de traduire ces instants
                            fugaces qui transforment l'ordinaire en poésie.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
