"use client";

// Import React
import React from "react";
// Import des composants UI
import FaqItem from "@/components/ui/FaqItem";
// Import des datas
import { FAQ_ITEMS } from "@/data/faq";

// Composant FaqSection : Liste des questions fréquentes
export default function FaqSection() {
    return (
        <section className="mx-auto px-8 md:px-10 xl:px-20 mt-32">
            <div className="text-center mb-12">
                <h2 className="font-cormorant text-4xl md:text-5xl text-gray-900 italic">Questions Fréquentes</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {FAQ_ITEMS.map((item, index) => (
                    <FaqItem 
                        key={index} 
                        question={item.question} 
                        answer={item.answer} 
                    />
                ))}
            </div>
        </section>
    );
}