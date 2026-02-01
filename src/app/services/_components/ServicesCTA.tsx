"use client";

// Import Next
import Link from "next/link";

// Composant ServicesCTA : Appel à l'action final
export default function ServicesCTA() {
    return (
        <section className="mt-32 py-20 bg-[#FDFBF7]">
            <div className="container mx-auto px-4 text-center space-y-8">
                {/* Titre */}
                <h2 className="font-cormorant text-5xl text-gray-900 italic">Un projet en tête ?</h2>
                {/* Texte */}
                <p className="text-gray-500 max-w-xl mx-auto">
                    Chaque collaboration commence par une discussion simple. N'hésitez pas à m'écrire,
                    même si votre idée est encore floue.
                </p>
                {/* Bouton prendre rendez-vous */}
                <Link 
                    href="/contact"
                    className="inline-block bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-terra transition-colors shadow-lg"
                >
                    Prendre Rendez-vous
                </Link>
            </div>
        </section>
    );
}
