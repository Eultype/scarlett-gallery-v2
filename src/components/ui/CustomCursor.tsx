"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, Variants } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const pathname = usePathname();
    const isExposition = pathname === "/exposition";

    useEffect(() => {
        setMounted(true);
        const desktopCheck = window.matchMedia("(pointer: fine)").matches;
        setIsDesktop(desktopCheck);

        // Détecter si on est sur un appareil avec une vraie souris (desktop)
        if (desktopCheck) {
            const updateMousePosition = (e: MouseEvent) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                
                const target = e.target as HTMLElement;
                // Vérifier si la cible ou un de ses parents est cliquable
                if (
                    target.closest("a") ||
                    target.closest("button") ||
                    target.closest(".cursor-pointer") ||
                    target.closest("[role='button']") ||
                    target.closest("img") ||
                    target.closest(".group")
                ) {
                    setIsHovering(true);
                } else {
                    setIsHovering(false);
                }
            };

            window.addEventListener("mousemove", updateMousePosition);

            return () => {
                window.removeEventListener("mousemove", updateMousePosition);
            };
        }
    }, []);

    // Hide default cursor globally on desktop
    useEffect(() => {
        if (typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches && !isExposition) {
            const style = document.createElement("style");
            style.innerHTML = `
                * { cursor: none !important; }
            `;
            document.head.appendChild(style);
            
            return () => {
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            };
        }
    }, [pathname, isExposition, isDesktop]);

    // Si on n'est pas sur desktop, ou si on est sur la page exposition, ou si pas monté
    if (!mounted || !isDesktop || isExposition) return null;

    // Animation du cercle extérieur
    const variants: Variants = {
        default: {
            x: mousePosition.x - 12,
            y: mousePosition.y - 12,
            width: 24,
            height: 24,
            backgroundColor: "transparent",
            border: "1px solid #c25f4a", // Couleur terra
            transition: { 
                type: "spring", 
                stiffness: 800, 
                damping: 35, 
                mass: 0.2 
            }
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            width: 48,
            height: 48,
            backgroundColor: "rgba(194, 95, 74, 0.1)", // Terra avec opacité
            border: "1px solid #c25f4a",
            transition: { 
                type: "spring", 
                stiffness: 800, 
                damping: 35, 
                mass: 0.2 
            }
        }
    };

    // Animation du petit point intérieur
    const dotVariants: Variants = {
        default: {
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
            width: 6,
            height: 6,
            backgroundColor: "#c25f4a",
            transition: { type: "tween", ease: "linear", duration: 0 } // Le point central suit instantanément
        },
        hover: {
            x: mousePosition.x,
            y: mousePosition.y,
            width: 0,
            height: 0,
            backgroundColor: "transparent",
            transition: { type: "tween", ease: "linear", duration: 0 }
        }
    };

    return (
        <div className="hidden lg:block pointer-events-none">
            <motion.div
                className="fixed top-0 left-0 rounded-full z-[10000] pointer-events-none"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
            />
            <motion.div
                className="fixed top-0 left-0 rounded-full z-[10000] pointer-events-none"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
            />
        </div>
    );
}
