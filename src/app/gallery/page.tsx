"use client";

// Import Next
import Image from "next/image";
// Import React
import { useState } from "react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import des composants UI
import Lightbox from "@/components/ui/Lightbox";
// Import des datas
import { Artwork } from "@/data/artworks";
import { galleryPageItems } from "@/data/gallery";

// Liste de catégories
const categories = [
    { id: "all", label: "Tout Voir" },
    { id: "saisons", label: "Saisons" },
    { id: "personnalites", label: "Portraits" },
    { id: "linogravures", label: "Linogravures" },
    { id: "minis", label: "Les Minis" },
];

// Page de la galerie
export default function GalleryPage() {
    const [filter, setFilter] = useState("all");
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

    const filteredItems = filter === "all" 
        ? galleryPageItems 
        : galleryPageItems.filter(item => item.category === filter);

    // Helper pour simuler la taille réelle
    const getSizeClass = (category: string) => {
        switch (category) {
            case "minis": return "px-12 py-4";
            case "linogravures": return "px-6 py-2";
            default: return "p-0";
        }
    };

    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7] min-h-screen">
            <div className="mx-auto px-4 md:px-10 xl:px-20">
                {/* Section Hero : Titre et sous-titre */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 space-y-4"
                >
                    {/* Badge */}
                    <span className="text-terra text-xs font-bold uppercase tracking-[0.3em] block pt-10">Collection</span>
                    {/* Titre */}
                    <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        La Galerie
                    </h1>
                    {/* Sous-titre */}
                    <p className="text-gray-500 font-light tracking-wide">
                        Collection complète des œuvres originales & tirages
                    </p>
                </motion.div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-6 py-2 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border ${
                                filter === cat.id
                                    ? "bg-terra border-terra text-white shadow-md"
                                    : "bg-transparent border-gray-200 text-gray-500 hover:border-terra hover:text-terra"
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Masonry Layout */}
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className={`break-inside-avoid mb-8 ${getSizeClass(item.category)}`}
                            >
                                <div 
                                    className="group relative cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 w-full"
                                    onClick={() => setSelectedArtwork(item)}
                                >
                                    <div className="relative overflow-hidden w-full">
                                        {/* Images */}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={800}
                                            height={1000}
                                            className="w-full h-auto object-cover transition-transform duration-700"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        
                                        {/* Overlay d'infos */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-[2px]">
                                            <h3 className="font-cormorant text-2xl italic mb-2">{item.title}</h3>
                                            <p className="text-xs uppercase tracking-widest opacity-80">{item.dimensions}</p>
                                            <span className="mt-4 border border-white px-4 py-1 text-[10px] uppercase tracking-widest">Voir</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Message si vide */}
                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-gray-400 italic">
                        Aucune œuvre trouvée dans cette catégorie.
                    </div>
                )}

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
        </main>
    );
}