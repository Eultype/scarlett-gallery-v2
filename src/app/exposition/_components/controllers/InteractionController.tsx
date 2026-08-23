"use client";

import { useEffect } from "react";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

export function InteractionController({ onSelect, isMobile }: { onSelect: (data: any) => void, isMobile: boolean }) {
    const { camera, scene } = useThree();
    
    useEffect(() => {
        let touchStartX = 0;
        let touchStartY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            if (e.changedTouches.length > 0) {
                touchStartX = e.changedTouches[0].clientX;
                touchStartY = e.changedTouches[0].clientY;
            }
        };

        const handleClick = (e: MouseEvent | TouchEvent) => {
            // Sur bureau, n'interagit que si la souris est verrouillée
            if (!document.pointerLockElement && !isMobile) return;

            const raycaster = new THREE.Raycaster();
            const pointer = new THREE.Vector2(0, 0);

            if (isMobile) {
                // Ignorer les clics sur l'UI
                if ((e.target as HTMLElement).closest('.mobile-joystick') || (e.target as HTMLElement).closest('button')) {
                    return;
                }
                
                let clientX = 0;
                let clientY = 0;
                
                if ('changedTouches' in e && e.changedTouches.length > 0) {
                    clientX = e.changedTouches[0].clientX;
                    clientY = e.changedTouches[0].clientY;
                    
                    // Si le doigt a beaucoup bougé, c'est un swipe pour regarder, pas un tap
                    const dist = Math.hypot(clientX - touchStartX, clientY - touchStartY);
                    if (dist > 15) return;
                } else if ('clientX' in e) {
                    clientX = (e as MouseEvent).clientX;
                    clientY = (e as MouseEvent).clientY;
                } else {
                    return;
                }

                pointer.x = (clientX / window.innerWidth) * 2 - 1;
                pointer.y = -(clientY / window.innerHeight) * 2 + 1;
            }

            raycaster.setFromCamera(pointer, camera);
            const intersects = raycaster.intersectObjects(scene.children, true);
            
            for (let hit of intersects) {
                if (hit.object.userData?.artwork) {
                    if (document.pointerLockElement) document.exitPointerLock(); 
                    onSelect(hit.object.userData); 
                    break;
                } else if (hit.object.userData?.link) {
                    if (document.pointerLockElement) document.exitPointerLock();
                    window.location.href = hit.object.userData.link;
                    break;
                }
            }
        };
        
        window.addEventListener('click', handleClick);
        window.addEventListener('touchstart', handleTouchStart, { passive: true });
        window.addEventListener('touchend', handleClick);

        return () => {
            window.removeEventListener('click', handleClick);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleClick);
        };
    }, [camera, scene, onSelect, isMobile]);
    
    return null;
}

// Contrôleur de Caméra (Se déplace de manière fluide vers la toile sélectionnée sans bug de rotation)
