"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaEtsy } from "react-icons/fa";
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
                    <div className="w-full xl:w-7/12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                        <form action={CONTACT_INFO.formAction} method="POST" className="space-y-10">

                            {/* Titres */}
                            <div className="mb-10">
                                <h3 className="font-cormorant text-4xl text-gray-900 italic mb-2">Envoyer un message</h3>
                                <p className="text-gray-500 font-light text-sm">Je vous répondrai dans les plus brefs délais.</p>
                            </div>
                            {/* Nom complet / Téléphone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {/* Nom complet */}
                                <FloatingInput id="name" label="Nom complet" type="text" required />
                                {/* Téléphone */}
                                <FloatingInput id="phone" label="Téléphone" type="tel" />
                            </div>
                            {/* Email */}
                            <FloatingInput id="email" label="Adresse Email" type="email" required />

                            {/* Sujet et Date*/}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative z-0 w-full group">
                                    {/* Sujet choix */}
                                    <select 
                                        id="subject" 
                                        name="subject" 
                                        required 
                                        defaultValue=""
                                        className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer"
                                    >
                                        <option value="" disabled>Choisir...</option>
                                        <option value="commande">Commande sur mesure</option>
                                        <option value="achat">Achat d'œuvre</option>
                                        <option value="exposition">Proposition d'exposition</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                    {/* Label */}
                                    <label htmlFor="subject" className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                        Sujet de la demande
                                    </label>
                                </div>
                                {/* Date */}
                                <FloatingInput id="date" label="Date souhaitée (optionnel)" type="date" />
                            </div>
                            {/* Message */}
                            <div className="relative z-0 w-full group">
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    required 
                                    className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer resize-none"
                                    placeholder=" "
                                ></textarea>
                                <label htmlFor="message" className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Votre message...
                                </label>
                            </div>

                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_captcha" value="false" />
                            {/* Checkbox : politique de confidentialité */}
                            <div className="flex items-start gap-3 py-2">
                                <input type="checkbox" id="accept" required className="mt-1 accent-terra w-4 h-4 cursor-pointer" />
                                <label htmlFor="accept" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                                    Je consens à ce que mes données soient traitées pour répondre à ma demande, conformément à la <Link href="/politique" className="underline hover:text-terra">politique de confidentialité</Link>.
                                </label>
                            </div>
                            {/* Bouton envoyer le message */}
                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 flex items-center justify-center gap-3 hover:bg-terra transition-all duration-500 group uppercase tracking-[0.2em] text-xs font-bold shadow-lg hover:shadow-xl"
                            >
                                Envoyer le message
                                <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />
                            </button>
                        </form>
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

function SocialBtn({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-terra hover:border-terra transition-all duration-300 shadow-sm"
        >
            {icon}
        </a>
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

// Composant Input Floating Label réutilisable
function FloatingInput({ id, label, type = "text", required = false }: { id: string, label: string, type?: string, required?: boolean }) {
    return (
        <div className="relative z-0 w-full group">
            <input 
                type={type} 
                name={id} 
                id={id} 
                className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer" 
                placeholder=" " 
                required={required} 
            />
            <label 
                htmlFor={id} 
                className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );
}