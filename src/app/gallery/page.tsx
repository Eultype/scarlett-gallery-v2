// Import Next
import type { Metadata } from "next";
// Import des composants
import GalleryHeader from "./_components/GalleryHeader";
import GalleryGrid from "./_components/GalleryGrid";

// Metadata de la page Galerie
export const metadata: Metadata = {
    title: "Galerie d'Art en Ligne : Peintures à l'Huile et Linogravures",
    description: "Explorez la galerie complète d'Emma De Noni à Bruxelles : série Saisons, portraits, linogravures artisanales et œuvres originales à l'huile.",
    keywords: ["Galerie d'art Bruxelles", "Tableaux à l'huile originaux", "Linogravures originales", "Collection Scarlett Gallery", "Emma De Noni œuvres"],
    alternates: {
        canonical: "/gallery",
    },
};

// Page galerie
export default function GalleryPage() {
    return (
        <main className="pt-24 pb-32 bg-[#FDFBF7]">
            <div className="mx-auto px-4 md:px-10 xl:px-20">
                {/* Section Header de la galerie */}
                <GalleryHeader />
                {/* Section grille de la galerie */}
                <GalleryGrid />
            </div>
        </main>
    );
}
