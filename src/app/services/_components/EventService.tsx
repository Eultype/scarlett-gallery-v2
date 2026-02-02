"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import Lucide Icons
import { ArrowRight } from "lucide-react";
// Import des composants UI
import ListItem from "@/components/ui/ListItem";

// Composant EventService : Présentation de l'offre expositions et événements
export default function EventService() {
    return (
        <section className="flex flex-col md:flex-row-reverse items-center gap-16">
            {/* Image de l'exposition */}
            <div className="w-full md:w-1/2 relative aspect-[4/5] shadow-2xl rounded-lg border-[4px] border-white">
                <Image 
                    src="/images/gallery/linogravures/lino_4saisons_mur.webp"
                    alt="Mise en situation exposition" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                />
            </div>
            {/* Titre / texte / liste / bouton */}
            <div className="w-full md:w-1/2 space-y-8 text-right md:text-left">
                {/* Titre */}
                <div className="md:text-right">
                    <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Expositions & Event</h2>
                </div>
                {/* Texte */}
                <p className="text-gray-600 leading-relaxed text-justify md:text-right">
                    Je suis disponible pour participer à des expositions temporaires. Je propose également mes œuvres
                    à la location pour des événements d'entreprise, des shootings photo ou du Home Staging.
                    Apportez une touche d'âme et d'élégance à vos espaces professionnels.
                </p>
                {/* Liste des services */}
                <ul className="space-y-4 flex flex-col items-end">
                    <ListItem text="Location courte ou longue durée" align="right" />
                    <ListItem text="Vernissages" align="right" />
                    <ListItem text="Marché de créateur" align="right" />
                </ul>
                {/* Bouton de contact */}
                <div className="pt-4 flex justify-end">
                    <Link href="/contact" className="group inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-widest text-xs hover:text-terra transition-colors">
                        <span>Me contacter</span>
                        <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-terra group-hover:w-12 transition-all duration-500"></div>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
