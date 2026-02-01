"use client";

// Import Framer Motion
import { motion } from "framer-motion";

// Composant ServicesHeader : En-tête de la page services
export default function ServicesHeader() {
    return (
        <section className="mx-auto px-4 md:px-10 xl:px-20 mb-24 text-center pt-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto space-y-6"
            >
                {/* Badge */}
                <span className="text-terra text-xs font-bold uppercase tracking-[0.3em]">Collaborations</span>
                {/* Titre */}
                <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                    Mes Prestations
                </h1>
                {/* Sous-titre */}
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                    Au-delà de ma collection personnelle, je mets mon savoir-faire au service de vos projets.
                    Que ce soit pour une œuvre unique ou un événement artistique, créons ensemble quelque chose d'exceptionnel.
                </p>
            </motion.div>
        </section>
    );
}
