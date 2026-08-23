import React from 'react';

interface BadgeProps {
    text: string;
    className?: string;
    variant?: "solid" | "text" | "outline";
}

export default function Badge({ text, className = "", variant = "solid" }: BadgeProps) {
    const baseClasses = "font-bold uppercase tracking-[0.3em]";
    
    let variantClasses = "";
    if (variant === "solid") {
        variantClasses = "inline-block bg-terra text-white px-3 py-1 text-[10px] rounded";
    } else if (variant === "text") {
        variantClasses = "block text-terra text-xs";
    } else if (variant === "outline") {
        variantClasses = "inline-block border border-terra text-terra px-3 py-1 text-[10px] rounded";
    }

    return (
        <span className={`${baseClasses} ${variantClasses} ${className}`}>
            {text}
        </span>
    );
}
