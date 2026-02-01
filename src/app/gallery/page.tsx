// Import Next
import type { Metadata } from "next";
// Import des composants
import GalleryHeader from "./_components/GalleryHeader";
import GalleryGrid from "./_components/GalleryGrid";

// Metadata de la page Galerie
export const metadata: Metadata = {
    title: "La Collection",
    description: "Explorez la galerie complète d'Emma De Noni : portraits aux saisons, linogravures et œuvres originales à l'huile.",
    keywords: ["Galerie d'art Bruxelles", "Tableaux à l'huile", "Linogravures originales", "Collection Scarlett"],
};

// Page galerie
export default function GalleryPage() {
    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7] min-h-screen">
            <div className="mx-auto px-4 md:px-10 xl:px-20">
                {/* Section Header de la galerie */}
                <GalleryHeader />
                {/* Section grille de la galerie */}
                <GalleryGrid />
            </div>
        </main>
    );
}
