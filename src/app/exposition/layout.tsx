import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exposition Virtuelle 3D",
    description: "Visitez virtuellement la Scarlett Gallery. Promenez-vous dans une exposition 3D immersive et découvrez les 5 collections d'art d'Emma De Noni de manière interactive.",
    alternates: {
        canonical: "/exposition",
    },
    openGraph: {
        title: "Exposition Virtuelle 3D | Scarlett Gallery",
        description: "Visitez virtuellement la Scarlett Gallery. Promenez-vous dans une exposition 3D immersive et découvrez nos 5 collections d'art de manière interactive.",
        url: "https://www.scarlettgallery.com/exposition",
    }
};

export default function ExpositionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
