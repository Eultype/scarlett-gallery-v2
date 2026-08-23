"use client";

import Link from "next/link";

interface MobileNavLinkProps {
    href: string;
    label: string;
    onClick: () => void;
}

export default function MobileNavLink({ href, label, onClick }: MobileNavLinkProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-5xl md:text-7xl font-cormorant italic text-gray-900 hover:text-terra transition-colors relative block"
        >
            {label}
        </Link>
    );
}
