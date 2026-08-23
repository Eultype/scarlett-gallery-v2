"use client";

import { useEffect, useMemo } from "react";
import * as THREE from "three";
import { useThree, useFrame } from "@react-three/fiber";
import { globalMovement, collectionNames, collections } from "../ExpositionState";

export function PlayerController() {
    const { camera } = useThree();

    // Pré-calculer les positions Z de tous les murs
    const { wallZs, exitZ } = useMemo(() => {
        let z = 0;
        const walls: number[] = [];
        collectionNames.forEach((category, index) => {
            const items = collections[category];
            const length = Math.max(20, (Math.ceil(items.length / 2) + 1) * 6);
            z -= length;
            if (index < collectionNames.length - 1) {
                walls.push(z);
            }
        });
        return { wallZs: walls, exitZ: z };
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'KeyW' || e.code === 'ArrowUp') globalMovement.forward = true;
            if (e.code === 'KeyS' || e.code === 'ArrowDown') globalMovement.backward = true;
            if (e.code === 'KeyA' || e.code === 'ArrowLeft') globalMovement.left = true;
            if (e.code === 'KeyD' || e.code === 'ArrowRight') globalMovement.right = true;
        };
        const handleKeyUp = (e: KeyboardEvent) => {
            if (e.code === 'KeyW' || e.code === 'ArrowUp') globalMovement.forward = false;
            if (e.code === 'KeyS' || e.code === 'ArrowDown') globalMovement.backward = false;
            if (e.code === 'KeyA' || e.code === 'ArrowLeft') globalMovement.left = false;
            if (e.code === 'KeyD' || e.code === 'ArrowRight') globalMovement.right = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    useFrame((state, delta) => {
        const speed = 12 * delta; 
        const frontVector = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion);
        frontVector.y = 0; frontVector.normalize();
        
        const sideVector = new THREE.Vector3(1, 0, 0).applyQuaternion(camera.quaternion);
        sideVector.y = 0; sideVector.normalize();

        const moveDir = new THREE.Vector3(0, 0, 0);
        if (globalMovement.forward) moveDir.addScaledVector(frontVector, speed);
        if (globalMovement.backward) moveDir.addScaledVector(frontVector, -speed);
        if (globalMovement.left) moveDir.addScaledVector(sideVector, -speed);
        if (globalMovement.right) moveDir.addScaledVector(sideVector, speed);

        const newX = camera.position.x + moveDir.x;
        const newZ = camera.position.z + moveDir.z;

        let validX = newX;
        let validZ = newZ;

        // Limites générales du couloir
        validX = THREE.MathUtils.clamp(validX, -5.5, 5.5);
        if (validZ > 8.5) validZ = 8.5; // Limite arrière du joueur
        
        // --- Système de Collisions Physiques ---
        const isColliding = (x: number, z: number) => {
            // 1. Cordes VIP (z de 2 à 10, le joueur doit rester sur le tapis)
            if (z > 1.8 && z < 10) {
                if (x < -1.8 || x > 1.8) return true;
            }

            // 2. Murs séparateurs entre les salles
            for (const wZ of wallZs) {
                // Si on est dans l'épaisseur du mur
                if (z > wZ - 0.8 && z < wZ + 0.8) {
                    // L'ouverture de la porte est entre -2.2 et 2.2
                    if (x < -2.2 || x > 2.2) return true;
                }
            }

            // 3. Mur de fin (sortie)
            if (z < exitZ + 0.8) {
                if (x < -2.5 || x > 2.5) return true;
                if (z < exitZ - 0.2) return true; // Empêcher de traverser la porte
            }

            return false;
        };

        // Permettre de glisser contre les murs en testant les axes séparément
        if (!isColliding(validX, camera.position.z)) {
            camera.position.x = validX;
        }
        if (!isColliding(camera.position.x, validZ)) {
            camera.position.z = validZ;
        }

        camera.position.y = 2.5; 
    });

    return null;
}

