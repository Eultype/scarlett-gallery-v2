"use client";

// Import React
import { useState } from "react";
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
    const [messageLength, setMessageLength] = useState(0);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setMessageLength(0);
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={`bg-white p-8 md:p-12 rounded-xl shadow-2xl text-center space-y-6 ${className}`}>
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="font-cormorant text-4xl text-gray-900 italic">Merci pour votre message !</h3>
                <p className="text-gray-500 font-light">Je reviendrai vers vous très prochainement.</p>
                <button 
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-terra font-bold uppercase tracking-widest text-xs hover:underline"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <div className={`bg-white p-8 md:p-12 rounded-xl shadow-2xl ${className}`}>
            <form onSubmit={handleSubmit} className="space-y-10">
                
                {/* Titres */}
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="font-cormorant text-4xl text-gray-900 italic mb-2">{title}</h3>
                    {subtitle && <p className="text-gray-500 font-light text-sm">{subtitle}</p>}
                </div>

                {/* Nom complet / Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <FloatingInput id="name" label="Nom complet" type="text" required />
                    <FloatingInput 
                        id="phone" 
                        label="Téléphone" 
                        type="tel" 
                        required
                        pattern="^(0|\\+33|\\+32)[1-9][0-9]{7,12}$" 
                    />
                </div>

                {/* Email */}
                <FloatingInput id="email" label="Adresse Email" type="email" required />

                {/* Sujet et Date*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative z-0 w-full group">
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
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Sujet de la demande
                        </label>
                    </div>
                    <FloatingInput id="date" label="Date souhaitée (optionnel)" type="date" />
                </div>

                {/* Message */}
                <div className="relative">
                    <FloatingInput 
                        id="message" 
                        label="Votre message..." 
                        isTextArea 
                        required 
                        maxLength={500}
                        onChange={(e) => setMessageLength((e.target as HTMLTextAreaElement).value.length)}
                    />
                    <div className={`text-[10px] text-right mt-1 uppercase tracking-widest ${messageLength >= 500 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                        {messageLength} / 500
                    </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-3 py-2">
                    <input type="checkbox" id="accept" required className="mt-1 accent-terra w-4 h-4 cursor-pointer" />
                    <label htmlFor="accept" className="text-xs text-gray-500 leading-relaxed cursor-pointer text-left">
                        Je consens à ce que mes données soient traitées pour répondre à ma demande, conformément à la <Link href="/politique" className="underline hover:text-terra">politique de confidentialité</Link>.
                    </label>
                </div>

                {/* État d'erreur */}
                {status === "error" && (
                    <div className="text-red-500 text-sm text-center">
                        Une erreur est survenue lors de l'envoi. Veuillez réessayer.
                    </div>
                )}

                {/* Bouton envoyer le message */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-black text-white py-4 flex items-center justify-center gap-3 hover:bg-terra transition-all duration-500 group uppercase tracking-[0.2em] text-xs font-bold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                    {status !== "loading" && <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />}
                </button>
            </form>
        </div>
    );
}