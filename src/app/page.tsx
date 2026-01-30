import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import GalleryPreviewSection from "@/components/home/GalleryPreviewSection";

export default function Home() {
  return (
      <main>
        {/* Section Hero*/}
        <HeroSection />
        {/* Section À propos */}
        <AboutSection />
        {/* Section Galerie */}
        <GalleryPreviewSection />

      </main>
  );
}
