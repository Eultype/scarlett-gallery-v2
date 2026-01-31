"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const yImg = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <main ref={containerRef} className="pt-24 bg-[#FDFBF7] overflow-x-hidden">

            {/* Section HERO - L'Artiste */}
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
                                src="/images/about/Scarlett_peint.jpg"
                                alt="Emma De Noni dans son atelier"
                                fill
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
                            className="font-cormorant text-5xl lg:text-7xl text-gray-900 leading-none"
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

            {/* Section : L'héritage */}
            <section className="relative py-40">
                {/* Texte de fond 'Héritage' */}
                <motion.div
                    style={{ y: yText }}
                    className="absolute top-20 md:top-20 lg:top-5 xl:top-5 right-16 md:right-35 lg:right-40 xl:right-60 opacity-[0.07] md:opacity-[0.03] select-none pointer-events-none whitespace-nowrap"
                >
                    <span className="font-autumn text-[10vw]">Heritage</span>
                </motion.div>

                <div className="mx-auto px-4 md:px-10 xl:px-20 relative">
                    <div className="mx-auto">
                        <div className="flex flex-col md:flex-row items-center gap-16 mb-10">
                            <div className="md:w-3/5 space-y-8">
                                {/* Badge */}
                                <div className="inline-block bg-terra text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded">
                                    L'Héritage
                                </div>

                                {/* Titre */}
                                <h2 className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light">Un héritage précieux</h2>

                                {/* Sous-titre */}
                                <p className="text-2xl text-terra italic">Le murmure de l&apos;atelier</p>

                                {/* Description */}
                                <p className="text-xl text-gray-600 leading-relaxed text-justify">
                                    &quot;Ma passion n&apos;est pas née dans une école d&apos;art, mais dans le petit atelier
                                    de ma tatie Lily. C&apos;est elle qui m&apos;a appris que la peinture
                                    ne se regarde pas avec les yeux, mais avec le cœur.&quot;
                                </p>
                            </div>

                            {/* Image de l'artiste et sa tante */}
                            <motion.div
                                style={{ y: yImg }}
                                className="md:w-2/5 aspect-[3/4] rounded-lg relative shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
                            >
                                <Image
                                    src="/images/about/emma-line.webp"
                                    alt="L'atelier"
                                    fill
                                    className="object-cover rounded-lg border-[4px] border-white"
                                />
                            </motion.div>
                        </div>

                        {/* Fin de la section Héritage */}
                    </div>
                </div>
            </section>

            {/* Section : Le Lieu  */}
            <section className="relative py-20">
                {/* Texte de fond 'Sanctuaire' */}
                <motion.div
                    style={{ y: yText }}
                    className="absolute top-20 md:top-20 lg:top-5 xl:top-10 right-6 md:right-12 lg:right-16 xl:right-24 opacity-[0.07] md:opacity-[0.05] select-none pointer-events-none whitespace-nowrap"
                >
                    <span className="font-autumn text-[10vw] text-gray-900">Sanctuaire</span>
                </motion.div>

                <div className="mx-auto px-4 md:px-10 xl:px-20 relative z-10">
                    {/* Badge / Titres */}
                    <div className="text-center mb-16 flex flex-col items-center">
                        {/* Badge */}
                        <div className="inline-block bg-terra text-white px-4 py-1 text-[10px] font-bold uppercase tracking-[0.3em] rounded mb-8">
                            L'Atelier
                        </div>
                        {/* Titre */}
                        <h2 className="font-cormorant text-5xl lg:text-7xl text-gray-900 font-light italic">Là où tout prend vie</h2>
                        {/* Sous-titre */}
                        <p className="text-gray-500 italic mt-4">Trois temps, un seul espace.</p>
                    </div>

                    {/* Le Triptyque (3 Colonnes côte à côte) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-auto md:h-[60vh] items-stretch">
                        
                        {/* Carte 1 : Refuge */}
                        <div className="group relative flex flex-col h-full">
                            {/* Image */}
                            <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                                <Image 
                                    src="/images/about/atelier_3.jpeg"
                                    alt="Refuge" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            {/* Numéro / Titre / Description */}
                            <div className="pt-6 text-center md:text-left">
                                {/* Numéro */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-terra">01</span>
                                {/* Titre */}
                                <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">Le Refuge</h3>
                                {/* Description */}
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Un espace volé au temps où le silence permet l'introspection.
                                </p>
                            </div>
                        </div>

                        {/* Carte 2 : Matière */}
                        <div className="group relative flex flex-col h-full md:-mt-12 md:mb-12"> {/* Décalage vertical pour rythme */}
                            {/* Image */}
                            <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                                <Image 
                                    src="/images/about/atelier_2.webp"
                                    alt="Matière" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            {/* Numéro / Titre / Description */}
                            <div className="pt-6 text-center md:text-left">
                                {/* Numéro */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-terra">02</span>
                                {/* Titre */}
                                <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">L'Effervescence</h3>
                                {/* Description */}
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Le chaos fertile de l'huile, des tubes et de la création brute.
                                </p>
                            </div>
                        </div>

                        {/* Carte 3 : Lumière */}
                        <div className="group relative flex flex-col h-full">
                            {/* Image */}
                            <div className="relative flex-grow overflow-hidden rounded-sm min-h-[400px] border-[4px] border-white shadow-md">
                                <Image 
                                    src="/images/about/IMG_8149.webp"
                                    alt="Lumière" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            {/* Numéro / Titre / Description */}
                            <div className="pt-6 text-center md:text-left">
                                {/* Numéro */}
                                <span className="text-[10px] font-bold uppercase tracking-widest text-terra">03</span>
                                {/* Titre */}
                                <h3 className="font-cormorant text-4xl text-gray-900 mb-2 font-medium italic">L'Ouverture</h3>
                                {/* Description */}
                                <p className="text-sm text-gray-600 font-light leading-relaxed">
                                    Laisser entrer la lumière qui nourrit et révèle la toile.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Invitation Galerie : Titre / Bouton  */}
            <div className="mx-auto px-4 md:px-10 xl:px-20 pb-40">
                <div className="mx-auto border-t border-b border-terra/20 py-16 text-center space-y-8">
                    {/* Titre */}
                    <p className="font-cormorant text-5xl text-gray-400 italic">La suite de l'histoire...</p>
                    {/* Bouton */}
                    <Link
                        href="/gallery"
                        className="group inline-block"
                    >
                        <span className="block text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                            Entrer dans la Collection
                        </span>
                        <span className="block h-px w-0 bg-terra mx-auto mt-4 group-hover:w-full transition-all duration-700 ease-in-out"></span>
                    </Link>
                </div>
            </div>
        </main>
    );
}