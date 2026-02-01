"use client";

// Import Framer Motion
import { motion } from "framer-motion";

// Composant ContactHeader : En-tête avec titre et badge
export default function ContactHeader() {
    return (
        <section className="mx-auto px-4 md:px-8 xl:px-20 mb-20 text-center pt-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
                {/* Badge */}
                <span className="text-terra text-xs font-bold uppercase tracking-[0.3em]">Discussion</span>
                {/* Titre */}
                <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                    Contact
                </h1>
                {/* Sous-titre */}
                <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                    Une question sur une œuvre, une envie de collaboration ou simplement l'envie d'échanger ?
                    Mon atelier est ouvert à la discussion.
                </p>
            </motion.div>
        </section>
    );
}
