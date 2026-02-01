"use client";

// Import Next
import Image from "next/image";
import Link from "next/link";
// Import React
import { useState, useRef, useEffect } from "react";
// Import Lucide Icons
import { ArrowRight, ChevronLeft, ChevronRight, Hand } from "lucide-react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import des composants UI
import Lightbox from "@/components/ui/Lightbox";
import SafeImage from "@/components/ui/SafeImage";
// Import des types
import { Artwork } from "@/types/artwork";
// Import des datas
import { homeGalleryItems } from "@/data/artworks";
import { CONTACT_INFO } from "@/data/contact";

// Liste des catégories
const tabs = [
    { id: "saisons", label: "Portraits (Saisons)" },
    { id: "personnalites", label: "Portraits (Personnalités)" },
    { id: "linogravures", label: "Linogravures" },
    { id: "minis", label: "Les Minis" },
];

// Variants pour l'animation du slider
const slideVariants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 50 : -50,
        opacity: 0,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? 50 : -50,
        opacity: 0,
    }),
};

// Composant GalleryPreviewSection de la page d'accueil
export default function GalleryPreviewSection() {
    const [activeTab, setActiveTab] = useState("saisons");
    const [startIndex, setStartIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Référence pour le conteneur de scroll horizontal (Mobile)
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Reset pagination et scroll au changement d'onglet
    const handleTabChange = (tabId: string) => {
        setDirection(0); // Pas de direction spécifique au changement d'onglet
        setActiveTab(tabId);
        setStartIndex(0);
        setHasInteracted(false);
    };

    // Reset du scroll horizontal mobile quand l'onglet change
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'instant' });
        }
    }, [activeTab]);

    // Get all items for current category
    const allItemsInTab = homeGalleryItems.filter(
        (item) => item.category === activeTab
    );

    // Get visible items (pagination window)
    const visibleItems = allItemsInTab.slice(startIndex, startIndex + 4);

    const hasNext = startIndex + 4 < allItemsInTab.length;
    const hasPrev = startIndex > 0;

    const nextItems = () => {
        if (hasNext) {
            setDirection(1);
            setStartIndex((prev) => prev + 4);
        }
    };

    const prevItems = () => {
        if (hasPrev) {
            setDirection(-1);
            setStartIndex((prev) => prev - 4);
        }
    };

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
                            onClick={() => handleTabChange(tab.id)}
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

                {/* Zone Galerie */}
                <div className="relative">
                    
                    {/* --- MOBILE / TABLETTE : SWIPE HORIZONTAL --- */}
                    <div className="xl:hidden relative">
                        {/* Indicateur de swipe (Main animée) */}
                        <AnimatePresence>
                            {!hasInteracted && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 pointer-events-none text-terra/80 mix-blend-multiply flex flex-col items-center gap-1"
                                >
                                    <motion.div
                                        animate={{ x: [0, -20, 0] }}
                                        transition={{ 
                                            duration: 1.5, 
                                            repeat: Infinity, 
                                            ease: "easeInOut",
                                            repeatDelay: 0.5
                                        }}
                                    >
                                        <Hand size={32} className="rotate-90" />
                                    </motion.div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Swipe</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div 
                            ref={scrollContainerRef}
                            className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-8 px-8 md:-mx-10 md:px-10"
                            onScroll={() => setHasInteracted(true)}
                            onTouchStart={() => setHasInteracted(true)}
                        >
                            {allItemsInTab.map((item) => (
                                <div 
                                    key={item.id} 
                                    className="min-w-[80vw] md:min-w-[40vw] snap-center"
                                    onClick={() => setSelectedArtwork(item)}
                                >
                                    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 h-full flex flex-col">
                                        <div className="relative aspect-[4/5] w-full">
                                            <SafeImage
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-cover"
                                                sizes="(max-width: 768px) 85vw, 45vw"
                                            />
                                        </div>
                                        <div className="p-6 flex-grow flex flex-col justify-between">                                            <div>
                                                <h3 className="font-cormorant text-2xl text-gray-900 mb-1 font-bold italic">
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
                    </div>

                    {/* --- DESKTOP : FLÈCHES + GRILLE --- */}
                    <div className="hidden xl:block">
                        {/* Bouton Précédent */}
                        {hasPrev && (
                            <button 
                                onClick={prevItems}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:text-terra hover:scale-110 transition-all"
                                aria-label="Voir précédents"
                            >
                                <ChevronLeft size={24} />
                            </button>
                        )}

                        {/* Conteneur animé */}
                        <div className="min-h-[400px] overflow-hidden">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={startIndex + activeTab}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    className="grid grid-cols-4 gap-8"
                                >
                                    {visibleItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group cursor-pointer"
                                            onClick={() => setSelectedArtwork(item)}
                                        >
                                            {/* Carte */}
                                            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">

                                                <div className="relative aspect-[4/5] w-full">
                                                    <SafeImage
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                                        sizes="25vw"
                                                    />
                                                </div>

                                                {/* Info */}
                                                <div className="p-6 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-cormorant text-2xl text-gray-900 mb-1 group-hover:text-terra transition-colors font-bold italic">
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
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Bouton Suivant */}
                        {hasNext && (
                            <button 
                                onClick={nextItems}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-white p-3 rounded-full shadow-lg text-gray-800 hover:text-terra hover:scale-110 transition-all"
                                aria-label="Voir suivants"
                            >
                                <ChevronRight size={24} />
                            </button>
                        )}
                    </div>
                </div>

                {/* Lien vers la galerie complète */}
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
                        href={CONTACT_INFO.socials.etsy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#F45800] hover:border-[#F45800] hover:text-white transition-all duration-300"
                    >
                        Achetez mes oeuvres (Etsy)
                    </a>
                    <a
                        href={CONTACT_INFO.socials.vinted}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto border border-black px-8 py-4 text-sm uppercase tracking-widest hover:bg-[#007782] hover:border-[#007782] hover:text-white transition-all duration-300"
                    >
                        Achetez mes oeuvres (Vinted)
                    </a>
                    <Link
                        href="/contact"
                        className="w-full md:w-auto bg-black text-white px-8 py-4 text-sm uppercase tracking-widest hover:bg-terra transition-all duration-300"
                    >
                        Planifiez une oeuvre personnalisée
                    </Link>
                </div>

            </div>

            {/* Lightbox */}
            <Lightbox
                key={selectedArtwork?.id}
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