"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export function MobileTouchLook() {
    const { camera } = useThree();
    useEffect(() => {
        let activeTouchId: number | null = null;
        let lastX = 0;
        let lastY = 0;
        
        const onTouchStart = (e: TouchEvent) => {
            if ((e.target as HTMLElement).closest('.mobile-joystick') || activeTouchId !== null) return;
            const touch = e.changedTouches[0];
            activeTouchId = touch.identifier;
            lastX = touch.clientX;
            lastY = touch.clientY;
        };
        const onTouchMove = (e: TouchEvent) => {
            if (activeTouchId === null) return;
            
            let activeTouch;
            for (let i = 0; i < e.changedTouches.length; i++) {
                if (e.changedTouches[i].identifier === activeTouchId) {
                    activeTouch = e.changedTouches[i];
                    break;
                }
            }
            if (!activeTouch) return;

            const dx = activeTouch.clientX - lastX;
            const dy = activeTouch.clientY - lastY;
            lastX = activeTouch.clientX;
            lastY = activeTouch.clientY;
            
            camera.rotation.order = "YXZ";
            camera.rotation.y -= dx * 0.005;
            camera.rotation.x -= dy * 0.005;
            camera.rotation.x = Math.max(-Math.PI/2, Math.min(Math.PI/2, camera.rotation.x));
        };
        const onTouchEnd = (e: TouchEvent) => { 
            if (activeTouchId === null) return;
            for (let i = 0; i < e.changedTouches.length; i++) {
                if (e.changedTouches[i].identifier === activeTouchId) {
                    activeTouchId = null;
                    break;
                }
            }
        };
        
        window.addEventListener('touchstart', onTouchStart, { passive: false });
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('touchcancel', onTouchEnd);
        
        return () => {
             window.removeEventListener('touchstart', onTouchStart);
             window.removeEventListener('touchmove', onTouchMove);
             window.removeEventListener('touchend', onTouchEnd);
             window.removeEventListener('touchcancel', onTouchEnd);
        }
    }, [camera]);
    return null;
}

