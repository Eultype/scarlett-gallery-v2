"use client";

// Import Next
import { useEffect, useState } from "react";
// Import Lucide Icons
import { X } from "lucide-react";
// Import des composants UI
import SafeImage from "./SafeImage";

// Interface
interface LightboxProps {
    isOpen: boolean;
    onClose: () => void;
    imageSrc: string;
    title: string;
    dimensions: string;
    sizes?: string;
    moreImages?: string[];
    status?: "Disponible" | "Vendu";
}

// Composant LightBox pour la section galerie
export default function Lightbox({ isOpen, onClose, imageSrc, title, dimensions, sizes, moreImages, status }: LightboxProps) {

    // État local pour l&apos;image affichée
    const [currentImage, setCurrentImage] = useState(imageSrc);

    // Bloquer le scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    if (!isOpen) return null;

    // Liste complète pour les miniatures (Main + Secondaires)
    const allImages = [imageSrc, ...(moreImages || [])].filter(Boolean);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in text-white">

            {/* Bouton fermer */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50 mb-10"
                aria-label="Fermer la galerie"
            >
                <X size={40} />
            </button>

            {/* Contenu : Retour au layout original 2/3 - 1/3 */}
            <div
                className="max-w-5xl w-full flex flex-col xl:flex-row gap-8 items-center justify-center mt-12 xl:mt-0"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Image Principale (Grande) */}
                <div className="relative w-full md:w-2/3 h-[50vh] xl:h-[80vh]">
                    {currentImage && (
                        <SafeImage
                            key={currentImage}
                            src={currentImage}
                            alt={title}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 1000px"
                            priority
                            loaderSize={48}
                        />
                    )}
                </div>

                <div className="w-full xl:w-auto xl:min-w-[300px] xl:max-w-lg space-y-6 text-center xl:text-left">
                    <div>
                        <h3 className={`font-autumn text-4xl mb-2 ${title !== "Les Mains de Mere Nature" ? "xl:whitespace-nowrap" : "[text-wrap:balance]"}`}>
                            {title.endsWith(" II") ? (
                                <>
                                    {title.replace(" II", "")}
                                    <span className="font-cormorant ml-3 text-4xl font-light tracking-widest">II</span>
                                </>
                            ) : title}
                        </h3>
                        <div className="flex justify-center xl:justify-start">
                            {status === "Vendu" && (
                                <span className="inline-block px-3 py-1 bg-red-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    Vendu
                                </span>
                            )}
                            {status === "Disponible" && (
                                <span className="inline-block px-3 py-1 bg-green-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                                    Disponible
                                </span>
                            )}
                        </div>
                    </div>

                    <div>
                        <p className="text-gray-400 text-xs uppercase tracking-widest mb-1">Dimensions originales</p>
                        <p className="text-base md:text-lg font-light">{dimensions}</p>
                    </div>

                    {sizes && status !== "Vendu" && (
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-widest mb-2">
                                {sizes.includes("|") ? "Formats disponibles" : "Format disponible"}
                            </p>
                            <div className="text-sm md:text-base font-light space-y-1">
                                {sizes.includes("|") ? (
                                    sizes.split("|").map((size, index) => (
                                        <p key={index} className="flex items-center justify-center xl:justify-start gap-2">
                                            <span className="text-terra/60">—</span> {size.trim()}
                                        </p>
                                    ))
                                ) : (
                                    <p className="flex items-center justify-center xl:justify-start gap-2">
                                        <span className="text-terra/60">—</span> {sizes}
                                    </p>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Miniatures Interactives */}
                    {allImages.length > 1 && (
                        <div className="flex justify-center xl:justify-start gap-4 mt-4 overflow-x-auto pb-2 scrollbar-hide">
                            {allImages.map((src, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setCurrentImage(src)}
                                    className={`relative w-20 h-20 flex-shrink-0 border-2 cursor-pointer transition-all bg-white/5 ${
                                        currentImage === src
                                            ? "border-terra opacity-100"
                                            : "border-transparent opacity-50 hover:opacity-100 hover:border-white"
                                    }`}
                                >
                                    <SafeImage 
                                        src={src} 
                                        alt={`Vue ${idx}`} 
                                        fill 
                                        className="object-cover" 
                                        sizes="80px" 
                                        loaderSize={16}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
