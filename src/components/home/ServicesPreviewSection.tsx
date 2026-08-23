"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import RevealTitle from "@/components/ui/RevealTitle";

export default function ServicesPreviewSection() {
    return (
        <section id="services" className="py-24 md:py-32 bg-[#FDFBF7]">
            <div className="mx-auto px-6 md:px-12 xl:px-24">
                
                {/* En-tête de la section centré */}
                <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
                    <RevealTitle 
                        text="Mes Services" 
                        className="font-cormorant text-5xl md:text-7xl text-gray-900 font-light italic mb-4" 
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 font-light text-lg"
                    >
                        Des prestations sur mesure, pensées pour répondre à vos exigences artistiques les plus pointues.
                    </motion.p>
                    <div className="h-[1px] w-24 bg-gray-300 mt-6"></div>
                </div>

                {/* Liste des Services Éditoriale */}
                <div className="flex flex-col gap-0">
                    
                    {/* Service 01 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group flex flex-col lg:flex-row items-start lg:items-center py-12 lg:py-16 border-b border-gray-200 hover:border-terra transition-colors duration-500 gap-8 lg:gap-16 relative"
                    >

                        
                        {/* Titre et Intro */}
                        <div className="w-full lg:w-1/3 z-10">
                            <h3 className="text-3xl md:text-4xl font-cormorant italic text-gray-900 mb-4 group-hover:text-terra transition-colors">
                                Œuvres sur mesure
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Commandez une pièce unique créée spécialement pour votre espace, en collaboration étroite avec l'artiste pour capturer votre vision.
                            </p>
                        </div>
                        
                        {/* Liste des détails */}
                        <div className="w-full lg:w-1/3 z-10">
                            <ul className="space-y-4 text-sm text-gray-600 font-light uppercase tracking-wider">
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Consultation personnalisée
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Choix des dimensions
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Validation des esquisses
                                </li>
                            </ul>
                        </div>
                        
                        {/* Action */}
                        <div className="w-full lg:w-auto lg:ml-auto z-10">
                            <Link
                                href="/contact"
                                className="group inline-flex flex-col items-start lg:items-end"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                                    Demander un devis
                                </span>
                                <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Service 02 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="group flex flex-col lg:flex-row items-start lg:items-center py-12 lg:py-16 border-b border-gray-200 hover:border-terra transition-colors duration-500 gap-8 lg:gap-16 relative"
                    >

                        
                        {/* Titre et Intro */}
                        <div className="w-full lg:w-1/3 z-10">
                            <h3 className="text-3xl md:text-4xl font-cormorant italic text-gray-900 mb-4 group-hover:text-terra transition-colors">
                                Expositions
                            </h3>
                            <p className="text-gray-500 font-light leading-relaxed">
                                Organisation d'expositions privées ou publiques de mes œuvres, avec possibilité de vernissages et de présence sur demande.
                            </p>
                        </div>
                        
                        {/* Liste des détails */}
                        <div className="w-full lg:w-1/3 z-10">
                            <ul className="space-y-4 text-sm text-gray-600 font-light uppercase tracking-wider">
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Location d'œuvres
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Présence de l'artiste
                                </li>
                                <li className="flex items-center gap-4">
                                    <span className="w-1.5 h-1.5 bg-terra rounded-full"></span>
                                    Solutions clé en main
                                </li>
                            </ul>
                        </div>
                        
                        {/* Action */}
                        <div className="w-full lg:w-auto lg:ml-auto z-10">
                            <Link
                                href="/contact"
                                className="group inline-flex flex-col items-start lg:items-end"
                            >
                                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                                    En savoir plus
                                </span>
                                <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
