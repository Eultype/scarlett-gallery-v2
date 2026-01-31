"use client";

// Import Next
import Link from "next/link";
// Import Lucide Icons
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

// Composant ContactSection de la page d'accueil
export default function ContactSection() {
    return (
        <section id="contact" className="py-20 bg-[#FDFBF7]">
            <div className="mx-auto px-8 md:px-10 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center gap-16 mx-auto">
                    {/* Bloc Coordonnées (Gauche) */}
                    <div className="w-full xl:w-1/2 space-y-12">
                        <div>
                            {/* Titre */}
                            <h2 className="font-cormorant text-6xl md:text-7xl text-gray-900 mb-6 font-light italic">
                                Entrons en contact
                            </h2>
                            {/* Sous-titre */}
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Que vous souhaitiez commander une œuvre ou organiser une exposition,
                                je serai ravie de vous répondre. N&apos;hésitez pas à me contacter via
                                ce formulaire ou directement par téléphone.
                            </p>
                        </div>
                        {/* Conteneur Flex pour Coordonnées + Horaires */}
                        <div className="flex flex-col md:flex-row md:justify-center md:gap-16 xl:flex-col xl:items-start xl:gap-8 space-y-6 md:space-y-0">
                            
                            {/* Coordonnées */}
                            <div className="space-y-6">
                                {/* Titre */}
                                <h3 className="text-xl font-bold text-gray-900 border-b pb-2 inline-block">Coordonnées</h3>
                                {/* Ville */}
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-terra shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <p>Bruxelles, Belgique</p>
                                </div>
                                {/* Téléphone */}
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-terra shrink-0">
                                        <Phone size={20} />
                                    </div>
                                    <p>+33 6 78 47 87 21</p>
                                </div>
                                {/* Email */}
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-10 h-10 bg-zinc-100 rounded-full flex items-center justify-center text-terra shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <p>contact@scarlettgallery.com</p>
                                </div>
                            </div>

                            {/* Horaires de disponibilités */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-gray-900 border-b pb-2 inline-block">Horaires de disponibilité</h3>
                                <div className="flex items-start gap-4 text-gray-600">
                                    <Clock className="text-terra shrink-0 mt-1" size={20} />
                                    <div>
                                        <p>Lundi - Vendredi : Après 18h</p>
                                        <p>Samedi / Dimanche : Sur rendez-vous</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bloc Formulaire (Droite) */}
                    <div className="w-full xl:w-1/2 bg-zinc-50 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
                        <form action="https://formsubmit.co/561abe24f35506f8d73deb1c6e0906ac" method="POST" className="space-y-6">

                            {/* LIGNE 1 : Nom Complet et Téléphone */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Nom complet */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Nom complet</label>
                                    <input type="text" id="name" name="name" required className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors" />
                                </div>
                                {/* Téléphone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Téléphone</label>
                                    <input type="tel" id="phone" name="phone" className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors" />
                                </div>
                            </div>

                            {/* LIGNE 2 : Email */}
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" name="email" required className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors" />
                            </div>

                            {/* LIGNE 3 : Sujet et Date */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Sujet */}
                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-gray-700">Sujet</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        defaultValue=""
                                        className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors appearance-none"
                                    >
                                        <option value="" disabled>Sélectionnez un sujet</option>
                                        <option value="commande">Commande d&apos;une œuvre</option>
                                        <option value="exposition">Organisation d&apos;exposition</option>
                                        <option value="autre">Autre demande</option>
                                    </select>
                                </div>
                                {/* Date */}
                                <div className="space-y-2">
                                    <label htmlFor="date" className="text-sm font-medium text-gray-700">Date souhaitée (si RDV)</label>
                                    <input type="date" id="date" name="date" className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors" />
                                </div>
                            </div>

                            {/* LIGNE 4 : Message et politique de confidentialité */}
                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" name="message" rows={4} required className="w-full bg-white border-b-2 border-gray-200 py-2 px-0 focus:border-terra outline-none transition-colors resize-none"></textarea>
                            </div>

                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            {/* Acceptation de la politique */}
                            <div className="flex items-start gap-3">
                                <input type="checkbox" id="accept" required className="mt-1 accent-terra" />
                                <label htmlFor="accept" className="text-xs text-gray-500 leading-relaxed">
                                    J’accepte la <Link href="/politique" className="underline hover:text-terra">politique de confidentialité</Link> et autorise Scarlett Gallery à me recontacter.
                                </label>
                            </div>
                            {/* Bouton envoyer ma demande */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 flex items-center justify-center gap-3 hover:bg-terra transition-all duration-300 group"
                            >
                                Envoyer ma demande
                                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
