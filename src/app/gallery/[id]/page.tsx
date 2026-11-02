import { notFound } from "next/navigation";
import { galleryPageItems } from "@/data/gallery";
import ArtworkDetailsClient from "./_components/ArtworkDetailsClient";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const artwork = galleryPageItems.find((item) => item.id === resolvedParams.id);
    if (!artwork) return { title: "Œuvre introuvable" };

    const mediumLabel = artwork.category === "linogravures" ? "Linogravure originale" : "Peinture à l'huile";
    const seoDescription = artwork.description
        ? `${artwork.title} (${artwork.dimensions}) par Emma De Noni : ${artwork.description}`
        : `Découvrez ${artwork.title}, ${mediumLabel.toLowerCase()} par Emma De Noni à Bruxelles. ${artwork.dimensions}.`;

    return {
        title: `${artwork.title} — ${mediumLabel} par Emma De Noni`,
        description: seoDescription,
        alternates: {
            canonical: `/gallery/${artwork.id}`,
        },
        openGraph: {
            title: `${artwork.title} — ${mediumLabel} | Scarlett Gallery`,
            description: seoDescription,
            url: `https://www.scarlettgallery.com/gallery/${artwork.id}`,
            images: [
                {
                    url: artwork.image,
                    alt: `${artwork.title} — ${artwork.dimensions} par Emma De Noni`,
                },
            ],
        },
    };
}

import ArtworkJsonLd from "@/components/seo/ArtworkJsonLd";


export function generateStaticParams() {
    return galleryPageItems.map((item) => ({
        id: item.id,
    }));
}

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
