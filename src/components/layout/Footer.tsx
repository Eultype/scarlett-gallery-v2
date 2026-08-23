"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaInstagram, FaTiktok, FaEtsy } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
import { CONTACT_INFO } from "@/data/contact";
import { NAV_LINKS } from "@/data/nav";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Cacher le footer sur la page d'exposition immersive
    if (pathname === "/exposition") {
        return null;
    }

    const isArtworkPage = pathname?.startsWith("/gallery/") && pathname !== "/gallery";
    if (isArtworkPage) return null;

    return (
        <footer className="bg-terra text-[#FDFBF7] py-16">
            <div className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 xl:gap-24 mb-16">
                    {/* Colonne 1 : Logo / Description */}
                    <div className="space-y-6 md:col-span-4">
                        <Link href="/" className="block w-48">
                            <div className="relative w-full" style={{ aspectRatio: "200 / 60" }}>
                                <Image
                                    src="/images/logos/logo2(blanc).png"
                                    alt="Logo Scarlett Gallery - Emma De Noni"
                                    fill
                                    className="object-contain"
                                    sizes="200px"
                                />
                            </div>
                        </Link>
                        <p className="text-[#FDFBF7]/80 text-sm leading-relaxed">
                            Artiste peintre basée à Bruxelles, créant des œuvres uniques qui éveillent les émotions.
                        </p>
                    </div>

                    {/* Colonne 2 : Navigation */}
                    <div className="md:col-span-3">
                        <h3 className="font-cormorant italic tracking-wider text-2xl font-light mb-6">Navigation</h3>
                        <ul className="space-y-3 text-[#FDFBF7]/80">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Colonne 3 : Réseaux sociaux et newsletter */}
                    <div className="md:col-span-5">
                        <h3 className="font-cormorant italic tracking-wider text-2xl font-light mb-6">Réseaux sociaux</h3>
                        <div className="flex space-x-6 mb-8">
                            <SocialLink href={CONTACT_INFO.socials.instagram} label="Instagram" icon={<FaInstagram size={24} />} />
                            <SocialLink href={CONTACT_INFO.socials.tiktok} label="TikTok" icon={<FaTiktok size={22} />} />
                            <SocialLink href={CONTACT_INFO.socials.etsy} label="Etsy" icon={<FaEtsy size={22} />} />
                        </div>

                        <h3 className="font-medium text-lg mb-4">Newsletter</h3>
                        <form className="flex shadow-sm max-w-sm">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 min-w-0 bg-white text-black px-4 py-2 rounded-l-sm focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-black px-4 py-2 rounded-r-sm hover:opacity-80 transition-opacity"
                                aria-label="S'inscrire"
                            >
                                <BiSend size={20} className="text-white" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Droits */}
                <div className="border-t border-[#FDFBF7]/20 pt-8 flex flex-col xl:flex-row justify-between items-center text-[10px] md:text-xs uppercase tracking-widest text-[#FDFBF7]/60 gap-6">
                    <p className="text-center xl:text-left">
                        &copy; {currentYear} DE NONI Emma - Artiste Peintre.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/politique" className="hover:text-white transition-colors">Confidentialité</Link>
                        <Link href="/mentions" className="hover:text-white transition-colors">Mentions Légales</Link>
                    </div>
                    <p className="text-center xl:text-right opacity-70">
                        Design & Développement par <a href="https://github.com/Eultype" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-bold">Samuël Darry</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link href={href} className="hover:text-white transition-colors block">
            {label}
        </Link>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="text-[#FDFBF7]/80 hover:text-white transition-colors">
            {icon}
        </a>
    );
}
