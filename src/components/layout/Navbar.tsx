"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import React
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
                    : "bg-transparent py-4"
            }`}
        >
            {/* Logo (à gauche) */}
            <div className="container mx-auto px-4 flex justify-between items-center relative">
                <Link href="/public" className="relative z-50 flex-shrink-0">
                    <Image
                        src="/images/logos/logo2(blanc).png"
                        alt="Scarlett Gallery"
                        width={200}
                        height={60}
                        className={`transition-all duration-300 object-contain w-[150px] md:w-[200px] ${
                            scrolled ? "invert brightness-0" : ""
                        }`}
                        priority
                    />
                </Link>
                {/* Menu centrale : NavLinks */}
                <div
                    className={`hidden xl:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-8 items-center ${
                        scrolled ? "text-black" : "text-white"
                    }`}
                >
                    <NavLink href="/public" label="Home" />
                    <NavLink href="/about" label="About Me" />
                    <NavLink href="/gallery" label="Gallery" />
                    <NavLink href="/services" label="Services" />
                    <NavLink href="/contact" label="Contact" />
                </div>
                {/* Bouton Shop (à droite) */}
                <div className="hidden xl:block flex-shrink-0">
                    <a
                        href="https://www.etsy.com/shop/byscarlettgallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border px-6 py-2 transition-colors hover:bg-terra hover:border-terra hover:text-white ${
                            scrolled
                                ? "border-black text-black"
                                : "border-white text-white"
                        }`}
                    >
                        Shop
                    </a>
                </div>

                <button
                    className="xl:hidden relative z-50 text-terra focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="space-y-2">
                        <span
                            className={`block w-8 h-0.5 bg-current transition-transform ${
                                isOpen ? "rotate-45 translate-y-2.5" : ""
                            }`}
                        />
                        <span
                            className={`block w-8 h-0.5 bg-current transition-opacity ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`block w-8 h-0.5 bg-current transition-transform ${
                                isOpen ? "-rotate-45 -translate-y-2.5" : ""
                            }`}
                        />
                    </div>
                </button>

                <div
                    className={`fixed inset-0 bg-white flex flex-col items-center justify-center space-y-8 transition-transform duration-300 xl:hidden ${
                        isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <MobileNavLink
                        href="/public"
                        label="Home"
                        onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                        href="/about"
                        label="About Me"
                        onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                        href="/gallery"
                        label="Gallery"
                        onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                        href="/services"
                        label="Services"
                        onClick={() => setIsOpen(false)}
                    />
                    <MobileNavLink
                        href="/contact"
                        label="Contact"
                        onClick={() => setIsOpen(false)}
                    />
                    <a
                        href="https://www.etsy.com/shop/byscarlettgallery/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl border border-black px-8 py-3 hover:bg-terra hover:text-white hover:border-terra transition-colors"
                    >
                        Shop
                    </a>
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="hover:text-terra transition-colors font-medium uppercase text-sm tracking-wider"
        >
            {label}
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
            className="text-2xl font-autumn text-black hover:text-terra"
        >
            {label}
        </Link>
    );
}
