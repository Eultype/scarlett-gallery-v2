"use client";

import Image from "next/image";
import { motion, useTransform, MotionValue, useScroll } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";
import Badge from "@/components/ui/Badge";

interface AtelierSectionProps {
    scrollYProgress: MotionValue<number>;
}

import { useRef } from "react";

export default function AtelierSection({ scrollYProgress }: AtelierSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: sectionScroll } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    
    const yText = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const imageY = useTransform(sectionScroll, [0, 1], ["-10%", "10%"]);

    return (
        <section ref={sectionRef} className="relative py-20 md:py-32 bg-[#FDFBF7]">
            
            {/* Texte de fond (Typographie Géante) */}
            <motion.div
                style={{ y: yText }}
                className="absolute top-20 md:top-6 left-1/2 -translate-x-1/2 opacity-[0.03] select-none pointer-events-none whitespace-nowrap z-0"
            >
                <span className="font-cormorant italic text-[15vw] leading-none text-gray-900 tracking-tight">Sanctuaire</span>
            </motion.div>

            <div className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl relative z-10">
                
                {/* En-tête */}
                <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
                    <div className="mb-6">
                        <Badge text="L'Atelier à Bruxelles" variant="solid" />
                    </div>
                    
                    {/* Titre Principal */}
                    <RevealTitle 
                        text="Là où tout prend vie" 
                        className="font-cormorant text-5xl md:text-7xl text-gray-900 font-light italic mb-4" 
                    />
                    
                    {/* Description Minimaliste */}
                    <p className="text-gray-500 font-light text-lg">
                        Trois temps, un seul espace.
                    </p>
                    
                    {/* Ligne Signature */}
                    <div className="h-[1px] w-24 bg-gray-300 mt-6"></div>
                </div>

                {/* Le Triptyque (3 Colonnes côte à côte) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 h-auto md:h-[60vh] items-stretch">
                    
                    {/* Carte 1 : Refuge */}
                    <div className="group relative flex flex-col h-full">
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden min-h-[400px]">
                            <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                                <Image 
                                    src="/images/about/atelier_3.jpeg"
                                    alt="Le Refuge" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        </div>
                        {/* Textes */}
                        <div className="pt-8 text-center md:text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra mb-2 block">01</span>
                            <h3 className="font-cormorant text-3xl text-gray-900 mb-3 font-light italic">Le Refuge</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                Un espace volé au temps où le silence permet l'introspection.
                            </p>
                        </div>
                    </div>

                    {/* Carte 2 : Matière */}
                    <div className="group relative flex flex-col h-full md:-mt-12 md:mb-12">
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden min-h-[400px]">
                            <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                                <Image 
                                    src="/images/about/atelier_2.webp"
                                    alt="L'Effervescence" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                        </div>
                        {/* Textes */}
                        <div className="pt-8 text-center md:text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra mb-2 block">02</span>
                            <h3 className="font-cormorant text-3xl text-gray-900 mb-3 font-light italic">L'Effervescence</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                Le chaos fertile de l'huile, des tubes et de la création brute.
                            </p>
                        </div>
                    </div>

                    {/* Carte 3 : Lumière */}
                    <div className="group relative flex flex-col h-full">
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden min-h-[400px]">
                            <motion.div style={{ y: imageY }} className="absolute -top-[10%] left-0 w-full h-[120%]">
                                <Image 
                                    src="/images/about/IMG_8149.webp"
                                    alt="L'Ouverture" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none"></div>
                        </div>
                        {/* Textes */}
                        <div className="pt-8 text-center md:text-left">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra mb-2 block">03</span>
                            <h3 className="font-cormorant text-3xl text-gray-900 mb-3 font-light italic">L'Ouverture</h3>
                            <p className="text-sm text-gray-500 font-light leading-relaxed">
                                Laisser entrer la lumière qui nourrit et révèle la toile.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
