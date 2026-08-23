import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Exposition Virtuelle 3D | Scarlett Gallery",
    description: "Visitez virtuellement la Scarlett Gallery. Promenez-vous dans une exposition 3D immersive et découvrez nos 5 collections d'art de manière interactive.",
    openGraph: {
        title: "Exposition Virtuelle 3D | Scarlett Gallery",
        description: "Visitez virtuellement la Scarlett Gallery. Promenez-vous dans une exposition 3D immersive et découvrez nos 5 collections d'art de manière interactive.",
    }
};

export default function ExpositionLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
