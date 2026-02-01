import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "La Collection | Scarlett Gallery",
    description: "Explorez la galerie complète d'Emma De Noni : portraits aux saisons, linogravures et œuvres originales à l'huile.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
