"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-[70vh] px-4 text-center space-y-8 bg-[#FDFBF7]">
        
        {/* Titre Artistique */}
        <h2 className="font-cormorant text-5xl md:text-6xl text-gray-900 italic">
            Une petite ombre au tableau...
        </h2>

        {/* Message */}
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
            Il semblerait qu&apos;une erreur inattendue se soit glissée dans la galerie.
            Nos pinceaux sont déjà à l&apos;œuvre pour corriger cela.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4">
            <button
                onClick={reset}
                className="px-8 py-3 bg-terra text-white font-bold uppercase tracking-widest text-xs hover:bg-gray-900 transition-colors"
            >
                Réessayer
            </button>
            <Link
                href="/"
                className="px-8 py-3 border border-gray-900 text-gray-900 font-bold uppercase tracking-widest text-xs hover:bg-gray-900 hover:text-white transition-colors"
            >
                Retour à l&apos;accueil
            </Link>
        </div>
    </div>
  );
}
