"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import des datas
import { CONTACT_INFO } from "@/data/contact";
import { NAV_LINKS } from "@/data/nav";
// Import des composants UI
import NavLink from "@/components/ui/NavLink";
import MobileNavLink from "@/components/ui/MobileNavLink";

// Composant de la Navbar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    const isHome = pathname === "/";
    const isTransparent = isHome && !scrolled;

    // Bloquer le scroll quand le menu mobile est ouvert
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Masquer la navbar sur les pages d'œuvres individuelles ou l'exposition immersive
    const isArtworkPage = pathname?.startsWith("/gallery/") && pathname !== "/gallery";
    if (isArtworkPage || pathname === "/exposition") return null;

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                !isTransparent
                    ? "bg-[#FDFBF7] backdrop-blur-md shadow-sm py-2" // Version compacte (scroll ou autre page)
                    : "bg-transparent py-6" // Version aérée (Home top)
            }`}
        >
            <div className="mx-auto px-8 md:px-10 xl:px-20 flex justify-between items-center relative z-50">
                
                {/* Logo (à gauche) */}
                <Link href="/" className="flex-shrink-0 block">
                    <div 
                        className={`relative transition-all duration-500 ease-in-out ${
                            scrolled ? "w-[120px]" : "w-[160px] md:w-[220px]"
                        }`}
                        style={{ aspectRatio: "220 / 80" }}
                    >
                        <Image
                            src={isTransparent ? "/images/logos/logo2(blanc).png" : "/images/logos/img.png"}
                            alt="Logo Scarlett Gallery - Emma De Noni, Artiste Peintre Bruxelles"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 160px, 220px"
                            priority
                        />
                    </div>
                </Link>

                {/* Menu centrale : NavLinks */}
                <div
                    className={`hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-10 items-center transition-colors duration-300 ${
                        isTransparent ? "text-white" : "text-gray-900"
                    }`}
                    style={{ minWidth: "600px", justifyContent: "center" }}
                >
                    {NAV_LINKS.map((link) => (
                        <NavLink 
                            key={link.href} 
                            href={link.href} 
                            label={link.label} 
                            currentPath={pathname} 
                            isTransparent={isTransparent} 
                        />
                    ))}
                </div>

                {/* Bouton Shop (à droite) */}
                <div className="hidden xl:block flex-shrink-0">
                    <a
                        href={CONTACT_INFO.socials.etsy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border px-6 py-2 text-sm uppercase tracking-widest transition-all duration-300 hover:bg-terra hover:border-terra hover:text-white ${
                            isTransparent
                                ? "border-white text-white"
                                : "border-gray-900 text-gray-900"
                        }`}
                    >
                        Shop
                    </a>
                </div>

                {/* Bouton Burger (Mobile) */}
                <button
                    className={`xl:hidden focus:outline-none transition-colors duration-300 ${
                        isOpen ? "text-gray-900" : (isTransparent ? "text-white" : "text-gray-900")
                    }`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                >
                    <div className="space-y-1.5">
                        <span
                            className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                                isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                        />
                        <span
                            className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                                isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                        />
                    </div>
                </button>
            </div>

            {/* Menu Mobile (Overlay) - Refonte Premium avec animations en cascade */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3, ease: "easeInOut", delay: 0.1 } }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col items-center justify-center xl:hidden"
                        style={{ height: '100vh', top: 0 }}
                    >
                        {/* Container pour les liens */}
                        <div className="flex flex-col items-center gap-6 mt-10">
                            {NAV_LINKS.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.2, delay: 0 } }}
                                    transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <MobileNavLink 
                                        href={link.href} 
                                        label={link.label} 
                                        onClick={() => setIsOpen(false)} 
                                    />
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* Footer du menu (Socials / Shop) */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.2, delay: 0 } }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="absolute bottom-12 w-full flex flex-col items-center gap-8"
                        >
                            <a
                                href={CONTACT_INFO.socials.etsy}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-bold border border-black px-12 py-4 uppercase tracking-[0.3em] hover:bg-terra hover:text-white hover:border-terra transition-colors"
                            >
                                Shop Online
                            </a>
                            
                            <div className="flex gap-6 text-[10px] uppercase tracking-widest text-gray-500">
                                <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-terra transition-colors">Instagram</a>
                                <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-terra transition-colors">TikTok</a>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-terra transition-colors">Contact</a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}