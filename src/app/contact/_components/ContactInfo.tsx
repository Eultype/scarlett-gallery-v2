"use client";

// Import Lucide Icons
import { MapPin, Phone, Mail, Clock } from "lucide-react";
// Import React Icons
import { FaInstagram, FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
// Import des composants UI
import SocialBtn from "@/components/ui/SocialBtn";
// Import des datas
import { CONTACT_INFO } from "@/data/contact";

// Composant ContactInfo : Colonne de gauche avec coordonnées et réseaux sociaux
export default function ContactInfo() {
    return (
        <div className="w-full xl:w-5/12 space-y-12">
            
            {/* Coordonnées */}
            <div className="space-y-8 md:text-center xl:text-left">
                <h2 className="font-cormorant text-3xl text-gray-900 border-b border-terra/30 pb-2 inline-block italic">
                    Coordonnées
                </h2>
                <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-4 xl:flex xl:flex-col xl:gap-0 xl:space-y-6 text-gray-600 font-light">
                    {/* Icône / case : adresse */}
                    <div className="flex items-center md:flex-col md:items-center xl:flex-row xl:items-start gap-4 group">
                        {/* Icône */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-terra shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                            <MapPin size={20} />
                        </div>
                        {/* Case : adresse */}
                        <div className="text-left md:text-center xl:text-left">
                            {/* Titre */}
                            <p className="font-medium text-gray-900">Atelier</p>
                            {/* Ville */}
                            <p className="text-sm">{CONTACT_INFO.address}</p>
                        </div>
                    </div>
                    {/* Icône / case : téléphone */}
                    <div className="flex items-center md:flex-col md:items-center xl:flex-row xl:items-start gap-4 group">
                        {/* Icône */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-terra shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                            <Phone size={20} />
                        </div>
                        {/* Case : téléphone */}
                        <div className="text-left md:text-center xl:text-left">
                            {/* Titre */}
                            <p className="font-medium text-gray-900">Téléphone</p>
                            {/* Téléphone */}
                            <p className="text-sm">{CONTACT_INFO.phone}</p>
                        </div>
                    </div>
                    {/* Icône / case : email */}
                    <div className="flex items-center md:flex-col md:items-center xl:flex-row xl:items-start gap-4 group">
                        {/* Icône */}
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-terra shadow-sm group-hover:scale-110 transition-transform flex-shrink-0">
                            <Mail size={20} />
                        </div>
                        {/* Case : email */}
                        <div className="text-left md:text-center xl:text-left">
                            {/* Titre */}
                            <p className="font-medium text-gray-900">Email</p>
                            {/* Case : email*/}
                            <p className="text-sm break-all">{CONTACT_INFO.email}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Case : réseaux Sociaux */}
            <div className="space-y-6 md:text-center xl:text-left">
                {/* Titre */}
                <h2 className="font-cormorant text-3xl text-gray-900 border-b border-terra/30 pb-2 inline-block italic">
                    Suivez-moi
                </h2>
                {/* Réseaux sociaux */}
                <div className="flex gap-4 md:justify-center xl:justify-start">
                    {/* Instagram */}
                    <SocialBtn href={CONTACT_INFO.socials.instagram} label="Instagram" icon={<FaInstagram size={20} />} />
                    {/* Facebook */}
                    <SocialBtn href={CONTACT_INFO.socials.facebook} label="Facebook" icon={<FaFacebookF size={20} />} />
                    {/* TikTok */}
                    <SocialBtn href={CONTACT_INFO.socials.tiktok} label="TikTok" icon={<FaTiktok size={20} />} />
                    {/* Etsy */}
                    <SocialBtn href={CONTACT_INFO.socials.etsy} label="Etsy" icon={<FaEtsy size={20} />} />
                </div>
            </div>

            {/* Horaires */}
            <div className="p-6 bg-white shadow-sm rounded-lg border border-gray-100">
                <div className="flex items-start gap-4 text-gray-600">
                    <Clock className="text-terra shrink-0 mt-1" size={20} />
                    <div className="space-y-1">
                        <p className="font-medium text-gray-900 mb-2">Disponibilités</p>
                        <p className="text-sm">{CONTACT_INFO.availability.week}</p>
                        <p className="text-sm">{CONTACT_INFO.availability.weekend}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
