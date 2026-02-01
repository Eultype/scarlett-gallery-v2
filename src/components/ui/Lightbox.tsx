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
    sizes?: string;
    moreImages?: string[];
}

// Composant LightBox pour la section galerie
export default function Lightbox({ isOpen, onClose, imageSrc, title, sizes, moreImages }: LightboxProps) {

    // État local pour l'image affichée
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">

            {/* Bouton fermer */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
                aria-label="Fermer la galerie"
            >
                <X size={40} />
            </button>

            {/* Contenu */}
            <div
                className="max-w-5xl w-full flex flex-col xl:flex-row gap-8 items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Image Principale (Grande) */}
                <div className="relative w-full md:w-2/3 h-[60vh] xl:h-[80vh]">
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

                {/* Infos & Thumbs */}
                <div className="w-full md:w-1/3 text-white space-y-6">
                    <h3 className="font-autumn text-4xl">{title}</h3>

                    {sizes && (
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Formats disponibles</p>
                            <p className="text-lg font-light">{sizes}</p>
                        </div>
                    )}

                    {/* Miniatures Interactives */}
                    {allImages.length > 1 && (
                        <div className="flex gap-4 mt-4 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>

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