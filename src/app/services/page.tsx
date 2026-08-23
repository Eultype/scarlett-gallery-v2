import type { Metadata } from "next";
import ServicesHeader from "./_components/ServicesHeader";
import BespokeService from "./_components/BespokeService";
import EventService from "./_components/EventService";
import ServicesCTA from "./_components/ServicesCTA";

export const metadata: Metadata = {
    title: "Portraits sur Mesure et Commandes Artistiques",
    description: "Portraits sur mesure, commandes personnalisées et collaborations artistiques. Donnez vie à vos projets avec Scarlett Gallery.",
    keywords: ["Portrait sur mesure", "Peinture personnalisée", "Artiste peintre services", "Collaboration artistique"],
    alternates: {
        canonical: "/services",
    },
};

export default function ServicesPage() {
    return (
        <main className="pt-24 bg-[#FDFBF7]">
            {/* Section header de la page services */}
            <ServicesHeader />
            
            <div className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl space-y-32 mb-20">
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
