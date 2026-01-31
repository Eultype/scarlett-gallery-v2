"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
// Import des composants UI
import SocialBtn from "@/components/ui/SocialBtn";
import ContactForm from "@/components/ui/ContactForm";
// Import des datas
import { CONTACT_INFO } from "@/data/contact";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-20 bg-[#FDFBF7] min-h-screen">

            {/* Section Hero : Titre et sous-titre */}
            <section className="mx-auto px-8 md:px-10 xl:px-20 mb-20 text-center pt-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    {/* Badge */}
                    <span className="text-terra text-xs font-bold uppercase tracking-[0.3em]">Discussion</span>
                    {/* Titre */}
                    <h1 className="font-cormorant text-6xl md:text-7xl text-gray-900 font-light italic">
                        Contact
                    </h1>
                    {/* Sous-titre */}
                    <p className="text-gray-600 text-lg font-light leading-relaxed max-w-2xl mx-auto">
                        Une question sur une œuvre, une envie de collaboration ou simplement l'envie d'échanger ?
                        Mon atelier est ouvert à la discussion.
                    </p>
                </motion.div>
            </section>

            {/* Section contact : Coordonnées / Formulaire */}
            <div className="mx-auto px-8 md:px-10 xl:px-20">
                <div className="flex flex-col xl:flex-row justify-center gap-16 lg:gap-24 mx-auto">

                    {/* Colonne de gauche : Infos */}
                    <div className="w-full xl:w-5/12 space-y-12">
                        
                        {/* Coordonnées */}
                        <div className="space-y-8 md:text-center xl:text-left">
                            <h3 className="font-cormorant text-3xl text-gray-900 border-b border-terra/30 pb-2 inline-block italic">
                                Coordonnées
                            </h3>
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
                            <h3 className="font-cormorant text-3xl text-gray-900 border-b border-terra/30 pb-2 inline-block italic">
                                Suivez-moi
                            </h3>
                            {/* Réseaux sociaux */}
                            <div className="flex gap-4 md:justify-center xl:justify-start">
                                {/* Instagram */}
                                <SocialBtn href={CONTACT_INFO.socials.instagram} icon={<FaInstagram size={20} />} />
                                {/* Facebook */}
                                <SocialBtn href={CONTACT_INFO.socials.facebook} icon={<FaFacebookF size={20} />} />
                                {/* TikTok */}
                                <SocialBtn href={CONTACT_INFO.socials.tiktok} icon={<FaTiktok size={20} />} />
                                {/* Etsy */}
                                <SocialBtn href={CONTACT_INFO.socials.etsy} icon={<FaEtsy size={20} />} />
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

                    {/* Colonne de droite : Formulaire de contact */}
                    <div className="w-full xl:w-7/12">
                        <ContactForm />
                    </div>

                </div>
            </div>

            {/* Section FAQ */}
            <section className="mx-auto px-8 md:px-10 xl:px-20 mt-32">
                <div className="text-center mb-12">
                    <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Questions Fréquentes</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <FaqItem 
                        question="Livrez-vous à l'international ?" 
                        answer="Oui, je livre mes œuvres partout dans le monde. Les frais de port sont calculés en fonction de la destination et du format de l'œuvre." 
                    />
                    <FaqItem 
                        question="Acceptez-vous les paiements en plusieurs fois ?" 
                        answer="Pour les grandes toiles ou les commandes sur mesure, un échelonnement du paiement est tout à fait possible. Discutons-en." 
                    />
                    <FaqItem 
                        question="Les œuvres sont-elles encadrées ?" 
                        answer="Certaines œuvres (notamment les Minis) sont vendues avec leur cadre. Pour les grands formats, cela dépend. C'est précisé sur chaque fiche œuvre." 
                    />
                    <FaqItem 
                        question="Quel est le délai pour une commande ?" 
                        answer="Il faut compter entre 3 et 6 semaines selon la complexité et le temps de séchage de l'huile, qui est incompressible." 
                    />
                </div>
            </section>
        </main>
    );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">{question}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
    );
}
