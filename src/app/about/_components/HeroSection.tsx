"use client";

// Import Next
import Image from "next/image";
// Import Framer Motion
import { motion } from "framer-motion";

// Composant HeroSection de la page about
export default function HeroSection() {
    return (
        <section className="py-20 pt-20 sm:pt-40 mx-auto px-4 md:px-10 xl:px-20">
            <div className="flex flex-col md:flex-row items-center gap-16 justify-center">
                {/* Image de l'artiste */}
                <div className="w-full md:w-5/12 lg:w-5/12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl border-[4px] border-white"
                    >
                        <Image
                            src="/images/about/Scarlett_peint.webp"
                            alt="Emma De Noni dans son atelier"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </div>

                <div className="w-full md:w-1/2 space-y-6">
                    {/* Badge */}
                    <div className="inline-block bg-terra text-white px-2 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded">
                        L&apos;Artiste
                    </div>

                    {/* Titre */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="font-cormorant text-5xl lg:text-7xl text-gray-900 leading-none italic"
                    >
                        Emma De Noni
                    </motion.h1>

                    {/* Sous-titre */}
                    <p className="text-2xl text-terra italic">L&apos;émotion au bout du pinceau</p>

                    {/* Description */}
                    <div className="text-gray-600 leading-relaxed text-lg space-y-6">
                        <p>
                            Originaire du Nord de la France et désormais établie au cœur de Bruxelles,
                            mon parcours artistique est une quête perpétuelle de lumière et de sensations.
                            Chaque toile est une invitation à ralentir et à observer la beauté dans l&apos;imperfection.
                        </p>
                        <p>
                            Je ne cherche pas à figer le réel, mais à en capturer l&apos;essence vibrante.
                            Mon travail est une exploration de l&apos;intime, un dialogue constant entre
                            la matière et la lumière où chaque coup de pinceau tente de traduire ces instants
                            fugaces qui transforment l&apos;ordinaire en poésie.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
