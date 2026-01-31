"use client";

import Link from "next/link";
import { Send } from "lucide-react";
import FloatingInput from "./FloatingInput";
import { CONTACT_INFO } from "@/data/contact";

interface ContactFormProps {
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function ContactForm({ 
    title = "Envoyer un message", 
    subtitle = "Je vous répondrai dans les plus brefs délais.",
    className = "" 
}: ContactFormProps) {
    return (
        <div className={`bg-white p-8 md:p-12 rounded-xl shadow-2xl ${className}`}>
            <form action={CONTACT_INFO.formAction} method="POST" className="space-y-10">
                
                {/* Titres */}
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="font-cormorant text-4xl text-gray-900 italic mb-2">{title}</h3>
                    {subtitle && <p className="text-gray-500 font-light text-sm">{subtitle}</p>}
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
                <FloatingInput id="message" label="Votre message..." isTextArea required />

                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                {/* Checkbox : politique de confidentialité */}
                <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" id="accept" required className="mt-1 accent-terra w-4 h-4 cursor-pointer" />
                    <label htmlFor="accept" className="text-xs text-gray-500 leading-relaxed cursor-pointer text-left">
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
    );
}