import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales",
    robots: { index: false, follow: true }, // Pas besoin d'indexer les mentions légales en priorité
};

export default function MentionsLegales() {
    return (
        <main className="pt-40 pb-20 bg-[#FDFBF7] min-h-screen">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                
                {/* En-tête */}
                <header className="mb-16 text-center">
                    <span className="text-terra text-xs font-bold uppercase tracking-[0.3em] block mb-4">Informations</span>
                    <h1 className="font-cormorant text-5xl md:text-6xl text-gray-900 italic">
                        Mentions Légales
                    </h1>
                    <div className="w-20 h-[1px] bg-terra/30 mx-auto mt-8"></div>
                </header>

                {/* Contenu */}
                <div className="space-y-12 text-gray-700 leading-relaxed font-light">
                    
                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Éditeur du site</h2>
                        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <p><strong className="text-terra font-medium">Nom du site :</strong> Scarlett Gallery</p>
                            <p><strong className="text-terra font-medium">Responsable éditorial :</strong> Emma DE NONI</p>
                            <p><strong className="text-terra font-medium">Adresse :</strong> Bruxelles, Belgique</p>
                            <p><strong className="text-terra font-medium">Email :</strong> <a href="mailto:contact@scarlettgallery.com" className="hover:text-terra transition-colors underline decoration-terra/30">contact@scarlettgallery.com</a></p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Hébergement</h2>
                        <p>
                            Le site est hébergé par :<br />
                            <strong className="text-terra font-medium">Vercel Inc.</strong><br />
                            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="hover:text-terra transition-colors underline decoration-terra/30">https://vercel.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Propriété intellectuelle</h2>
                        <p>
                            Tous les contenus présents sur le site Scarlett Gallery, incluant les textes, les photographies des œuvres, les vidéos, les graphismes et les logos, sont la propriété exclusive d&apos;Emma De Noni ou de leurs auteurs respectifs.
                        </p>
                        <p className="mt-4">
                            Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon sanctionnée par le Code de la propriété intellectuelle.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Responsabilité</h2>
                        <p>
                            Scarlett Gallery s’efforce de fournir des informations aussi précises que possible. Toutefois, l’éditeur ne peut être tenu responsable des omissions ou des inexactitudes. L’utilisation des informations contenues sur ce site relève de la seule responsabilité de l’utilisateur.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Données personnelles</h2>
                        <p>
                            Les informations collectées via le formulaire de contact (nom, email) sont utilisées exclusivement pour répondre à vos demandes de renseignements ou de projets. Elles ne sont jamais cédées à des tiers.
                        </p>
                        <p className="mt-4">
                            Pour toute question relative à vos données, vous pouvez nous contacter à : <a href="mailto:contact@scarlettgallery.com" className="text-terra underline decoration-terra/30">contact@scarlettgallery.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Loi applicable</h2>
                        <p>
                            Le site Scarlett Gallery est soumis à la législation belge. En cas de litige, et à défaut d&apos;accord amiable, la compétence est attribuée aux tribunaux compétents de Bruxelles.
                        </p>
                    </section>

                </div>

                {/* Bouton Retour */}
                <div className="mt-20 text-center">
                    <Link 
                        href="/" 
                        className="inline-block px-10 py-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-terra transition-all duration-300 rounded-sm shadow-lg"
                    >
                        Retour à l&apos;accueil
                    </Link>
                </div>

            </div>
        </main>
    );
}
