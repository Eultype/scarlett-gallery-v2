"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";
// Import React
import { useState } from "react";
// Import Lucide Icons
import { ArrowRight } from "lucide-react";
// Import des composants UI
import Lightbox from "@/components/ui/Lightbox";
// Import des datas
import { homeGalleryItems, Artwork } from "@/data/artworks";

// Liste des catégories
const tabs = [
    { id: "saisons", label: "Portraits (Saisons)" },
    { id: "personnalites", label: "Portraits (Personnalités)" },
    { id: "linogravures", label: "Linogravures" },
    { id: "minis", label: "Les Minis" },
];

// Composant GalleryPreviewSection de la page d'accueil
export default function GalleryPreviewSection() {
    const [activeTab, setActiveTab] = useState("saisons");
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    // Filtrer les items
    const filteredItems = homeGalleryItems.filter(
        (item) => item.category === activeTab
    ).slice(0, 4);

    return (
        <section id="gallery" className="py-20 bg-[#FDFBF7]">
            <div className="mx-auto px-8 md:px-10 xl:px-20">

                {/* Titre */}
                <div className="text-center mb-12 space-y-4">
                    <h2 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        Gallery of Works
                    </h2>
                    <p className="text-gray-500 italic">
                        Explorez une sélection de mes créations récentes
                    </p>
                    <div className="w-24 h-1 bg-black mx-auto mt-6"></div>
                </div>

                {/* Onglets (Tabs) */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                                activeTab === tab.id
                                    ? "bg-terra border-terra text-white shadow-md"
                                    : "bg-white border-gray-300 text-gray-600 hover:border-terra hover:text-terra"
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grille des œuvres */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 min-h-[400px]">
                    {filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="group cursor-pointer animate-fade-in-up"
                            onClick={() => setSelectedArtwork(item)}
                        >
                            {/* Carte */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">

                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Info */}
                                <div className="p-6 flex-grow flex flex-col justify-between">
                                    <div>
                                        <h3 className="font-cormorant text-xl text-gray-900 mb-1 group-hover:text-terra transition-colors font-bold italic">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mb-3">{item.serie}</p>
                                    </div>
                                    <p className="text-xs text-gray-400 border-t pt-3 mt-auto">
                                        {item.dimensions}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Lien élégant vers la galerie complète */}
                <div className="text-center mt-12 mb-8">
                    <Link
                        href="/gallery"
                        className="group inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-widest text-xs hover:text-terra transition-colors"
                    >
                        <span>Explorer la galerie complète</span>
                        <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-terra group-hover:w-12 transition-all duration-500"></div>
                        <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>

                {/* Boutons d'achat et Call to Action */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 mt-8">
                    <a
                        href="https://www.etsy.com/shop/byscarlettgallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#F45800] hover:border-[#F45800] hover:text-white transition-all duration-300"
                    >
                        Achetez mes oeuvres (Etsy)
                    </a>
                    <a
                        href="https://www.vinted.fr/member/11955008"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#007782] hover:border-[#007782] hover:text-white transition-all duration-300"
                    >
                        Achetez mes oeuvres (Vinted)
                    </a>
                    <Link
                        href="#contact"
                        className="w-full md:w-auto bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-terra transition-all duration-300"
                    >
                        Planifiez une oeuvre personnalisée
                    </Link>
                </div>

            </div>

            {/* Lightbox */}
            <Lightbox
                isOpen={!!selectedArtwork}
                onClose={() => setSelectedArtwork(null)}
                imageSrc={selectedArtwork?.image || ""}
                title={selectedArtwork?.title || ""}
                sizes={selectedArtwork?.availableSizes}
                moreImages={selectedArtwork?.moreImages}
            />

        </section>
    );
}
