"use client";

import ContactForm from "@/components/ui/ContactForm";
import ContactInfo from "@/app/contact/_components/ContactInfo";
import RevealTitle from "@/components/ui/RevealTitle";

export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-[#FDFBF7]">
            <div className="mx-auto px-8 md:px-10 xl:px-20">
                
                {/* Entête avec Ligne */}
                <div className="flex flex-col items-start text-left mb-20 max-w-7xl mx-auto">
                    <RevealTitle 
                        text="Entrons en contact" 
                        className="font-cormorant text-5xl md:text-7xl text-gray-900 font-light italic mb-4" 
                    />
                    <div className="h-[1px] w-24 bg-gray-300 mt-4"></div>
                </div>

                <div className="flex flex-col xl:flex-row justify-center gap-16 lg:gap-24 max-w-7xl mx-auto">
                    {/* Colonne de gauche : Infos Éditoriales (identique à la page contact) */}
                    <ContactInfo />

                    {/* Colonne de droite : Formulaire */}
                    <div className="w-full xl:w-7/12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
}
