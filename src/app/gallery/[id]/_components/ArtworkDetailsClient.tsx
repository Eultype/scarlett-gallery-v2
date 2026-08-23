"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Mail} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT_INFO } from "@/data/contact";
import RevealTitle from "@/components/ui/RevealTitle";
import { Artwork } from "@/types/artwork";
import { useRef, useState } from "react";

interface Props {
    artwork: Artwork;
}

const isVideo = (src: string) => typeof src === 'string' && (src.endsWith('.mp4') || src.endsWith('.webm'));

export default function ArtworkDetailsClient({ artwork }: Props) {
    const normalizedVariants = (artwork.variants && artwork.variants.length > 0)
        ? artwork.variants
        : (artwork.availableSizes ? [{ name: artwork.availableSizes, images: [artwork.image, ...(artwork.moreImages || [])] }] : []);
    const hasVariants = normalizedVariants.length > 0;
    
    const initialImage = hasVariants ? normalizedVariants[0].images[0] : artwork.image;
    const [currentImage, setCurrentImage] = useState(initialImage);
    const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);

    const currentThumbnails = hasVariants 
        ? normalizedVariants[selectedVariantIdx].images 
        : [artwork.image, ...(artwork.moreImages || [])];

    const handleImageSelect = (img: string) => {
        setCurrentImage(img);
        if (typeof window !== 'undefined' && window.innerWidth < 1280) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleVariantSelect = (idx: number) => {
        setSelectedVariantIdx(idx);
        setCurrentImage(normalizedVariants[idx].images[0]);
    };

    // States pour la loupe
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ px: 0, py: 0 });
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        setMousePos({ 
            px: e.clientX - left, 
            py: e.clientY - top 
        });
        if (containerSize.w !== width) {
            setContainerSize({ w: width, h: height });
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] text-gray-900 selection:bg-terra selection:text-white">
            
            {/* Split Screen Layout */}
            <div className="flex flex-col xl:flex-row min-h-screen">
                
                {/* 1. Zone Image (Fixe sur Desktop, edge-to-edge) */}
                <div 
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setShowMagnifier(true)}
                    onMouseLeave={() => setShowMagnifier(false)}
                    className="w-full xl:w-1/2 h-[50vh] md:h-[70vh] xl:h-screen xl:sticky top-0 overflow-hidden relative group cursor-crosshair bg-[#F4F2F1]"
                >
                    <motion.div 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="w-full h-full relative"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currentImage}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="w-full h-full absolute inset-0"
                            >
                                {isVideo(currentImage) ? (
                                    <video 
                                        src={currentImage} 
                                        className="w-full h-full object-contain p-4 md:p-8 xl:p-16"
                                        autoPlay loop muted playsInline preload="metadata"
                                    />
                                ) : (
                                    <Image 
                                        src={currentImage} 
                                        alt={artwork.title}
                                        fill
                                        className="w-full h-full object-contain p-4 md:p-8 xl:p-16"
                                        priority
                                        sizes="(max-width: 1280px) 100vw, 50vw"
                                    />
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Loupe au survol (Desktop uniquement) */}
                    <AnimatePresence>
                        {showMagnifier && containerSize.w > 0 && !isVideo(currentImage) && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.2 }}
                                className="absolute pointer-events-none rounded-full shadow-2xl z-40 border border-white/20 bg-white/5 backdrop-blur-[1px] overflow-hidden hidden xl:block"
                                style={{
                                    width: 280,
                                    height: 280,
                                    left: mousePos.px - 140,
                                    top: mousePos.py - 140,
                                }}
                            >
                                <div 
                                    className="absolute"
                                    style={{
                                        width: containerSize.w,
                                        height: containerSize.h,
                                        left: -(mousePos.px - 140),
                                        top: -(mousePos.py - 140),
                                        transform: `scale(2.5)`,
                                        transformOrigin: `${mousePos.px}px ${mousePos.py}px`
                                    }}
                                >
                                    <Image 
                                        src={currentImage} 
                                        alt={artwork.title}
                                        fill
                                        className="w-full h-full object-contain p-4 md:p-8 xl:p-16"
                                        sizes="(max-width: 1280px) 100vw, 50vw"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Bouton Retour Absolu sur l'image */}
                    <Link 
                        href="/gallery" 
                        className="absolute top-4 left-4 md:top-6 md:left-6 z-50 group inline-flex items-center gap-2 text-gray-900 transition-all uppercase tracking-widest text-[10px] font-bold backdrop-blur-md bg-white/60 px-4 py-2 border border-gray-900 hover:bg-terra hover:border-terra hover:text-white rounded-sm"
                    >
                        <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" /> Retour
                    </Link>

                    {/* Bouton Pinterest Absolu sur l'image */}
                    <a 
                        href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(`https://scarlett-gallery.com/gallery/${artwork.id}`)}&media=${encodeURIComponent(`https://scarlett-gallery.com${currentImage}`)}&description=${encodeURIComponent(`${artwork.title} - ${artwork.dimensions}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 md:top-6 md:right-6 z-50 group inline-flex items-center justify-center w-10 h-10 md:w-11 md:h-11 bg-white/60 hover:bg-[#E60023] text-gray-900 hover:text-white backdrop-blur-md rounded-full transition-colors border border-gray-900 hover:border-[#E60023]"
                        title="Épingler sur Pinterest"
                    >
                        <svg className="w-4 h-4 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.17 0 7.41 2.967 7.41 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.366 18.619 0 12.017 0z"/>
                        </svg>
                    </a>
                </div>

                {/* 2. Zone Informations (Scrollable) */}
                <div className="w-full xl:w-1/2 px-5 py-12 md:px-10 xl:py-32 xl:px-12 flex flex-col justify-center min-h-screen relative z-10">
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-xl xl:max-w-3xl flex flex-col items-center xl:items-start text-center xl:text-left mx-auto xl:mx-0 w-full"
                    >
                        {/* Statut et Série */}
                        <div className="flex items-center justify-center xl:justify-start gap-4 mb-8">
                            {artwork.status === "Vendu" ? (
                                <span className="text-[#8c1c13] border border-[#8c1c13] px-3 py-1 text-[9px] uppercase tracking-widest font-bold flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#8c1c13] rounded-full animate-pulse"></span>
                                    Vendu
                                </span>
                            ) : (
                                <span className="text-[#4e6e58] border border-[#4e6e58] px-3 py-1 text-[9px] uppercase tracking-widest font-bold">
                                    Disponible
                                </span>
                            )}
                            <span className="text-gray-500 text-[10px] uppercase tracking-widest">{artwork.serie}</span>
                        </div>

                        {/* Titre Magnifique */}
                        <RevealTitle 
                            text={artwork.title}
                            className="font-cormorant text-5xl md:text-6xl xl:text-8xl text-gray-900 italic mb-12 xl:-ml-2 text-center xl:text-left"
                        />

                        {/* Description / Philosophie */}
                        <div className="prose prose-lg mb-16 font-light text-gray-600">
                            <p className="leading-relaxed">
                                {artwork.description ? artwork.description : (
                                    artwork.category === "minis" 
                                        ? "Un fragment d'émotion capturé sur une petite surface. Cette miniature est une invitation à observer les détails subtils de la vie quotidienne."
                                        : "Chaque coup de pinceau est une recherche d'équilibre entre l'ombre et la lumière. Cette œuvre originale a été pensée comme une fenêtre ouverte sur l'intimité."
                                )}
                            </p>
                        </div>

                        {/* Informations Techniques */}
                        <div className="grid grid-cols-2 gap-8 border-y border-gray-200 py-8 mb-16">
                            <div>
                                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Médium</h4>
                                <p className="text-gray-900 text-sm font-light">
                                    {artwork.category === "linogravures" ? "Encre sur papier" : "Huile sur toile"}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Dimensions œuvre originale</h4>
                                <p className="text-gray-900 text-sm font-light">
                                    {artwork.dimensions.includes('-') ? artwork.dimensions.split('-').pop()?.trim() : artwork.dimensions}
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">Authenticité</h4>
                                <p className="text-gray-900 text-sm font-light">Signée avec certificat</p>
                            </div>

                            
                            {/* Formats disponibles (Système unifié) */}
                            {hasVariants && (
                                <div className="col-span-2 pt-4 border-t border-gray-100 mt-2 w-full">
                                    <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-4 font-bold text-center xl:text-left">Formats disponibles</h4>
                                    <div className="flex flex-wrap justify-center xl:justify-start gap-2 xl:gap-3 w-full">
                                        {normalizedVariants.map((variant, idx) => {
                                            const isActive = selectedVariantIdx === idx;

                                            return (
                                                <button 
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => handleVariantSelect(idx)}
                                                    className={`px-4 py-2 text-xs tracking-widest uppercase transition-all duration-300 border whitespace-nowrap ${
                                                        isActive 
                                                            ? 'bg-terra border-terra text-white' 
                                                            : 'bg-[#FDFBF7] border-gray-300 text-gray-800 xl:hover:border-gray-400'
                                                    }`}
                                                >
                                                    {variant.name}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Actions (Acheter / Contacter) */}
                        <div className="flex flex-col gap-4 w-full">
                            {artwork.status !== "Vendu" && (
                                <a 
                                    href={CONTACT_INFO.socials.etsy} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group relative w-full overflow-hidden bg-transparent text-gray-900 px-8 py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-xs font-bold transition-all border border-gray-900"
                                >
                                    <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-500">
                                        Acquérir cette œuvre <ArrowRight className="group-hover:translate-x-2 transition-transform" size={16} />
                                    </span>
                                    {/* Hover effect background */}
                                    <div className="absolute inset-0 bg-terra transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
                                </a>
                            )}
                            <Link 
                                href="/contact"
                                className="w-full border border-gray-300 text-gray-900 px-8 py-5 flex items-center justify-center gap-3 uppercase tracking-widest text-xs font-bold hover:bg-[#FDFBF7] transition-colors"
                            >
                                <Mail size={16} /> Demander des informations
                            </Link>
                        </div>
                        
                    </motion.div>
                    
                    {/* Images supplémentaires (en pleine largeur de la colonne) */}
                    {currentThumbnails.length > 0 && (
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="w-full mt-24 pt-12 border-t border-gray-200"
                        >
                            
                            <h4 className="text-[10px] text-gray-500 uppercase tracking-widest mb-8 font-bold text-center xl:text-left">Détails & Vues de l'œuvre</h4>
                            <div className="grid grid-cols-2 gap-4 md:gap-8">
                                {currentThumbnails.map((img, idx) => (
                                    <button 
                                        key={idx} 
                                        type="button"
                                        onClick={() => handleImageSelect(img)}
                                        className={`relative aspect-square w-full overflow-hidden bg-gray-50 group cursor-pointer border-2 transition-all duration-300 block ${currentImage === img ? 'border-terra' : 'border-transparent xl:hover:border-gray-200'}`}
                                    >
                                        {isVideo(img) ? (
                                            <video 
                                                src={img} 
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                                                autoPlay loop muted playsInline preload="metadata"
                                            />
                                        ) : (
                                            <Image 
                                                src={img} 
                                                alt={`${artwork.title} vue ${idx + 1}`} 
                                                fill 
                                                className="object-contain group-hover:scale-105 transition-transform duration-700" 
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                        </motion.div>
                    )}
                </div>

            </div>
        </div>
    );
}

// Just importing ArrowRight inside the component doesn't work if I forgot to import it at the top
// Wait, I forgot ArrowRight at the top! I'll add it in the main import.
