"use client";

import Link from "next/link";

interface NavLinkProps {
    href: string;
    label: string;
    currentPath: string;
    isTransparent: boolean;
}

export default function NavLink({ href, label, currentPath }: NavLinkProps) {
    const isActive = currentPath === href;
    
    return (
        <Link
            href={href}
            className={`relative group py-2 font-medium uppercase text-xs tracking-[0.15em] transition-colors duration-300 ${
                isActive 
                    ? "text-terra font-bold" 
                    : "hover:text-terra"
            }`}
        >
            {label}
            {/* Ligne de soulignement animée */}
            <span className={`absolute bottom-0 left-0 w-0 h-px bg-terra transition-all duration-300 group-hover:w-full ${isActive ? "w-full" : ""}`}></span>
        </Link>
    );
}
