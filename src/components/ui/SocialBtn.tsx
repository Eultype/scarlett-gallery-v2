"use client";

import React from "react";

interface SocialBtnProps {
    href: string;
    icon: React.ReactNode;
}

export default function SocialBtn({ href, icon }: SocialBtnProps) {
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
