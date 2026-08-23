"use client";

// Import des datas
import { CONTACT_INFO } from "@/data/contact";

// Composant ContactInfo : Colonne de gauche avec coordonnées et réseaux sociaux (Style Éditorial)
export default function ContactInfo() {
    return (
        <div className="w-full xl:w-5/12 space-y-16">
            
            {/* Coordonnées */}
            <div className="space-y-10 text-left">
                <div>
                    <h2 className="font-cormorant text-4xl text-gray-900 italic font-light">
                        Coordonnées
                    </h2>
                    <div className="h-[1px] w-12 bg-terra mt-4"></div>
                </div>

                <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 xl:flex xl:flex-col xl:gap-0 xl:space-y-10 text-gray-600 font-light mt-8">
                    {/* Adresse */}
                    <div className="flex flex-col items-start group">
                        <div className="text-left">
                            <p className="font-medium text-gray-900 uppercase tracking-widest text-xs mb-1">Atelier</p>
                            <p className="text-sm text-gray-500">{CONTACT_INFO.address}</p>
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className="flex flex-col items-start group">
                        <div className="text-left">
                            <p className="font-medium text-gray-900 uppercase tracking-widest text-xs mb-1">Téléphone</p>
                            <a href={`https://wa.me/${CONTACT_INFO.phone.replace(/\s+/g, '').replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:text-terra transition-colors block">
                                {CONTACT_INFO.phone}
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-start group">
                        <div className="text-left">
                            <p className="font-medium text-gray-900 uppercase tracking-widest text-xs mb-1">Email</p>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-gray-500 break-all hover:text-terra transition-colors block">
                                {CONTACT_INFO.email}
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Réseaux Sociaux */}
            <div className="space-y-10 text-left">
                <div>
                    <h2 className="font-cormorant text-4xl text-gray-900 italic font-light">
                        Suivez-moi
                    </h2>
                    <div className="h-[1px] w-12 bg-terra mt-4"></div>
                </div>
                
                <div className="flex flex-wrap gap-8 justify-start">
                    <a href={CONTACT_INFO.socials.instagram} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-start">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                            Instagram
                        </span>
                        <span className="h-[1px] w-8 bg-gray-300 mt-3 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                    </a>

                    <a href={CONTACT_INFO.socials.tiktok} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-col items-start">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                            TikTok
                        </span>
                        <span className="h-[1px] w-8 bg-gray-300 mt-3 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                    </a>
                </div>
            </div>

            {/* Horaires sans bordure ni ombre */}
            <div className="pt-8 border-t border-gray-200">
                <div className="flex flex-col items-start text-gray-600">
                    <div className="text-left space-y-1">
                        <p className="font-medium text-gray-900 uppercase tracking-widest text-xs mb-2">Disponibilités</p>
                        <p className="text-sm font-light text-gray-500">{CONTACT_INFO.availability.week}</p>
                        <p className="text-sm font-light text-gray-500">{CONTACT_INFO.availability.weekend}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
