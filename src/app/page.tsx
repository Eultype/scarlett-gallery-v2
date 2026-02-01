// Import Next
import type { Metadata } from "next";
// Import des sections
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

export const metadata: Metadata = {
    title: "Scarlett Gallery | Artiste Peintre à Bruxelles",
    description: "Bienvenue sur le portfolio officiel d'Emma De Noni. Découvrez une collection unique de peintures à l'huile, linogravures et portraits vibrants à Bruxelles.",
    keywords: ["Emma De Noni", "Scarlett Gallery", "Artiste peintre Bruxelles", "Peinture à l'huile Belgique", "Portraits sur mesure", "Linogravure originale", "Art contemporain Bruxelles", "Achat tableau original"],
};

// Page d'accueil
export default function Home() {
    return (
        <main>
            {/* Section du Hero */}
            <HeroSection />
            {/* Section À propos */}
            <AboutSection />
            {/* Section de la galerie */}
            <GalleryPreviewSection />
            {/* Section des services */}
            <ServicesPreviewSection />
            {/* Section des testimoniales */}
            <TestimonialsSection />
            {/* Section de contact */}
            <ContactSection />
        </main>
    );
}