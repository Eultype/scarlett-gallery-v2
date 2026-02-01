"use client";

// Import Framer Motion
import { motion } from "framer-motion";

// Composant GalleryHeader : En-tête avec titre et badge
export default function GalleryHeader() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
        >
            {/* Badge */}
            <span className="text-terra text-xs font-bold uppercase tracking-[0.3em] block pt-10">Collection</span>
            {/* Titre */}
            <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                La Galerie
            </h1>
            {/* Sous-titre */}
            <p className="text-gray-500 font-light tracking-wide">
                Collection complète des œuvres originales & tirages
            </p>
        </motion.div>
    );
}
