"use client";

import React, { forwardRef } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    id: string;
    label: string;
    isTextArea?: boolean;
    rows?: number;
}

const FloatingInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, FloatingInputProps>(
    ({ id, label, isTextArea = false, rows = 4, className = "", ...props }, ref) => {
        const baseClasses = "block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-terra peer";
        
        return (
            <div className={`relative z-0 w-full group ${className}`}>
                {isTextArea ? (
                    <textarea 
                        id={id} 
                        name={id} 
                        rows={rows} 
                        ref={ref as React.Ref<HTMLTextAreaElement>}
                        className={`${baseClasses} resize-none`}
                        placeholder=" "
                        {...props}
                    ></textarea>
                ) : (
                    <input 
                        id={id} 
                        name={id} 
                        ref={ref as React.Ref<HTMLInputElement>}
                        className={baseClasses} 
                        placeholder=" " 
                        {...props}
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
);

FloatingInput.displayName = "FloatingInput";

export default FloatingInput;
