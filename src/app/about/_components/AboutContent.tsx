"use client";

// Import React
import { useRef } from "react";
// Import Framer Motion
import { useScroll } from "framer-motion";
// Import des sections
import HeroSection from "./HeroSection";
import HeritageSection from "./HeritageSection";
import AtelierSection from "./AtelierSection";
import GalleryInvitation from "./GalleryInvitation";

// Composant AboutContent : Conteneur principal gérant le scroll et les sections
export default function AboutContent() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    return (
        <main ref={containerRef} className="pt-24 bg-[#FDFBF7] overflow-x-hidden">
            {/* Section Hero */}
            <HeroSection />
            {/* Section héritage */}
            <HeritageSection scrollYProgress={scrollYProgress} />
            {/* Section atelier */}
            <AtelierSection scrollYProgress={scrollYProgress} />
            {/* Section invitation galerie */}
            <GalleryInvitation />
        </main>
    );
}
