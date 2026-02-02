"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import Lucide Icons
import { ArrowRight } from "lucide-react";
// Import des composants UI
import ListItem from "@/components/ui/ListItem";

// Composant BespokeService : Présentation de l'offre sur mesure
export default function BespokeService() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-16">
            {/* Image */}
            <div className="w-full md:w-1/2 relative aspect-[4/5] shadow-2xl rounded-lg border-[4px] border-white">
                {/* Image */}
                <Image 
                    src="/images/about/services-1.webp"
                    alt="Commande sur mesure" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            {/* Titre / texte / liste / bouton */}
            <div className="w-full md:w-1/2 space-y-8">
                {/* Titre */}
                <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Commande Sur Mesure</h2>
                {/* Texte */}
                <p className="text-gray-600 leading-relaxed text-justify">
                    Vous avez une vision, une couleur, une émotion que vous souhaitez figer sur toile ?
                    Je réalise des œuvres personnalisées en dialogue avec votre intérieur et vos envies.
                    Nous définissons ensemble le format, la palette et l'ambiance.
                </p>
                {/* Liste des services */}
                <ul className="space-y-4">
                    <ListItem text="Consultation initiale (Mail, appel, visio ou café)" />
                    <ListItem text="Propositions de croquis et Moodboard" />
                    <ListItem text="Suivi photo de l'avancement" />
                    <ListItem text="Livraison et conseils d'accrochage" />
                </ul>
                {/* Bouton de contact */}
                <div className="pt-4">
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-widest text-xs hover:text-terra transition-colors">
                        <span>Démarrer un projet</span>
                        <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-terra group-hover:w-12 transition-all duration-500"></div>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
