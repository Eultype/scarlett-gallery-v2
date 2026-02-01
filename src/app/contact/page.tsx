// Import Next
import type { Metadata } from "next";
// Import des composants
import ContactHeader from "./_components/ContactHeader";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "@/components/ui/ContactForm";
import FaqSection from "./_components/FaqSection";

// Metadata de la page Contact
export const metadata: Metadata = {
    title: "Contact",
    description: "Une question, une commande ou un projet de collaboration ? Contactez Emma De Noni directement via ce formulaire.",
    keywords: ["Contact artiste peintre", "Achat tableau Bruxelles", "Commande peinture sur mesure", "Emma De Noni contact"],
};

// Page contact
export default function ContactPage() {
    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7] min-h-screen">
            {/* Header */}
            <ContactHeader />
            {/* Section contact : Coordonnées / Formulaire */}
            <div className="mx-auto px-8 md:px-10 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center gap-16 lg:gap-24 max-w-7xl mx-auto">
                    {/* Colonne de gauche : Infos */}
                    <ContactInfo />
                    {/* Colonne de droite : Formulaire */}
                    <div className="w-full xl:w-7/12">
                        <ContactForm />
                    </div>
                </div>
            </div>
            {/* FAQ */}
            <FaqSection />
        </main>
    );
}