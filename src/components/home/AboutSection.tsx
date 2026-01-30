"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";

// Composant AboutSection de la page d'accueil
export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-zinc-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image de l'artiste */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative w-full max-w-md mx-auto aspect-[4/5] shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
                            {/* Image noir et blanc */}
                            <Image
                                src="/images/about/Scarlett_conv(noirblanc).jpg"
                                alt="Portrait Emma N&B"
                                fill
                                className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Image en couleurs */}
                            <Image
                                src="/images/about/Scarlett_conv2.jpeg"
                                alt="Portrait Emma Couleur"
                                fill
                                className="object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100 absolute top-0 left-0"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    {/* Titres / Description / Bouton */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        {/* Titre */}
                        <h2 className="font-autumn text-5xl md:text-6xl text-gray-900">
                            About Me
                        </h2>
                        {/* Sous-titre */}
                        <p className="text-xl text-terra italic font-medium">
                            La naissance de ma passion
                        </p>
                        {/* Description */}
                        <div className="text-gray-600 leading-relaxed space-y-4 text-justify lg:text-left">
                            <p>
                                Je m’appelle Emma, originaire de Tourcoing et aujourd’hui installée à Bruxelles.
                                Ma passion pour la peinture est née très tôt, au contact de ma tante Line,
                                qui m’a transmis non seulement les techniques, mais aussi l’amour du geste,
                                de la couleur et de la matière.
                            </p>
                            <p>
                                Ce qu’elle m’a appris dépasse la simple maîtrise des pinceaux : elle m’a ouvert les yeux
                                sur la puissance des émotions qu’une toile peut véhiculer. Chaque œuvre que je réalise
                                est le reflet d’une histoire, d’une sensation ou d’un instant que j’ai voulu immortaliser.
                            </p>
                            <p className="hidden md:block">
                                Mon univers artistique s’inspire de mes rencontres, de mes voyages et de la richesse culturelle
                                qui m’entoure. J’aime explorer les nuances, expérimenter de nouvelles techniques et laisser une
                                place au hasard, pour que chaque tableau soit unique et authentique.
                            </p>
                            <p>
                                Aujourd’hui, je continue de peindre avec la même passion qu’à mes débuts, animée par le
                                désir de partager mon regard sur le monde et d’éveiller l’imaginaire de celles et ceux
                                qui découvrent mon travail.
                            </p>
                        </div>
                        {/* Bouton en savoir plus */}
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-terra hover:text-white hover:border-terra transition-all duration-300"
                            >
                                En savoir plus
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
