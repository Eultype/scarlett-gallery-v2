"use client";

// Import Framer Motion
import { motion } from "framer-motion";
// Import du Text Reveal
import RevealTitle from "@/components/ui/RevealTitle";

// Composant GalleryHeader : En-tête avec titre et badge
export default function GalleryHeader() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 flex flex-col items-center pt-10"
        >
            {/* Titre avec Animation */}
            <RevealTitle 
                text="La Galerie" 
                className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic justify-center mb-4" 
                delay={0.3}
            />
            
            {/* Ligne Signature */}
            <div className="h-[1px] w-24 bg-gray-300 mt-2 mb-6"></div>
            
            {/* Sous-titre Terracotta */}
            <p className="text-xl md:text-2xl text-terra italic mb-8">Collection complète des œuvres originales & tirages</p>
            
            {/* Texte de description (pour s'aligner avec Contact et Services) */}
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Chaque création est une invitation au voyage, une capture de la lumière et des émotions.
                Explorez cet espace où se mêlent peintures à l&apos;huile délicates et linogravures de caractère.
            </p>

            {/* Bouton d'accès au Musée 3D */}
            <motion.a 
                href="/exposition" 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 border border-terra px-8 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-terra hover:bg-terra hover:text-white transition-all duration-500"
            >
                Entrer dans le musée virtuel 3D
            </motion.a>
        </motion.div>
    );
}
