"use client";

// Import Next
import Image from "next/image";
// Import React
import { useState, useEffect } from "react";
// Import Lucide Icons
import { ArrowDown } from "lucide-react";

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % backgroundImages.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const scrollToAbout = () => {
        const aboutSection = document.getElementById("about");

        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Images de fond */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
                            index === currentImageIndex
                                ? "opacity-100"
                                : "opacity-0"
                        }`}
                    >
                        <Image
                            src={src}
                            alt={`Scarlett Gallery Background ${index + 1}`}
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
                {/* Titre */}
                <h1 className="font-autumn text-6xl md:text-8xl lg:text-9xl mb-4 drop-shadow-lg">
                    Scarlett Gallery
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
