"use client";

// Import Next
import Image from "next/image";
// Import React
import { useEffect, useState } from "react";
// Import Lucide Icons
import { X } from "lucide-react";

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

    // État local pour l'image affichée (commence avec l'image principale)
    const [currentImage, setCurrentImage] = useState(imageSrc);

    // Reset quand on ouvre une nouvelle oeuvre
    useEffect(() => {
        if (imageSrc) setCurrentImage(imageSrc);
    }, [imageSrc, isOpen]);

    // Bloquer le scroll
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [isOpen]);

    if (!isOpen) return null;

    // Liste complète pour les miniatures (Main + Secondaires)
    // On filtre les valeurs vides pour éviter l'erreur "src is empty"
    const allImages = [imageSrc, ...(moreImages || [])].filter(Boolean);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">

            {/* Bouton fermer */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-50"
            >
                <X size={40} />
            </button>

            {/* Contenu */}
            <div
                className="max-w-5xl w-full flex flex-col md:flex-row gap-8 items-center justify-center"
                onClick={(e) => e.stopPropagation()} // Empêche de fermer si on clique sur le contenu
            >

                {/* Image Principale (Grande) */}
                <div className="relative w-full md:w-2/3 h-[60vh] md:h-[80vh]">
                    {currentImage && (
                        <Image
                            src={currentImage}
                            alt={title}
                            fill
                            className="object-contain"
                            quality={100}
                            priority
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
                                    onClick={() => setCurrentImage(src)} // <-- CLIC ACTIF
                                    className={`relative w-20 h-20 flex-shrink-0 border-2 cursor-pointer transition-all ${
                                        currentImage === src
                                            ? "border-terra opacity-100"
                                            : "border-transparent opacity-50 hover:opacity-100 hover:border-white"
                                    }`}
                                >
                                    <Image src={src} alt={`Vue ${idx}`} fill className="object-cover" />
                                </div>
                            ))}

                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
