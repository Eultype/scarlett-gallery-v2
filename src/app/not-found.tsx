"use client";

// Import Next
import Link from "next/link";
// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { ArrowRight } from "lucide-react";

// Page 404
export default function NotFound() {
    return (
        <main className="relative min-h-screen bg-[#FDFBF7] flex items-center justify-center overflow-hidden px-4">
            
            {/* Texte de fond '404' */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.03, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
            >
                <span className="font-autumn text-[40vw] leading-none text-gray-900">404</span>
            </motion.div>

            {/* Header */}
            <div className="relative z-10 text-center space-y-8 max-w-2xl">
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-terra text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded"
                >
                    Inconnu
                </motion.div>

                {/* Titre */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="font-cormorant text-6xl md:text-8xl text-gray-900 font-light italic leading-tight"
                >
                    Cette toile n&apos;a pas <br /> encore de nom.
                </motion.h1>

                {/* Description */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-500 text-lg font-light leading-relaxed max-w-md mx-auto"
                >
                    Le chemin que vous cherchez n&apos;a pas encore été tracé. 
                    Laissez-vous guider vers l&apos;essentiel.
                </motion.p>

                {/* Lien Élégant */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="pt-8"
                >
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-4 text-gray-900 font-bold uppercase tracking-[0.2em] text-xs hover:text-terra transition-colors"
                    >
                        <span>Retourner à la Galerie</span>
                        <div className="w-12 h-px bg-gray-300 group-hover:bg-terra group-hover:w-20 transition-all duration-700"></div>
                        <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-500" />
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}