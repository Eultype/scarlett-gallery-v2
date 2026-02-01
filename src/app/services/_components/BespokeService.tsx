"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import Lucide Icons
import { Brush, ArrowRight } from "lucide-react";
// Import des composants UI
import ListItem from "@/components/ui/ListItem";

// Composant BespokeService : Présentation de l'offre sur mesure
export default function BespokeService() {
    return (
        <section className="flex flex-col md:flex-row items-center gap-16">
            {/* Image / Icône */}
            <div className="w-full md:w-1/2 relative aspect-[4/5] shadow-2xl">
                {/* Image */}
                <Image 
                    src="/images/about/Scarlett_peint.jpg" 
                    alt="Commande sur mesure" 
                    fill 
                    className="object-cover"
                />
                {/* Icône */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white flex items-center justify-center shadow-lg">
                    <Brush className="text-terra w-10 h-10" />
                </div>
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
                    <ListItem text="Consultation initiale (visio ou café)" />
                    <ListItem text="Propositions de croquis et palettes" />
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
