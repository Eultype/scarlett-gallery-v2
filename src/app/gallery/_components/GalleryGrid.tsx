"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Artwork } from "@/types/artwork";
import { galleryPageItems } from "@/data/gallery";

const categories = [
    { id: "all", label: "Tout Voir" },
    { id: "saisons", label: "Saisons" },
    { id: "personnalites", label: "Personnalités" },
    { id: "religieux", label: "Religieux" },
    { id: "linogravures", label: "Linogravures" },
    { id: "minis", label: "Les Minis" },
];

export default function GalleryGrid() {
    const [filter, setFilter] = useState("all");

    const filteredItems = filter === "all" 
        ? galleryPageItems 
        : galleryPageItems.filter(item => item.category === filter);

    const getSizeClass = (category: string) => {
        switch (category) {
            case "minis": return "px-12 py-4";
            case "linogravures": return "px-6 py-2";
            default: return "p-0";
        }
    };

    return (
        <>
            {/* Filtres Éditoriaux */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 px-4">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id)}
                        className="group flex flex-col items-center outline-none"
                    >
                        <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${
                            filter === cat.id
                                ? "text-terra"
                                : "text-gray-400 group-hover:text-gray-900"
                        }`}>
                            {cat.label}
                        </span>
                        <span className={`h-[1px] mt-2 transition-all duration-700 ease-in-out ${
                            filter === cat.id
                                ? "w-8 bg-terra"
                                : "w-0 bg-gray-300 group-hover:w-4"
                        }`}></span>
                    </button>
                ))}
            </div>

            {/* Masonry Layout - FIX */}
            <div className={`gap-8 ${filteredItems.length <= 4 ? "flex flex-wrap justify-center" : "columns-1 md:columns-2 lg:columns-3 xl:columns-4"}`}>
                <AnimatePresence mode="popLayout">
                    {filteredItems.map((item, index) => {
                        const isPriority = index < 2;
                        return (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.4 }}
                            className={`${filteredItems.length <= 4 ? "w-full sm:w-[calc(50%-2rem)] md:w-[calc(33%-2rem)] xl:w-[calc(25%-2rem)]" : "break-inside-avoid inline-block w-full mb-8"} ${getSizeClass(item.category)}`}
                        >
                            <Link 
                                href={`/gallery/${item.id}`}
                                className="group relative cursor-pointer transition-all duration-500 w-full block"
                            >
                                    <div 
                                        className={`relative overflow-hidden w-full transform-gpu ${item.layout === "wide" ? "aspect-[16/9] bg-white" : ""}`}
                                    >
                                        {/* Images */}
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={item.layout === "wide" ? 1200 : 800}
                                            height={item.layout === "wide" ? 675 : 1000}
                                            className={`w-full h-auto transform-gpu will-change-transform ${item.layout === "wide" ? "object-contain p-4" : "object-cover"} transition-transform duration-700 group-hover:scale-110`}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={isPriority}
                                            loading={!isPriority ? "eager" : undefined}
                                        />
                                        
                                        {/* Overlay d'infos avec style éditorial validé */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center backdrop-blur-[2px]">
                                            <h2 className="font-cormorant text-3xl italic mb-3">{item.title}</h2>
                                            {item.status === "Vendu" && (
                                                <span className="mb-4 px-4 py-1.5 bg-terra text-white text-[9px] font-bold uppercase tracking-[0.3em] shadow-lg flex items-center justify-center gap-2">
                                                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                                    Vendu
                                                </span>
                                            )}
                                            <p className="text-xs uppercase tracking-widest opacity-80 mb-8">{item.dimensions}</p>
                                            <span className="border border-white px-8 py-3 text-[10px] font-bold uppercase tracking-[0.3em] text-white hover:bg-terra hover:border-terra transition-all duration-500">
                                                Voir l'œuvre
                                            </span>
                                        </div>
                                    </div>
                            </Link>
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
        </>
    );
}
