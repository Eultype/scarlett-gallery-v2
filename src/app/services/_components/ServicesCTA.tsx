"use client";

import Link from "next/link";
import RevealTitle from "@/components/ui/RevealTitle";

export default function ServicesCTA() {
    return (
        <section className="py-20 md:py-32 bg-[#FDFBF7]">
            <div className="mx-auto px-6 md:px-12 xl:px-24 max-w-7xl">
                <div className="mx-auto border-t border-b border-gray-200 py-20 text-center flex flex-col items-center">
                    
                    <RevealTitle 
                        text="Un projet en tête ?" 
                        className="font-cormorant text-5xl md:text-6xl text-gray-900 italic justify-center mb-6" 
                    />

                    <p className="text-gray-500 font-light leading-relaxed text-lg max-w-xl mx-auto mb-12">
                        Chaque collaboration commence par une discussion simple. N'hésitez pas à m'écrire,
                        même si votre idée est encore floue.
                    </p>
                    
                    <Link
                        href="/contact"
                        className="group inline-flex flex-col items-center"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-gray-900 group-hover:text-terra transition-colors duration-500">
                            Prendre Rendez-vous
                        </span>
                        <span className="h-[1px] w-12 bg-gray-300 mt-4 group-hover:w-full group-hover:bg-terra transition-all duration-700 ease-in-out"></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
