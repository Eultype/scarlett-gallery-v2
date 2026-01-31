import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";
import ServicesPreviewSection from "@/components/home/ServicesPreviewSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";

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
