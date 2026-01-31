"use client";

// Import Next
import Link from "next/link";
// Import Lucide Icons
import { Brush, GalleryVerticalEnd, Check, ArrowRight } from "lucide-react";

// Composant ServicesPreviewSection de la page d'accueil
export default function ServicesPreviewSection() {
    return (
        <section id="services" className="py-20 bg-[#FDFBF7]">
            <div className="mx-auto px-8 md:px10 xl:px-20">

                {/* Titre */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        Mes services
                    </h2>
                    <p className="text-gray-500 italic">
                        Des services adaptés à vos besoins artistiques
                    </p>
                    <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
                </div>

                {/* Grille Services */}
                <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 max-w-5xl mx-auto">

                    {/* Service 1 : Œuvres sur mesure */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex-1 text-center border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-terra/10 rounded-full flex items-center justify-center mb-6 text-terra">
                            <Brush size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Œuvres sur mesure</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Commandez une pièce unique créée spécialement pour votre espace, en collaboration étroite avec moi pour capturer votre vision.
                        </p>
                        <ul className="text-left space-y-3 mb-8 text-gray-600 inline-block mx-auto">
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Consultation personnalisée</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Choix des dimensions et techniques</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Épreuves et validation des esquisses</span>
                            </li>
                        </ul>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center font-medium text-gray-900 hover:text-terra transition-colors group"
                            >
                                En savoir plus
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Service 2 : Expositions */}
                    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex-1 text-center border border-gray-100">
                        <div className="w-20 h-20 mx-auto bg-terra/10 rounded-full flex items-center justify-center mb-6 text-terra">
                            <GalleryVerticalEnd size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Expositions</h3>
                        <p className="text-gray-500 mb-6 leading-relaxed">
                            Organisation d&apos;expositions privées ou publiques de mes œuvres, avec possibilité de vernissages et de présence sur demande.
                        </p>
                        <ul className="text-left space-y-3 mb-8 text-gray-600 inline-block mx-auto">
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Location d&apos;œuvres pour événements</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Présence de l&apos;artiste sur demande</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="text-terra shrink-0 mt-1" size={18} />
                                <span>Solutions clé en main</span>
                            </li>
                        </ul>
                        <div>
                            <Link
                                href="/contact"
                                className="inline-flex items-center font-medium text-gray-900 hover:text-terra transition-colors group"
                            >
                                En savoir plus
                                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
