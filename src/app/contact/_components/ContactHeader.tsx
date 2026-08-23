"use client";

// Import Framer Motion
import { motion } from "framer-motion";
// Import du Text Reveal
import RevealTitle from "@/components/ui/RevealTitle";

// Composant ContactHeader : En-tête avec titre et filigrane
export default function ContactHeader() {
    return (
        <section className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl mb-24 text-center pt-10 relative">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
            >
                {/* Titre avec Animation */}
                <RevealTitle 
                    text="Contact" 
                    className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic justify-center mb-4" 
                    delay={0.3}
                />
                
                {/* Ligne Signature */}
                <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>
                
                {/* Sous-titre Terracotta */}
                <p className="text-xl md:text-2xl text-terra italic mb-8">Mon atelier est ouvert à la discussion</p>

                {/* Texte */}
                <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Une question sur une œuvre, une envie de collaboration ou simplement l&apos;envie d&apos;échanger ?
                    N&apos;hésitez pas à m&apos;écrire.
                </p>
            </motion.div>
        </section>
    );
}
