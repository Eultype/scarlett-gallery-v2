import { notFound } from "next/navigation";
import { galleryPageItems } from "@/data/gallery";
import ArtworkDetailsClient from "./_components/ArtworkDetailsClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const artwork = galleryPageItems.find((item) => item.id === resolvedParams.id);
    if (!artwork) return { title: "Œuvre introuvable" };
    return {
        title: `${artwork.title} | Scarlett Gallery`,
        description: `Découvrez ${artwork.title}, une peinture originale par Emma De Noni. ${artwork.dimensions}.`,
        openGraph: {
            images: [artwork.image],
        }
    };
}

import ArtworkJsonLd from "@/components/seo/ArtworkJsonLd";

export default async function ArtworkPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const artwork = galleryPageItems.find((item) => item.id === resolvedParams.id);

    if (!artwork) {
        notFound();
    }

    return (
        <>
            <ArtworkJsonLd artwork={artwork} />
            <ArtworkDetailsClient artwork={artwork} />
        </>
    );
}
