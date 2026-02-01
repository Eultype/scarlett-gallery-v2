"use client";

import React from "react";
import { FaqItem as FaqItemType } from "@/types/faq";

// Composant FaqItem : Une question et sa réponse stylisées dans un bloc blanc
export default function FaqItem({ question, answer }: FaqItemType) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2">{question}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
    );
}
