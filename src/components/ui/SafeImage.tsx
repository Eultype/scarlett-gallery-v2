"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react";

interface SafeImageProps extends ImageProps {
    containerClassName?: string;
    loaderSize?: number;
}

export default function SafeImage({ 
    containerClassName = "", 
    loaderSize = 24, 
    className = "", 
    src,
    alt,
    ...props 
}: SafeImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden w-full h-full ${containerClassName}`}>
            {/* Spinner de chargement - Visible tant que l'image n'est pas chargée */}
            {!isLoaded && (
                <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <Loader2 
                        size={loaderSize} 
                        className="animate-spin text-terra/40" 
                    />
                </div>
            )}

            {/* L'image elle-même */}
            <Image
                {...props}
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-700 ease-in-out ${
                    isLoaded ? "opacity-100" : "opacity-0"
                } ${className}`}
            />
        </div>
    );
}
