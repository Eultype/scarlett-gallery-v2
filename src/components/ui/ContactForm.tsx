"use client";

// Import React
import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import FloatingInput from "./FloatingInput";

// Schéma de validation Zod
const contactSchema = z.object({
    name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
    phone: z.string().regex(/^(0|\+33|\+32)[1-9][0-9]{7,12}$/, "Format de téléphone invalide"),
    email: z.string().email("Adresse email invalide"),
    subject: z.string().min(1, "Veuillez sélectionner un sujet"),
    date: z.string().optional(),
    message: z.string().min(10, "Le message est trop court").max(500, "Le message est trop long"),
    accept: z.boolean().refine((val) => val === true, {
        message: "Vous devez accepter la politique de confidentialité"
    }),
});

type ContactFormData = z.infer<typeof contactSchema>;

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
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [messageLength, setMessageLength] = useState(0);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            subject: "",
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                reset();
                setMessageLength(0);
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className={`bg-[#FDFBF7] p-8 md:p-12 text-center space-y-6 ${className}`}>
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
        <div className={`w-full ${className}`}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                
                {/* Titres */}
                <div className="mb-10 text-center lg:text-left">
                    <h3 className="font-cormorant text-4xl text-gray-900 italic mb-2">{title}</h3>
                    {subtitle && <p className="text-gray-500 font-light text-sm">{subtitle}</p>}
                </div>

                {/* Nom complet / Téléphone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                        <FloatingInput id="name" label="Nom complet" type="text" {...register("name")} />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                        <FloatingInput id="phone" label="Téléphone" type="tel" {...register("phone")} />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    </div>
                </div>

                {/* Email */}
                <div>
                    <FloatingInput id="email" label="Adresse Email" type="email" {...register("email")} />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                {/* Sujet et Date*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="relative z-0 w-full group">
                        <select 
                            id="subject" 
                            {...register("subject")}
                            className="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer"
                        >
                            <option value="" disabled>Choisir...</option>
                            <option value="commande">Commande sur mesure</option>
                            <option value="achat">Achat d&apos;œuvre</option>
                            <option value="exposition">Proposition d&apos;exposition</option>
                            <option value="autre">Autre</option>
                        </select>
                        <label htmlFor="subject" className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Sujet de la demande
                        </label>
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                    </div>
                    <div>
                        <FloatingInput id="date" label="Date souhaitée (optionnel)" type="date" {...register("date")} />
                    </div>
                </div>

                {/* Message */}
                <div className="relative">
                    <FloatingInput 
                        id="message" 
                        label="Votre message..." 
                        isTextArea 
                        maxLength={500}
                        {...register("message", {
                            onChange: (e) => setMessageLength(e.target.value.length)
                        })}
                    />
                    <div className={`text-[10px] text-right mt-1 uppercase tracking-widest ${messageLength >= 500 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                        {messageLength} / 500
                    </div>
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                {/* Checkbox */}
                <div>
                    <div className="flex items-start gap-3 py-2">
                        <input type="checkbox" id="accept" {...register("accept")} className="mt-1 accent-terra w-4 h-4 cursor-pointer" />
                        <label htmlFor="accept" className="text-xs text-gray-500 leading-relaxed cursor-pointer text-left">
                            Je consens à ce que mes données soient traitées pour répondre à ma demande, conformément à la <Link href="/politique" className="underline hover:text-terra">politique de confidentialité</Link>.
                        </label>
                    </div>
                    {errors.accept && <p className="text-red-500 text-xs">{errors.accept.message}</p>}
                </div>

                {/* État d&apos;erreur global */}
                {status === "error" && (
                    <div className="text-red-500 text-sm text-center">
                        Une erreur est survenue lors de l&apos;envoi. Veuillez réessayer.
                    </div>
                )}

                {/* Bouton envoyer le message */}
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full border border-gray-900 bg-transparent text-gray-900 py-4 flex items-center justify-center gap-3 hover:bg-terra hover:border-terra hover:text-white transition-all duration-500 group uppercase tracking-[0.2em] text-[10px] font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                    {status !== "loading" && <Send size={16} className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-500" />}
                </button>
            </form>
        </div>
    );
}