// Import Next
import type { Metadata } from "next";
// Import du contenu client
import AboutContent from "./_components/AboutContent";

// Metadata de la page About
export const metadata: Metadata = {
    title: "L'Artiste & L'Héritage",
    description: "Découvrez le parcours d'Emma De Noni, son héritage artistique et l'intimité de son atelier à Bruxelles.",
    keywords: ["Emma De Noni", "Artiste peintre Bruxelles", "Héritage artistique", "Atelier de peinture"],
    alternates: {
        canonical: "/about",
    },
};

// Page about
export default function AboutPage() {
    return <AboutContent />;
}
