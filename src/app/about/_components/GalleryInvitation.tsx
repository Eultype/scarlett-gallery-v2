"use client";

// Import Next
import Link from "next/link";

// Composant GalleryInvitation de la page about
export default function GalleryInvitation() {
    return (
        <div className="mx-auto px-4 md:px-10 xl:px-20 pb-40">
            <div className="mx-auto border-t border-b border-terra/20 py-16 text-center space-y-8">
                {/* Titre */}
                <p className="font-cormorant text-5xl text-gray-400 italic">La suite de l'histoire...</p>
                {/* Bouton */}
                <Link
                    href="/gallery"
                    className="group inline-block"
                >
                    <span className="block text-xl md:text-2xl font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                        Entrer dans la Collection
                    </span>
                    <span className="block h-px w-0 bg-terra mx-auto mt-4 group-hover:w-full transition-all duration-700 ease-in-out"></span>
                </Link>
            </div>
        </div>
    );
}
