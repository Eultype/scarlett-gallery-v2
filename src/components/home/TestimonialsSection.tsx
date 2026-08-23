"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import RevealTitle from "@/components/ui/RevealTitle";

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        const timer = setInterval(nextReview, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-16 md:py-20 bg-[#FDFBF7] relative overflow-hidden w-full">
            <div className="mx-auto px-6 xl:px-20 text-center relative z-10 max-w-6xl">

                <div className="flex flex-col items-center text-center mb-20 max-w-2xl mx-auto">
                    <RevealTitle 
                        text="Ils m'ont fait confiance" 
                        className="font-cormorant text-5xl md:text-7xl text-gray-900 font-light italic mb-4" 
                    />
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-500 font-light text-lg"
                    >
                        Découvrez ce que disent mes clients
                    </motion.p>
                    <div className="h-[1px] w-24 bg-gray-300 mt-6"></div>
                </div>

                <div className="relative w-full flex flex-col items-center">
                    
                    {/* Navigation flèches */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 top-1/2 -translate-y-1/2 p-4 text-gray-300 hover:text-terra transition-colors z-20 hidden md:block"
                        aria-label="Précédent"
                    >
                        <ChevronLeft size={40} strokeWidth={1} />
                    </button>
                    
                    <button
                        onClick={nextReview}
                        className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-gray-300 hover:text-terra transition-colors z-20 hidden md:block"
                        aria-label="Suivant"
                    >
                        <ChevronRight size={40} strokeWidth={1} />
                    </button>

                    {/* Zone de Contenu */}
                    <div className="relative w-full max-w-4xl h-[500px] md:h-[400px]">
                        <AnimatePresence>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
                                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute inset-0 flex flex-col items-center justify-center w-full"
                            >
                                {/* Photo Collectionneur */}
                                {testimonials[currentIndex].image && (
                                    <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-full overflow-hidden mb-8 shadow-sm">
                                        <Image
                                            src={testimonials[currentIndex].image}
                                            alt={testimonials[currentIndex].name}
                                            fill
                                            sizes="96px"
                                            className="object-cover"
                                        />
                                    </div>
                                )}

                                {/* Petites Étoiles minimalistes */}
                                <div className="flex gap-1.5 mb-8">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-3 h-3 text-terra fill-terra opacity-80" />
                                    ))}
                                </div>

                                {/* Citation */}
                                <div className="relative w-full mb-12">
                                    <Quote className="absolute -top-6 left-0 md:left-4 w-10 h-10 text-terra/10 fill-current -scale-x-100" />
                                    <h2 className="font-cormorant text-3xl md:text-4xl leading-tight text-gray-900 italic font-light px-12 md:px-20">
                                        {testimonials[currentIndex].text}
                                    </h2>
                                    <Quote className="absolute -bottom-6 right-0 md:right-4 w-10 h-10 text-terra/10 fill-current" />
                                </div>

                                {/* Auteur */}
                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-gray-900 uppercase tracking-[0.2em]">
                                        {testimonials[currentIndex].name}
                                    </p>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Indicateurs (Dots) */}
                    <div className="flex justify-center gap-4 mt-8 md:mt-12">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Voir le témoignage ${index + 1}`}
                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                                    index === currentIndex 
                                        ? "bg-terra scale-150" 
                                        : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
