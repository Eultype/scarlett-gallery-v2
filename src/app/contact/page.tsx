// Import Next
import type { Metadata } from "next";
// Import des composants
import ContactHeader from "./_components/ContactHeader";
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "@/components/ui/ContactForm";
import FaqSection from "./_components/FaqSection";
import { FAQ_ITEMS } from "@/data/faq";

// Metadata de la page Contact
export const metadata: Metadata = {
    title: "Contact & Commandes — Atelier à Bruxelles",
    description: "Une question, un achat d'œuvre, une commande de portrait sur mesure ou un projet d'exposition ? Contactez l'artiste peintre Emma De Noni à Bruxelles.",
    keywords: ["Contact artiste peintre Bruxelles", "Achat tableau Bruxelles", "Commande peinture sur mesure Belgique", "Emma De Noni contact"],
    alternates: {
        canonical: "/contact",
    },
};

// Page contact
export default function ContactPage() {
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((item) => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer,
            },
        })),
    };

    return (
        <main className="pt-24 bg-[#FDFBF7]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
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