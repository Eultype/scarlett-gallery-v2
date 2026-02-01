import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité",
    robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialite() {
    const lastUpdate = "1 février 2026"; // Date du jour mise à jour

    return (
        <main className="pt-40 pb-20 bg-[#FDFBF7] min-h-screen">
            <div className="max-w-3xl mx-auto px-6 md:px-10">
                
                {/* En-tête */}
                <header className="mb-16 text-center">
                    <span className="text-terra text-xs font-bold uppercase tracking-[0.3em] block mb-4">Confidentialité</span>
                    <h1 className="font-cormorant text-5xl md:text-6xl text-gray-900 italic">
                        Politique de Confidentialité
                    </h1>
                    <p className="mt-6 text-gray-400 text-sm italic">Dernière mise à jour : {lastUpdate}</p>
                    <div className="w-20 h-[1px] bg-terra/30 mx-auto mt-8"></div>
                </header>

                {/* Contenu */}
                <div className="space-y-12 text-gray-700 leading-relaxed font-light">
                    
                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Introduction</h2>
                        <p>
                            La protection de vos données personnelles est une priorité pour <strong className="text-terra font-medium">Scarlett Gallery</strong>. 
                            Cette politique détaille la manière dont nous traitons les informations collectées lors de votre navigation sur notre site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Responsable du traitement</h2>
                        <p>
                            Le site est édité par Emma DE NONI, responsable du traitement des données personnelles.<br />
                            Pour toute question, vous pouvez nous contacter à : <a href="mailto:contact@scarlettgallery.com" className="text-terra underline decoration-terra/30">contact@scarlettgallery.com</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Données collectées</h2>
                        <p>Nous collectons uniquement les informations que vous nous fournissez volontairement via notre formulaire de contact :</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4">
                            <li>Prénom et Nom</li>
                            <li>Adresse email</li>
                            <li>Numéro de téléphone (optionnel)</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Finalité et Base légale</h2>
                        <p>
                            Ces données sont utilisées exclusivement pour répondre à vos demandes de renseignements, de commandes sur mesure ou de collaborations. 
                            Le traitement repose sur votre <strong className="text-terra font-medium">consentement explicite</strong> donné lors de l&apos;envoi du formulaire.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Conservation et Partage</h2>
                        <p>
                            Vos données sont conservées pour une durée maximale de <strong className="text-terra font-medium">3 ans</strong> après notre dernier contact. 
                            <strong className="text-gray-900 font-medium"> Aucune donnée n&apos;est vendue ou partagée avec des tiers.</strong>
                        </p>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Vos Droits (RGPD)</h2>
                        <p>Conformément au RGPD, vous disposez des droits suivants :</p>
                        <ul className="list-disc list-inside mt-4 space-y-2 ml-4 text-sm">
                            <li>Accès, rectification ou suppression de vos données.</li>
                            <li>Limitation ou opposition au traitement.</li>
                            <li>Retrait de votre consentement à tout moment.</li>
                            <li>Droit de réclamation auprès de l&apos;APD (Belgique).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-cormorant text-3xl text-gray-900 mb-4 italic">Cookies</h2>
                        <p>
                            Notre site n&apos;utilise actuellement aucun cookie de pistage ou publicitaire. 
                            Nous utilisons uniquement des technologies essentielles au bon fonctionnement technique de la navigation.
                        </p>
                    </section>

                </div>

                {/* Bouton Retour */}
                <div className="mt-20 flex flex-col items-center gap-6">
                    <Link 
                        href="/" 
                        className="inline-block px-10 py-4 bg-gray-900 text-white text-xs font-bold uppercase tracking-widest hover:bg-terra transition-all duration-300 rounded-sm shadow-lg"
                    >
                        Retour à l&apos;accueil
                    </Link>
                    <Link href="/mentions" className="text-gray-400 text-xs hover:text-terra transition-colors underline decoration-gray-200">
                        Consulter les Mentions Légales
                    </Link>
                </div>

            </div>
        </main>
    );
}
