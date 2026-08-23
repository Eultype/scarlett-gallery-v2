"use client";

// Import Next
import Link from "next/link";
// Import React
import { useState, useRef, useEffect } from "react";
import { ArrowRight, MoveLeft, MoveRight, Hand } from "lucide-react";
// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
// Import des composants UI
import SafeImage from "@/components/ui/SafeImage";
// Import des types
import { Artwork } from "@/types/artwork";
// Import des datas
import { homeGalleryItems } from "@/data/artworks";
import { CONTACT_INFO } from "@/data/contact";
// Import du Text Reveal
import RevealTitle from "@/components/ui/RevealTitle";

// Liste des catégories
const tabs = [
    { id: "saisons", label: "Portraits (Saisons)" },
    { id: "personnalites", label: "Portraits (Personnalités)" },
    { id: "religieux", label: "Portraits (Religieux)" },
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

    // Logic to get visible items based on their column spans (total 4 per row)
    const getVisibleItems = () => {
        const items = [];
        let currentSpan = 0;
        let i = startIndex;
        
        while (i < allItemsInTab.length && currentSpan < 4) {
            const item = allItemsInTab[i];
            const itemSpan = item.layout === "wide" ? 2 : 1;
            
            if (currentSpan + itemSpan <= 4) {
                items.push(item);
                currentSpan += itemSpan;
                i++;
            } else {
                break;
            }
        }
        return items;
    };

    const visibleItems = getVisibleItems();

    const hasNext = startIndex + visibleItems.length < allItemsInTab.length;
    const hasPrev = startIndex > 0;

    const nextItems = () => {
        if (hasNext) {
            setDirection(1);
            setStartIndex((prev) => prev + visibleItems.length);
        }
    };

    const prevItems = () => {
        if (hasPrev) {
            setDirection(-1);
            // This is slightly complex for backward navigation with variable spans
            // For simplicity, we move back by a fixed amount or recalculate
            setStartIndex((prev) => Math.max(0, prev - 4));
        }
    };

    return (
        <section id="gallery" className="py-20 bg-[#FDFBF7]">
            <div className="mx-auto px-8 md:px-10 xl:px-20">

                {/* Titre avec Animation Wow */}
                <div className="flex flex-col items-center text-center mb-12 space-y-4">
                    <RevealTitle 
                        text="Gallery of Works" 
                        className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic justify-center" 
                    />
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="text-gray-500 italic"
                    >
                        Explorez une sélection de mes créations récentes
                    </motion.p>
                    <div className="h-[1px] w-24 bg-gray-300 mx-auto mt-6"></div>
                </div>

                {/* Onglets Éditoriaux (Tabs) */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => handleTabChange(tab.id)}
                            className="group flex flex-col items-center outline-none"
                        >
                            <span className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 text-center ${
                                activeTab === tab.id
                                    ? "text-terra"
                                    : "text-gray-400 group-hover:text-gray-900"
                            }`}>
                                {tab.label}
                            </span>
                            <span className={`h-[1px] mt-2 transition-all duration-700 ease-in-out ${
                                activeTab === tab.id
                                    ? "w-8 bg-terra"
                                    : "w-0 bg-gray-300 group-hover:w-4"
                            }`}></span>
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
                                <Link 
                                    key={item.id} 
                                    href={`/gallery/${item.id}`}
                                    className="min-w-[80vw] md:min-w-[40vw] snap-center group flex flex-col h-full"
                                >
                                    <div className="flex-grow flex flex-col h-full">
                                        <div className={`relative w-full aspect-[4/5] overflow-hidden bg-transparent`}>
                                            <SafeImage
                                                src={item.image}
                                                alt={`Peinture ${item.title} - Scarlett Gallery`}
                                                fill
                                                className={`${item.layout === "wide" ? "object-contain p-4" : "object-contain p-2"} transition-transform duration-700 group-hover:scale-105`}
                                                sizes="(max-width: 768px) 85vw, 45vw"
                                            />
                                            {/* Badge retiré de l'image car il est affiché en bas maintenant */}
                                        </div>
                                        <div className="pt-6 flex-grow flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-cormorant text-2xl text-gray-900 mb-1 group-hover:text-terra transition-colors font-light italic">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{item.serie}</p>
                                            </div>
                                            <p className="text-xs text-gray-500 pt-3 mt-auto flex justify-between items-center border-t border-gray-200">
                                                <span className="font-light">{item.dimensions}</span>
                                                {item.status === "Disponible" && (
                                                    <span className="text-[#4e6e58] font-bold uppercase tracking-widest text-[9px] flex items-center gap-2">
                                                        Disponible
                                                    </span>
                                                )}
                                                {item.status === "Vendu" && (
                                                    <span className="text-terra font-bold uppercase tracking-widest text-[9px] flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 bg-terra rounded-full animate-pulse"></span>
                                                        Vendu
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* --- DESKTOP : FLÈCHES + GRILLE --- */}
                    <div className="hidden xl:block">
                        {/* Bouton Précédent */}
                        {hasPrev && (
                            <button 
                                onClick={prevItems}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 p-2 text-gray-400 hover:text-terra transition-colors group flex items-center"
                                aria-label="Voir précédents"
                            >
                                <MoveLeft size={36} strokeWidth={1} className="group-hover:-translate-x-2 transition-transform" />
                            </button>
                        )}

                        {/* Conteneur animé */}
                        <div className="min-h-[400px] pb-12 -mb-12 overflow-hidden">
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
                                        <Link
                                            key={item.id}
                                            href={`/gallery/${item.id}`}
                                            className={`group cursor-pointer flex flex-col ${item.layout === "wide" ? "xl:col-span-2" : ""}`}
                                        >
                                            {/* Carte Luxe (Sans bordure, sans ombre) */}
                                            <div className="flex-grow flex flex-col h-full">

                                                <div className={`relative w-full overflow-hidden bg-transparent ${item.layout === "wide" ? "aspect-[1.69/1]" : "aspect-[4/5]"}`}>
                                                    <SafeImage
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        sizes={item.layout === "wide" ? "(max-width: 1280px) 100vw, 50vw" : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"}
                                                        className={`w-full h-full transform-gpu will-change-transform ${item.layout === "wide" ? "object-contain p-4" : "object-contain p-2"} transition-transform duration-700 group-hover:scale-105`}
                                                    />
                                                    {/* Badge retiré de l'image car il est affiché en bas maintenant */}
                                                </div>

                                                <div className="pt-6 flex-grow flex flex-col justify-between">
                                                    <div>
                                                        <h3 className="font-cormorant text-2xl text-gray-900 mb-1 group-hover:text-terra transition-colors font-light italic">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-3">{item.serie}</p>
                                                    </div>
                                                    <p className="text-xs text-gray-500 pt-3 mt-auto flex justify-between items-center border-t border-gray-200">
                                                        <span className="font-light">{item.dimensions}</span>
                                                        {item.status === "Disponible" && (
                                                            <span className="text-[#4e6e58] font-bold uppercase tracking-widest text-[9px] flex items-center gap-2">
                                                                Disponible
                                                            </span>
                                                        )}
                                                        {item.status === "Vendu" && (
                                                            <span className="text-terra font-bold uppercase tracking-widest text-[9px] flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 bg-terra rounded-full animate-pulse"></span>
                                                                Vendu
                                                            </span>
                                                        )}
                                                    </p>
                                                </div>

                                            </div>
                                        </Link>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Bouton Suivant */}
                        {hasNext && (
                            <button 
                                onClick={nextItems}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 p-2 text-gray-400 hover:text-terra transition-colors group flex items-center"
                                aria-label="Voir suivants"
                            >
                                <MoveRight size={36} strokeWidth={1} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        )}
                    </div>
                </div>

                {/* Liens vers les galeries (Classique & 3D) */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 mt-16 mb-12">
                    {/* Lien Galerie Classique */}
                    <Link
                        href="/gallery"
                        className="group inline-flex flex-col items-center text-center"
                    >
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                            Voir toute la galerie
                        </span>
                        <span className="text-xs text-gray-400 mt-2 font-light italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Grille classique
                        </span>
                        <span className="h-[1px] w-12 bg-gray-300 mt-3 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                    </Link>

                    {/* Ligne séparatrice sur desktop */}
                    <div className="hidden md:block w-[1px] h-12 bg-gray-200"></div>

                    {/* Lien Musée 3D */}
                    <Link
                        href="/exposition"
                        className="group inline-flex flex-col items-center text-center"
                    >
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-terra group-hover:text-gray-900 transition-colors duration-500">
                            Entrer dans le musée 3D
                        </span>
                        <span className="text-xs text-gray-400 mt-2 font-light italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            Expérience immersive
                        </span>
                        <span className="h-[1px] w-12 bg-terra mt-3 group-hover:w-full group-hover:bg-gray-300 transition-all duration-700 ease-in-out"></span>
                    </Link>
                </div>

                {/* Liens d'achat et Call to Action */}
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
                    <a
                        href={CONTACT_INFO.socials.etsy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 border border-gray-900 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 hover:bg-[#F45800] hover:border-[#F45800] hover:text-white transition-all duration-500 w-full md:w-auto text-center"
                    >
                        Achetez sur Etsy
                    </a>
                    <a
                        href={CONTACT_INFO.socials.vinted}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-10 py-4 border border-gray-900 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 hover:bg-[#007782] hover:border-[#007782] hover:text-white transition-all duration-500 w-full md:w-auto text-center"
                    >
                        Achetez sur Vinted
                    </a>
                    <Link
                        href="/contact"
                        className="px-10 py-4 border border-gray-900 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 hover:bg-terra hover:border-terra hover:text-white transition-all duration-500 w-full md:w-auto text-center"
                    >
                        Commande Personnalisée
                    </Link>
                </div>
            </div>
        </section>
    );
}