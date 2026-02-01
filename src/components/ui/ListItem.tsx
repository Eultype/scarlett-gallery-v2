"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ListItemProps {
    text: string;
    align?: "left" | "right";
}

// Composant ListItem : Élément de liste stylisé avec une icône de validation
export default function ListItem({ text, align = "left" }: ListItemProps) {
    return (
        <li className={`flex items-center gap-3 text-gray-700 ${align === "right" ? "flex-row-reverse text-right" : ""}`}>
            <CheckCircle2 size={18} className="text-terra flex-shrink-0" />
            <span>{text}</span>
        </li>
    );
}
