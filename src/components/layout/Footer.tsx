import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
import { BiSend } from "react-icons/bi";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="block w-48">
                            <Image
                                src="/images/logos/logo2(blanc).png"
                                alt="Scarlett Gallery"
                                width={200}
                                height={60}
                                className="w-full h-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Artiste peintre basée à Bruxelles, créant des œuvres uniques qui éveillent les émotions.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium text-lg mb-6">Navigation</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><FooterLink href="/" label="Home" /></li>
                            <li><FooterLink href="/about" label="About Me" /></li>
                            <li><FooterLink href="/gallery" label="Gallery" /></li>
                            <li><FooterLink href="/services" label="Services" /></li>
                            <li><FooterLink href="/contact" label="Contact" /></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-lg mb-6">Services</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><FooterLink href="/contact" label="Commandes sur mesure" /></li>
                            <li><FooterLink href="/contact" label="Expositions" /></li>
                            <li><FooterLink href="/contact" label="Consultation artistique" /></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium text-lg mb-6">Réseaux sociaux</h4>
                        <div className="flex space-x-6 mb-8">
                            <SocialLink
                                href="https://www.instagram.com/scar.lett_gallery"
                                icon={<FaInstagram size={24} />}
                            />
                            <SocialLink
                                href="https://www.facebook.com/emma.denonii"
                                icon={<FaFacebookF size={22} />}
                            />
                            <SocialLink
                                href="https://www.tiktok.com/@scar.lett_gallery"
                                icon={<FaTiktok size={22} />}
                            />
                            <SocialLink
                                href="https://www.etsy.com/shop/byscarlettgallery/"
                                icon={<FaEtsy size={22} />}
                            />
                        </div>

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

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p className="mb-4 md:mb-0">
                        &copy; {currentYear} DE NONI Emma - Artiste Peintre. Tous droits réservés.
                    </p>
                    <div className="flex space-x-6">
                        <Link
                            href="/politique"
                            className="hover:text-white transition-colors"
                        >
                            Politique de confidentialité
                        </Link>
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
