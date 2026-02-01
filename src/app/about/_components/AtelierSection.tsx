"use client";

// Import Next
import Image from "next/image";
// Import Framer Motion
import { motion, useTransform, MotionValue } from "framer-motion";

// Interface
interface AtelierSectionProps {
    scrollYProgress: MotionValue<number>;
}

// Composant AtelierSection de la page about
export default function AtelierSection({ scrollYProgress }: AtelierSectionProps) {
    const yText = useTransform(scrollYProgress, [0, 1], [0, -300]);

    return (
        <section className="relative py-20">
            {/* Texte de fond 'Sanctuaire' */}
            <motion.div
                style={{ y: yText }}
                className="absolute top-20 md:top-20 lg:top-5 xl:top-10 right-6 md:right-12 lg:right-16 xl:right-24 opacity-[0.07] md:opacity-[0.05] select-none pointer-events-none whitespace-nowrap"
            >
                <span className="font-autumn text-[10vw] text-gray-900">Sanctuaire</span>
            </motion.div>

            <div className="mx-auto px-4 md:px-10 xl:px-20 relative z-10">
                {/* Badge / Titres */}
                <div className="text-center mb-16 flex flex-col items-center">
                    {/* Badge */}
                    <div className="inline-block bg-terra text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded mb-8">
                        L'Atelier
                    </div>
                    {/* Titre */}
                    <h2 className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light italic">Là où tout prend vie</h2>
                    {/* Sous-titre */}
                    <p className="text-gray-500 italic mt-4">Trois temps, un seul espace.</p>
                </div>

                {/* Le Triptyque (3 Colonnes côte à côte) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:h-[60vh] items-stretch">
                    
                    {/* Carte 1 : Refuge */}
                    <div className="group relative flex flex-col h-full">
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                            <Image 
                                src="/images/about/atelier_3.jpeg"
                                alt="Refuge" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Numéro / Titre / Description */}
                        <div className="pt-6 text-center md:text-left">
                            {/* Numéro */}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra">01</span>
                            {/* Titre */}
                            <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">Le Refuge</h3>
                            {/* Description */}
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                                Un espace volé au temps où le silence permet l'introspection.
                            </p>
                        </div>
                    </div>

                    {/* Carte 2 : Matière */}
                    <div className="group relative flex flex-col h-full md:-mt-12 md:mb-12"> {/* Décalage vertical pour rythme */}
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                            <Image 
                                src="/images/about/atelier_2.webp"
                                alt="Matière" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>
                        {/* Numéro / Titre / Description */}
                        <div className="pt-6 text-center md:text-left">
                            {/* Numéro */}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra">02</span>
                            {/* Titre */}
                            <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">L'Effervescence</h3>
                            {/* Description */}
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                                Le chaos fertile de l'huile, des tubes et de la création brute.
                            </p>
                        </div>
                    </div>

                    {/* Carte 3 : Lumière */}
                    <div className="group relative flex flex-col h-full">
                        {/* Image */}
                        <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                            <Image 
                                src="/images/about/IMG_8149.webp"
                                alt="Lumière" 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                        {/* Numéro / Titre / Description */}
                        <div className="pt-6 text-center md:text-left">
                            {/* Numéro */}
                            <span className="text-[10px] font-bold uppercase tracking-widest text-terra">03</span>
                            {/* Titre */}
                            <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">L'Ouverture</h3>
                            {/* Description */}
                            <p className="text-sm text-gray-600 font-light leading-relaxed">
                                Laisser entrer la lumière qui nourrit et révèle la toile.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
