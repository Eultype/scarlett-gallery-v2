"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";

// Composant AboutSection de la page d'accueil
export default function AboutSection() {
    return (
        <section id="about" className="py-20 bg-[#FDFBF7] overflow-hidden">
            <div className="mx-auto px-8 md:px-10 xl:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Image de l'artiste */}
                    <div className="w-full md:w-5/12 lg:w-5/12 relative group">
                        <div className="relative aspect-[4/5] transform transition-transform duration-500 xl:hover:scale-[1.02]">
                            {/* Image noir et blanc (Uniquement Desktop XL) */}
                            <div className="hidden xl:block">
                                <Image
                                    src="/images/about/Scarlett_conv(noirblanc).webp"
                                    alt="Emma De Noni - Artiste peintre à Bruxelles (Portrait Noir & Blanc)"
                                    fill
                                    className="object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0 rounded-lg overflow-hidden shadow-2xl border-[4px] border-white"
                                    sizes="50vw"
                                />
                            </div>
                            
                            {/* Image en couleurs (Tout le temps sur mobile/tablette, survol sur desktop xl) */}
                            <Image
                                src="/images/about/Scarlett_conv2.webp"
                                alt="Emma De Noni - Peintre portraitiste dans son atelier"
                                fill
                                className={`object-cover transition-opacity duration-700 ease-in-out xl:opacity-0 xl:group-hover:opacity-100 rounded-lg overflow-hidden shadow-2xl border-[4px] border-white`}
                                sizes="(max-width: 1280px) 100vw, 50vw"
                            />
                        </div>
                    </div>
                    {/* Titres / Description / Bouton */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        {/* Titre */}
                        <h2 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                            L'Artiste
                        </h2>
                        {/* Sous-titre */}
                        <p className="text-xl text-terra italic font-medium">
                            Emma De Noni, Peintre à Bruxelles
                        </p>
                        {/* Description */}
                        <div className="text-gray-600 leading-relaxed space-y-4 text-justify lg:text-left">
                            <p>
                                Je m’appelle Emma, artiste peintre originaire de Tourcoing et aujourd’hui installée à <strong>Bruxelles</strong>.
                                Ma passion pour la <strong>peinture à l'huile</strong> est née très tôt, au contact de ma tante,
                                qui m’a transmis non seulement les techniques classiques, mais aussi l’amour du geste et de la matière.
                            </p>
                            <p>
                                Ce qu’elle m’a appris dépasse la simple maîtrise technique : elle m’a ouvert les yeux
                                sur la puissance des émotions qu’une toile peut véhiculer. Chaque <strong>portrait</strong> ou paysage que je réalise
                                est le reflet d’une histoire unique, d’une lumière ou d’un instant suspendu.
                            </p>
                            <p className="hidden md:block">
                                Mon univers artistique s’inspire de mes rencontres et de la richesse culturelle bruxelloise.
                                J’aime explorer les nuances, expérimenter le clair-obscur et laisser une
                                place à l'intuition pour créer des <strong>œuvres authentiques</strong> et vibrantes.
                            </p>
                            <p>
                                Aujourd’hui, je continue de peindre avec la même ferveur, animée par le
                                désir de partager mon regard et de réaliser des <strong>commandes personnalisées</strong> qui
                                toucheront le cœur de ceux qui les reçoivent.
                            </p>
                        </div>
                        {/* Bouton en savoir plus */}
                        <div className="pt-4">
                            <Link
                                href="/about"
                                className="inline-block border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-terra hover:text-white hover:border-terra transition-all duration-300"
                            >
                                Découvrir mon parcours
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
