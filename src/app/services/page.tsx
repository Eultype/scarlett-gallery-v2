// Import Next
import type { Metadata } from "next";
// Import des composants
import ServicesHeader from "./_components/ServicesHeader";
import BespokeService from "./_components/BespokeService";
import EventService from "./_components/EventService";
import ServicesCTA from "./_components/ServicesCTA";

// Metadata de la page services
export const metadata: Metadata = {
    title: "Services & Commandes",
    description: "Portraits sur mesure, commandes personnalisées et collaborations artistiques. Donnez vie à vos projets avec Scarlett Gallery.",
    keywords: ["Portrait sur mesure", "Peinture personnalisée", "Artiste peintre services", "Collaboration artistique"],
    alternates: {
        canonical: "/services",
    },
};

// Page services
export default function ServicesPage() {
    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7]">
            {/* Section header de la page services */}
            <ServicesHeader />
            <div className="container mx-auto px-4 space-y-32">
                {/* Section de la prestation 'Commande sur mesure' */}
                <BespokeService />
                {/* Section de la prestation 'Exposition artistique' */}
                <EventService />
            </div>
            {/* Section CTA de la page services */}
            <ServicesCTA />
        </main>
    );
}
