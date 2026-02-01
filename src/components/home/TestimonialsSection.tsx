"use client";

// Import Next
import Image from "next/image";
// Import React
import { useState, useEffect } from "react";
// Import Lucide Icons
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import datas
import { testimonials } from "@/data/testimonials";

// Composant TestimonialsSection de la page d'accueil
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
        <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden w-full">
            <div className="mx-auto px-0 xl:px-20 text-center relative z-10">

                {/* Titres */}
                <div className="text-center mb-16 space-y-4">
                    {/* Titre */}
                    <h2 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        Ils m'ont fait confiance
                    </h2>
                    {/* Sous-titre */}
                    <p className="text-gray-500 italic">
                        Découvrez ce que disent mes clients
                    </p>
                    <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
                </div>

                {/* Avatar et étoiles */}
                <div className="flex flex-col items-center w-full mb-8">
                    {/* Avatar */}
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                        <Image
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            fill
                            sizes="(max-width: 768px) 96px, 128px"
                            className="object-cover"
                        />
                    </div>
                    {/* Étoiles */}
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-terra fill-terra" />
                        ))}
                    </div>
                </div>

                {/* Slider de texte avec flèches */}
                <div className="relative w-full flex items-center justify-center">

                    {/* Précédent */}
                    <button
                        onClick={prevReview}
                        className="absolute left-0 p-2 text-terra/30 hover:text-terra transition-colors z-20"
                        aria-label="Précédent"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    {/* Texte animé */}
                    <div className="w-full min-h-[250px] md:min-h-[200px] flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full"
                            >
                                <Quote className="absolute -top-10 left-4 md:left-10 w-10 h-10 text-terra/10 fill-current" />
                                <h2 className="font-cormorant text-2xl md:text-4xl leading-relaxed text-gray-800 italic font-light px-12 md:px-24">
                                    &quot;{testimonials[currentIndex].text}&quot;
                                </h2>
                                <Quote className="absolute -bottom-10 right-4 md:right-10 w-10 h-10 text-terra/10 fill-current rotate-180" />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Suivant */}
                    <button
                        onClick={nextReview}
                        className="absolute right-0 p-2 text-terra/30 hover:text-terra transition-colors z-20"
                        aria-label="Suivant"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>
                </div>

                {/* Auteur et indicateurs */}
                <div className="mt-8 space-y-6">
                    <div className="space-y-1">
                        {/* Auteur */}
                        <p className="text-base font-bold text-gray-900 uppercase tracking-widest">
                            {testimonials[currentIndex].name}
                        </p>
                        {/* Rôle */}
                        <p className="text-xs text-terra font-medium uppercase tracking-wider">
                            {testimonials[currentIndex].role}
                        </p>
                    </div>

                    {/* Indicateurs */}
                    <div className="flex justify-center gap-3">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                aria-label={`Voir le témoignage de ${testimonials[index].name}`}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? "bg-terra w-6" : "bg-terra/20 hover:bg-terra/40"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
