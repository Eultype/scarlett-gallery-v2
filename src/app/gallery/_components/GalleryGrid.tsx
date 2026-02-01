"use client";

// Import Next
import Image from "next/image";
import dynamic from "next/dynamic";
// Import React
import { useState } from "react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import des composants UI (Dynamic Import pour Lightbox)
const Lightbox = dynamic(() => import("@/components/ui/Lightbox"), { ssr: false });
// Import des datas
import { Artwork } from "@/types/artwork";
import { galleryPageItems } from "@/data/gallery";

// Liste de catégories
const categories = [
    { id: "all", label: "Tout Voir" },
    { id: "saisons", label: "Saisons" },
    { id: "personnalites", label: "Portraits" },
    { id: "linogravures", label: "Linogravures" },
    { id: "minis", label: "Les Minis" },
];

// Composant GalleryGrid : Grille Masonry avec filtres et lightbox
export default function GalleryGrid() {
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
        <>
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
                    {filteredItems.map((item, index) => {
                        const isPriority = index < 6;
                        return (
                        <motion.div
                            key={item.id}
                            layout
                            initial={isPriority ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
                                        priority={isPriority}
                                    />
                                    
                                    {/* Overlay d'infos */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-[2px]">
                                        <h2 className="font-cormorant text-2xl italic mb-2">{item.title}</h2>
                                        <p className="text-xs uppercase tracking-widest opacity-80">{item.dimensions}</p>
                                        <span className="mt-4 border border-white px-4 py-1 text-[10px] uppercase tracking-widest">Voir</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )})}
                </AnimatePresence>
            </div>

            {/* Message si vide */}
            {filteredItems.length === 0 && (
                <div className="text-center py-20 text-gray-400 italic">
                    Aucune œuvre trouvée dans cette catégorie.
                </div>
            )}

            {/* Lightbox */}
            <Lightbox
                isOpen={!!selectedArtwork}
                onClose={() => setSelectedArtwork(null)}
                imageSrc={selectedArtwork?.image || ""}
                title={selectedArtwork?.title || ""}
                sizes={selectedArtwork?.availableSizes}
                moreImages={selectedArtwork?.moreImages}
            />
        </>
    );
}
