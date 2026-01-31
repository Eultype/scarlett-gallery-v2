"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
// Import React
import { useState, useEffect } from "react";

// Composant de la Navbar
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // La Navbar est transparente (texte blanc) UNIQUEMENT sur la home quand on n'a pas scrollé
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

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${
                !isTransparent
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2" // Version compacte (scroll ou autre page)
                    : "bg-transparent py-6" // Version aérée (Home top)
            }`}
        >
            <div className="mx-auto px-4 md:px-10 xl:px-20 flex justify-between items-center relative z-50">
                
                {/* Logo (à gauche) */}
                <Link href="/" className="flex-shrink-0 block">
                    <div className={`relative transition-all duration-500 ease-in-out ${
                        scrolled ? "w-[120px]" : "w-[160px] md:w-[220px]"
                    }`}>
                        <Image
                            src={isTransparent ? "/images/logos/logo2(blanc).png" : "/images/logos/img.png"}
                            alt="Scarlett Gallery"
                            width={220}
                            height={80}
                            className="object-contain w-full h-auto"
                            priority
                        />
                    </div>
                </Link>

                {/* Menu centrale : NavLinks */}
                <div
                    className={`hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-10 items-center transition-colors duration-300 ${
                        isTransparent ? "text-white" : "text-gray-900"
                    }`}
                >
                    <NavLink href="/" label="Home" currentPath={pathname} isTransparent={isTransparent} />
                    <NavLink href="/about" label="About Me" currentPath={pathname} isTransparent={isTransparent} />
                    <NavLink href="/gallery" label="Gallery" currentPath={pathname} isTransparent={isTransparent} />
                    <NavLink href="/services" label="Services" currentPath={pathname} isTransparent={isTransparent} />
                    <NavLink href="/contact" label="Contact" currentPath={pathname} isTransparent={isTransparent} />
                </div>

                {/* Bouton Shop (à droite) */}
                <div className="hidden xl:block flex-shrink-0">
                    <a
                        href="https://www.etsy.com/shop/byscarlettgallery/"
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

            {/* Menu Mobile (Overlay) - Sorti du conteneur principal pour éviter les conflits de positionnement */}
            <div
                className={`fixed inset-0 bg-[#FDFBF7] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out xl:hidden ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ top: 0, height: '100vh' }} // Force full viewport height
            >
                <MobileNavLink href="/" label="Home" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/about" label="About Me" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/gallery" label="Gallery" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/services" label="Services" onClick={() => setIsOpen(false)} />
                <MobileNavLink href="/contact" label="Contact" onClick={() => setIsOpen(false)} />
                
                <div className="pt-8">
                    <a
                        href="https://www.etsy.com/shop/byscarlettgallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-bold border border-black px-10 py-4 uppercase tracking-widest hover:bg-terra hover:text-white hover:border-terra transition-colors"
                    >
                        Shop Online
                    </a>
                </div>
            </div>
        </nav>
    );
}

// Composant NavLink avec gestion de l'état actif
function NavLink({ href, label, currentPath }: { href: string; label: string; currentPath: string; isTransparent: boolean }) {
    const isActive = currentPath === href;
    
    return (
        <Link
            href={href}
            className={`relative group py-2 font-medium uppercase text-xs tracking-[0.15em] transition-colors duration-300 ${
                isActive 
                    ? "text-terra font-bold" 
                    : "hover:text-terra"
            }`}
        >
            {label}
            {/* Ligne de soulignement animée */}
            <span className={`absolute bottom-0 left-0 w-0 h-px bg-terra transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}></span>
        </Link>
    );
}

function MobileNavLink({
                           href,
                           label,
                           onClick,
                       }: {
    href: string;
    label: string;
    onClick: () => void;
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-4xl font-cormorant italic text-gray-900 hover:text-terra transition-colors"
        >
            {label}
        </Link>
    );
}