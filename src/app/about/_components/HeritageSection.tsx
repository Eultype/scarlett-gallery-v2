"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue, useScroll } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";
import Badge from "@/components/ui/Badge";

interface HeritageSectionProps {
    scrollYProgress: MotionValue<number>;
}

import { useRef } from "react";

export default function HeritageSection({ scrollYProgress }: HeritageSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sectionScroll } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const imageY = useTransform(sectionScroll, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-32 bg-[#FDFBF7]">
            
            {/* Texte de fond 'Héritage' (Typographie Géante) */}
            <motion.div
                style={{ y: yText }}
                className="absolute top-0 left-1/2 -translate-x-1/2 md:left-10 md:translate-x-0 lg:left-24 opacity-[0.03] select-none pointer-events-none whitespace-nowrap z-0"
            >
                <span className="font-cormorant italic text-[15vw] leading-none text-gray-900 tracking-tight">Héritage</span>
            </motion.div>

            <div className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
                    
                    {/* Contenu Texte (Maintenant à gauche) */}
                    <div className="w-full md:w-1/2 flex flex-col items-start">
                        
                        <div className="mb-6">
                            <Badge text="Les Origines" variant="solid" />
                        </div>

                        {/* Titre avec Animation */}
                        <RevealTitle 
                            text="Un héritage précieux" 
                            className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light italic mb-4" 
                        />

                        {/* Ligne Signature */}
                        <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>

                        {/* Sous-titre */}
                        <p className="text-xl md:text-2xl text-terra italic mb-8">Le murmure de l'atelier</p>

                        {/* Description */}
                        <p className="text-gray-500 font-light leading-relaxed text-lg max-w-lg">
                            "Ma passion n'est pas née dans une école d'art, mais dans le petit atelier
                            de ma tatie Lily. C'est elle qui m'a appris que la peinture
                            ne se regarde pas avec les yeux, mais avec le cœur. Le murmure de son atelier
                            résonne encore dans chacune de mes toiles."
                        </p>
                    </div>

                    {/* Image de l'artiste et sa tante */}
                    <div className="w-full md:w-5/12">
                        <div className="relative aspect-[3/4] overflow-hidden">
                            <motion.div
                                style={{ y: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : imageY }}
                                className="absolute -top-[10%] left-0 w-full h-[120%]"
                            >
                                <Image
                                    src="/images/about/emma-line.webp"
                                    alt="Emma et sa tante Lily dans l'atelier"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
