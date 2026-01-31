"use client";

// Import Next
import Link from "next/link";
import Image from "next/image";
// Import Framer Motion
import { motion } from "framer-motion";
// Import Lucide Icons
import { Brush, GalleryVerticalEnd, ArrowRight, CheckCircle2 } from "lucide-react";

// Page des services
export default function ServicesPage() {
    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7]">
            
            {/* Section Hero : Titre et sous-titre */}
            <section className="mx-auto px-8 md:px-10 xl:px-20 mb-24 text-center pt-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-6"
                >
                    {/* Badge */}
                    <span className="text-terra text-xs font-bold uppercase tracking-[0.3em]">Collaborations</span>
                    {/* Titre */}
                    <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        Mes Prestations
                    </h1>
                    {/* Sous-titre */}
                    <p className="text-gray-600 text-lg font-light leading-relaxed">
                        Au-delà de ma collection personnelle, je mets mon savoir-faire au service de vos projets.
                        Que ce soit pour une œuvre unique ou un événement artistique, créons ensemble quelque chose d'exceptionnel.
                    </p>
                </motion.div>
            </section>

            {/* Services : 2 colonnes */}
            <div className="mx-auto px-4 md:px-10 xl:px-20 space-y-32">

                {/* Service 1 : Sur Mesure */}
                <section className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2 relative aspect-[4/5] shadow-2xl">
                        <Image 
                            src="/images/about/Scarlett_peint.jpg" 
                            alt="Commande sur mesure" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white flex items-center justify-center shadow-lg">
                            <Brush className="text-terra w-10 h-10" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8">
                        <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Commande Sur Mesure</h2>
                        <p className="text-gray-600 leading-relaxed text-justify">
                            Vous avez une vision, une couleur, une émotion que vous souhaitez figer sur toile ?
                            Je réalise des œuvres personnalisées en dialogue avec votre intérieur et vos envies.
                            Nous définissons ensemble le format, la palette et l'ambiance.
                        </p>
                        
                        <ul className="space-y-4">
                            <ListItem text="Consultation initiale (visio ou café)" />
                            <ListItem text="Propositions de croquis et palettes" />
                            <ListItem text="Suivi photo de l'avancement" />
                            <ListItem text="Livraison et conseils d'accrochage" />
                        </ul>

                        <div className="pt-4">
                            <Link href="/contact" className="group inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-widest text-xs hover:text-terra transition-colors">
                                <span>Démarrer un projet</span>
                                <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-terra group-hover:w-12 transition-all duration-500"></div>
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Service 2 : Expositions & Pro */}
                <section className="flex flex-col md:flex-row-reverse items-center gap-16">
                    <div className="w-full md:w-1/2 relative aspect-[4/5] shadow-2xl">
                        <Image 
                            src="/images/gallery/linogravures/lino_4saisons_mur.jpg" 
                            alt="Mise en situation exposition" 
                            fill 
                            className="object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white flex items-center justify-center shadow-lg">
                            <GalleryVerticalEnd className="text-terra w-10 h-10" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 text-right md:text-left">
                        <div className="md:text-right">
                            <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Expositions & Event</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-justify md:text-right">
                            J'organise et participe à des expositions temporaires. Je propose également mes œuvres
                            à la location pour des événements d'entreprise, des shootings photo ou du Home Staging.
                            Apportez une touche d'âme et d'élégance à vos espaces professionnels.
                        </p>
                        
                        <ul className="space-y-4 flex flex-col items-end">
                            <ListItem text="Location courte ou longue durée" align="right" />
                            <ListItem text="Scénographie et installation" align="right" />
                            <ListItem text="Vernissages privés" align="right" />
                            <ListItem text="Ateliers Team Building (sur devis)" align="right" />
                        </ul>

                        <div className="pt-4 flex justify-end">
                            <Link href="/contact" className="group inline-flex items-center gap-3 text-gray-900 font-bold uppercase tracking-widest text-xs hover:text-terra transition-colors">
                                <span>Me contacter</span>
                                <div className="w-8 h-[1px] bg-gray-300 group-hover:bg-terra group-hover:w-12 transition-all duration-500"></div>
                                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </section>

            </div>

            {/* CTA final : Prendre rendez-vous */}
            <section className="mt-32 py-20 bg-[#FDFBF7]">
                <div className="mx-auto px-8 md:px-10 xl:px-20 text-center space-y-8">
                    {/* Titre */}
                    <h2 className="font-cormorant text-5xl text-gray-900 italic">Un projet en tête ?</h2>
                    {/* Sous-titre */}
                    <p className="text-gray-500 max-w-xl mx-auto">
                        Chaque collaboration commence par une discussion simple. N'hésitez pas à m'écrire,
                        même si votre idée est encore floue.
                    </p>
                    {/* Bouton prendre RDV */}
                    <Link 
                        href="/contact"
                        className="inline-block bg-black text-white px-10 py-4 text-sm uppercase tracking-widest hover:bg-terra transition-colors shadow-lg"
                    >
                        Prendre Rendez-vous
                    </Link>
                </div>
            </section>

        </main>
    );
}

function ListItem({ text, align = "left" }: { text: string, align?: "left" | "right" }) {
    return (
        <li className={`flex items-center gap-3 text-gray-700 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
            <CheckCircle2 size={18} className="text-terra flex-shrink-0" />
            <span>{text}</span>
        </li>
    );
}