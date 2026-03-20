// Import Next
import type { Metadata } from "next";
// Import des composants
import GalleryHeader from "./_components/GalleryHeader";
import GalleryGrid from "./_components/GalleryGrid";

// Metadata de la page Galerie
export const metadata: Metadata = {
    title: "Galerie d'Art en Ligne : Peintures et Linogravures",
    description: "Explorez la galerie complète d&apos;Emma De Noni : portraits aux saisons, linogravures et œuvres originales à l&apos;huile.",
    keywords: ["Galerie d&apos;art Bruxelles", "Tableaux à l&apos;huile", "Linogravures originales", "Collection Scarlett"],
    alternates: {
        canonical: "/gallery",
    },
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
