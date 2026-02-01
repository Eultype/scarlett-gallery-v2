"use client";

// Import React
import React from "react";
// Import des composants UI
import FaqItem from "@/components/ui/FaqItem";

// Composant FaqSection : Liste des questions fréquentes
export default function FaqSection() {
    return (
        <section className="mx-auto px-8 md:px-10 xl:px-20 mt-32">
            <div className="text-center mb-12">
                <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Questions Fréquentes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FaqItem 
                    question="Livrez-vous à l'international ?" 
                    answer="Oui, je livre mes œuvres partout dans le monde. Les frais de port sont calculés en fonction de la destination et du format de l'œuvre." 
                />
                <FaqItem 
                    question="Acceptez-vous les paiements en plusieurs fois ?" 
                    answer="Pour les grandes toiles ou les commandes sur mesure, un échelonnement du paiement est tout à fait possible. Discutons-en." 
                />
                <FaqItem 
                    question="Les œuvres sont-elles encadrées ?" 
                    answer="Certaines œuvres (notamment les Minis) sont vendues avec leur cadre. Pour les grands formats, cela dépend. C'est précisé sur chaque fiche œuvre." 
                />
                <FaqItem 
                    question="Quel est le délai pour une commande ?" 
                    answer="Il faut compter entre 3 et 6 semaines selon la complexité et le temps de séchage de l'huile, qui est incompressible." 
                />
            </div>
        </section>
    );
}