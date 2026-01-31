"use client";

import React from "react";

interface FloatingInputProps {
    id: string;
    label: string;
    type?: string;
    required?: boolean;
    isTextArea?: boolean;
    rows?: number;
}

export default function FloatingInput({ 
    id, 
    label, 
    type = "text", 
    required = false, 
    isTextArea = false,
    rows = 4
}: FloatingInputProps) {
    const baseClasses = "block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer";
    
    return (
        <div className="relative z-0 w-full group">
            {isTextArea ? (
                <textarea 
                    id={id} 
                    name={id} 
                    rows={rows} 
                    required={required} 
                    className={`${baseClasses} resize-none`}
                    placeholder=" "
                ></textarea>
            ) : (
                <input 
                    type={type} 
                    name={id} 
                    id={id} 
                    className={baseClasses} 
                    placeholder=" " 
                    required={required} 
                />
            )}
            <label 
                htmlFor={id} 
                className="peer-focus:font-medium absolute text-lg text-gray-500 font-cormorant italic duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-terra peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
                {label}
            </label>
        </div>
    );
}
