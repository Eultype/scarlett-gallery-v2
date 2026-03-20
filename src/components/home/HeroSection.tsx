"use client";

// Import Next
import Image from "next/image";
// Import React
import { useState, useEffect } from "react";
// Import Lucide Icons
import { ArrowDown } from "lucide-react";
// Import Lenis Hook
import { useLenis } from "@studio-freight/react-lenis";

// Images de fond
const backgroundImages = [
    "/images/hero/eteHD.webp",
    "/images/hero/automneHD.webp",
    "/images/hero/hiverHD.webp",
    "/images/hero/printempsHD.webp",
];

// Composant HeroSection de la page d'accueil
export default function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lenis = useLenis();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        lenis?.scrollTo("#about");
    };

    return (
        <section 
            className="relative h-screen w-full overflow-hidden bg-[#FDFBF7] bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero/eteHD.webp')" }}
        >
            {/* Images de fond */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0"
                        } ${
                            // La transition ne s'applique que si ce n&apos;est PAS la première image au chargement
                            index === 0 && currentImageIndex === 0 
                                ? "" 
                                : "transition-opacity duration-[2500ms] ease-in-out"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Tableau à l&apos;huile original - Saison ${index + 1} - Scarlett Gallery, Artiste Peintre Bruxelles`}
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-black/20" />
                    </div>
                ))}
            </div>
            {/* Titre et indicateur de scroll (bouton) */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                {/* Titre SEO Optimisé */}
                <h1 className="flex flex-col items-center drop-shadow-lg mb-4">
                    <span className="font-autumn text-6xl md:text-8xl lg:text-9xl">Scarlett Gallery</span>
                    <span className="text-lg md:text-xl lg:text-2xl font-montserrat font-light mt-4 tracking-[0.2em] uppercase text-white/90">
                        Artiste Peintre à Bruxelles
                    </span>
                </h1>
                {/* Indicateur de scroll (bouton) */}
                <button
                    onClick={scrollToAbout}
                    className="absolute bottom-10 animate-bounce cursor-pointer hover:text-terra transition-colors"
                    aria-label="Découvrir"
                >
                    <ArrowDown size={48} />
                </button>
            </div>
        </section>
    );
}
