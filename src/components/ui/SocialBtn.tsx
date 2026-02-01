"use client";

import React from "react";

interface SocialBtnProps {
    href: string;
    icon: React.ReactNode;
    label: string;
}

export default function SocialBtn({ href, icon, label }: SocialBtnProps) {
    return (
        <a 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={label}
            className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-terra hover:border-terra transition-all duration-300 shadow-sm"
        >
            {icon}
        </a>
    );
}
