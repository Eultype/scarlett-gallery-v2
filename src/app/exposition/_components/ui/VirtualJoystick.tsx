"use client";

import { useEffect, useRef, useState } from "react";
import { globalMovement } from "../ExpositionState";

export function VirtualJoystick() {
    const baseRef = useRef<HTMLDivElement>(null);
    const [stickPos, setStickPos] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);

    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true);
        updateJoystick(e);
        if (e.target instanceof HTMLElement) {
            e.target.setPointerCapture(e.pointerId);
        }
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return;
        updateJoystick(e);
    };

    const handlePointerUp = (e: React.PointerEvent) => {
        setIsDragging(false);
        setStickPos({ x: 0, y: 0 });
        
        // Reset movement
        globalMovement.forward = false;
        globalMovement.backward = false;
        globalMovement.left = false;
        globalMovement.right = false;

        if (e.target instanceof HTMLElement) {
            e.target.releasePointerCapture(e.pointerId);
        }
    };

    const updateJoystick = (e: React.PointerEvent) => {
        if (!baseRef.current) return;
        
        const rect = baseRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Position relative au centre de la base
        let dx = e.clientX - rect.left - centerX;
        let dy = e.clientY - rect.top - centerY;
        
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxRadius = 35; // Le rayon maximum de déplacement du stick
        
        if (distance > maxRadius) {
            dx = (dx / distance) * maxRadius;
            dy = (dy / distance) * maxRadius;
        }
        
        setStickPos({ x: dx, y: dy });

        // Mise à jour du mouvement global
        // On définit un seuil (ex: 10px) pour déclencher le mouvement
        const threshold = 10;
        globalMovement.forward = dy < -threshold;
        globalMovement.backward = dy > threshold;
        globalMovement.right = dx > threshold;
        globalMovement.left = dx < -threshold;
    };

    // Nettoyage de sécurité
    useEffect(() => {
        return () => {
            globalMovement.forward = false;
            globalMovement.backward = false;
            globalMovement.left = false;
            globalMovement.right = false;
        };
    }, []);

    return (
        <div className="absolute z-50 flex flex-col items-center pointer-events-auto mobile-joystick 
                        bottom-12 left-1/2 -translate-x-1/2 
                        landscape:bottom-8 landscape:left-16 landscape:translate-x-0">
            <div 
                ref={baseRef}
                className="w-32 h-32 bg-black/30 backdrop-blur-md border border-white/20 rounded-full relative touch-none shadow-2xl flex items-center justify-center cursor-pointer"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                style={{ touchAction: 'none' }} // Très important pour empêcher le défilement
            >
                {/* Repère central */}
                <div className="w-2 h-2 bg-white/20 rounded-full absolute pointer-events-none"></div>
                
                {/* Le stick directionnel */}
                <div 
                    className={`w-14 h-14 rounded-full absolute shadow-lg pointer-events-none transition-transform ${isDragging ? 'duration-0' : 'duration-200'} ease-out`}
                    style={{ 
                        transform: `translate(${stickPos.x}px, ${stickPos.y}px)`,
                        backgroundColor: isDragging ? '#A44A3F' : 'rgba(255, 255, 255, 0.9)',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.4)'
                    }}
                >
                </div>
            </div>
            
            <div className="text-[9px] uppercase tracking-widest text-gray-500 mt-6 bg-white/80 px-3 py-1 rounded whitespace-nowrap pointer-events-none shadow-sm">
                Glissez ailleurs pour regarder
            </div>
        </div>
    );
}
