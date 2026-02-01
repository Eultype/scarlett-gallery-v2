"use client";

import React from "react";

interface FaqItemProps {
    question: string;
    answer: string;
}

// Composant FaqItem : Une question et sa réponse stylisées dans un bloc blanc
export default function FaqItem({ question, answer }: FaqItemProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-2">{question}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{answer}</p>
        </div>
    );
}
