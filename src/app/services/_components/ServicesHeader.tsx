"use client";

import { motion } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";
import Badge from "@/components/ui/Badge";

export default function ServicesHeader() {
    return (
        <section className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl mb-24 text-center pt-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto flex flex-col items-center"
            >

                {/* Titre avec Animation */}
                <RevealTitle 
                    text="Mes Prestations" 
                    className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic justify-center mb-4" 
                    delay={0.3}
                />
                
                {/* Ligne Signature */}
                <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>
                
                {/* Sous-titre */}
                <p className="text-xl md:text-2xl text-terra italic mb-8">Un dialogue avec la matière</p>
                
                {/* Texte */}
                <p className="text-gray-500 font-light leading-relaxed text-lg">
                    Au-delà de ma collection personnelle, je mets mon savoir-faire au service de vos projets.
                    Que ce soit pour une œuvre unique ou un événement artistique, créons ensemble quelque chose d'exceptionnel.
                </p>
            </motion.div>
        </section>
    );
}
