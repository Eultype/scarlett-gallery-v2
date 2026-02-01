// Import Next
import Link from "next/link";
import Image from "next/image";
// Import de React Icons
import { FaInstagram, FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
import { BiSend } from "react-icons/bi";
// Import des datas
import { CONTACT_INFO } from "@/data/contact";
import { NAV_LINKS } from "@/data/nav";

// Composant du Footer
export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-16">
                    {/* Colonne 1 : Logo  / Description */}
                    <div className="space-y-6">
                        {/* Logo */}
                        <Link href="/" className="block w-48">
                            <Image
                                src="/images/logos/logo2(blanc).png"
                                alt="Scarlett Gallery"
                                width={200}
                                height={60}
                                className="w-full h-auto object-contain"
                            />
                        </Link>
                        {/* Description */}
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Artiste peintre basée à Bruxelles, créant des œuvres uniques qui éveillent les émotions.
                        </p>
                    </div>
                    {/* Colonne 2 : Navigation */}
                    <div>
                        <h4 className="font-cormorant italic tracking-wider text-2xl font-light mb-6">Navigation</h4>
                        <ul className="space-y-3 text-gray-400">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <FooterLink href={link.href} label={link.label} />
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* Colonne 3 : Services */}
                    <div>
                        <h4 className="font-cormorant italic tracking-wider text-2xl font-light mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><FooterLink href="/contact" label="Commandes sur mesure" /></li>
                            <li><FooterLink href="/contact" label="Expositions" /></li>
                            <li><FooterLink href="/contact" label="Consultation artistique" /></li>
                        </ul>
                    </div>
                    {/* Colonne 4 : Réseaux sociaux et newsletter */}
                    <div>
                        {/* Réseaux sociaux */}
                        <h4 className="font-cormorant italic tracking-wider text-2xl font-light mb-6">Réseaux sociaux</h4>
                        <div className="flex space-x-6 mb-8">
                            <SocialLink
                                href={CONTACT_INFO.socials.instagram}
                                icon={<FaInstagram size={24} />}
                            />
                            <SocialLink
                                href={CONTACT_INFO.socials.facebook}
                                icon={<FaFacebookF size={22} />}
                            />
                            <SocialLink
                                href={CONTACT_INFO.socials.tiktok}
                                icon={<FaTiktok size={22} />}
                            />
                            <SocialLink
                                href={CONTACT_INFO.socials.etsy}
                                icon={<FaEtsy size={22} />}
                            />
                        </div>
                        {/* Newsletter */}
                        <h4 className="font-medium text-lg mb-4">Newsletter</h4>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-1 bg-white text-black px-4 py-2 rounded-l-sm focus:outline-none"
                            />
                            <button
                                type="submit"
                                className="bg-gray-800 px-4 py-2 rounded-r-sm hover:bg-terra transition-colors"
                                aria-label="S'inscrire"
                            >
                                <BiSend size={20} />
                            </button>
                        </form>
                    </div>
                </div>
                {/* Droits */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 md:mb-0">
                        &copy; {currentYear} DE NONI Emma - Artiste Peintre. Tous droits réservés.
                    </p>
                    {/* Politique / Mentions */}
                    <div className="flex space-x-6">
                        {/* Politique de confidentialités */}
                        <Link
                            href="/politique"
                            className="hover:text-white transition-colors"
                        >
                            Politique de confidentialité
                        </Link>
                        {/* Mentions légales */}
                        <Link
                            href="/mentions"
                            className="hover:text-white transition-colors"
                        >
                            Mentions légales
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ href, label }: { href: string; label: string }) {
    return (
        <Link
            href={href}
            className="hover:text-white transition-colors block"
        >
            {label}
        </Link>
    );
}

function SocialLink({
                        href,
                        icon,
                    }: {
    href: string;
    icon: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
        >
            {icon}
        </a>
    );
}
