"use client";

import { useMemo } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

export function VIPEntrance({ corridorWidth, wallHeight }: { corridorWidth: number, wallHeight: number }) {
    const createRope = (x: number, startZ: number, endZ: number) => {
        return new THREE.QuadraticBezierCurve3(
            new THREE.Vector3(x, 0.95, startZ),
            new THREE.Vector3(x, 0.6, (startZ + endZ) / 2),
            new THREE.Vector3(x, 0.95, endZ)
        );
    };

    const ropes = useMemo(() => [
        createRope(-2, 9.2, 6.8),
        createRope(-2, 6.8, 4.4),
        createRope(-2, 4.4, 2.0),
        createRope(2, 9.2, 6.8),
        createRope(2, 6.8, 4.4),
        createRope(2, 4.4, 2.0)
    ], []);

    const postZs = [9.2, 6.8, 4.4, 2.0];

    return (
        <group>
            {/* Mur d'entrée avec porte (à z=10) */}
            <group position={[0, 0, 10]}>
                <mesh position={[-corridorWidth/4 - 1.5, wallHeight/2, 0]}>
                    <boxGeometry args={[corridorWidth/2 - 3, wallHeight, 1]} />
                    <meshStandardMaterial color="#EAE0D5" roughness={1} />
                </mesh>
                <mesh position={[corridorWidth/4 + 1.5, wallHeight/2, 0]}>
                    <boxGeometry args={[corridorWidth/2 - 3, wallHeight, 1]} />
                    <meshStandardMaterial color="#EAE0D5" roughness={1} />
                </mesh>
                <mesh position={[0, wallHeight - 2, 0]}>
                    <boxGeometry args={[6, 4, 1]} />
                    <meshStandardMaterial color="#EAE0D5" roughness={1} />
                </mesh>

                {/* Porte cliquable (fermée derrière le visiteur) pour sortir */}
                <group position={[0, 2, 0]}>
                    <mesh position={[0, 0, -0.2]} userData={{ link: "/gallery" }}>
                        <boxGeometry args={[6, 4, 0.4]} />
                        <meshStandardMaterial color="#111111" roughness={0.9} />
                    </mesh>
                    <mesh position={[-2.5, 0, -0.45]} userData={{ link: "/gallery" }}>
                        <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                </group>

            </group>

            {/* Panneau sur pied d'accueil (à la fin du tapis rouge) */}
            <group position={[2.2, 0, 1.5]} rotation={[0, -Math.PI / 6, 0]}>
                {/* Pied */}
                <mesh position={[0, 0.75, 0]}>
                    <cylinderGeometry args={[0.04, 0.04, 1.5]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Socle */}
                <mesh position={[0, 0.05, 0]}>
                    <cylinderGeometry args={[0.3, 0.3, 0.1]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                {/* Plateau du panneau incliné */}
                <mesh position={[0, 1.5, 0]} rotation={[-Math.PI / 8, 0, 0]}>
                    <boxGeometry args={[1.5, 1, 0.05]} />
                    <meshStandardMaterial color="#1A1A1A" />
                </mesh>
                {/* Textes sur le panneau */}
                <group position={[0, 1.5, 0.03]} rotation={[-Math.PI / 8, 0, 0]}>
                    <Text
                        position={[0, 0.2, 0]}
                        fontSize={0.12}
                        color="#FFFFFF"
                        anchorX="center"
                        anchorY="middle"
                        letterSpacing={0.1}
                    >
                        BIENVENUE
                    </Text>
                    <Text
                        position={[0, -0.1, 0]}
                        fontSize={0.06}
                        color="#AAAAAA"
                        anchorX="center"
                        anchorY="middle"
                        maxWidth={1.2}
                        textAlign="center"
                    >
                        Vous entrez dans la galerie immersive.
                    </Text>
                    <Text
                        position={[0, -0.3, 0]}
                        fontSize={0.04}
                        color="#D8A48F"
                        anchorX="center"
                        anchorY="middle"
                        letterSpacing={0.05}
                    >
                        → CLIQUEZ SUR UNE ŒUVRE POUR AVOIR PLUS DE DÉTAILS
                    </Text>
                </group>
            </group>

            {/* Tapis rouge plus long (de 9.5 à 1.5) */}
            <mesh position={[0, 0.02, 5.5]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[3, 8]} />
                <meshStandardMaterial color="#8B0000" roughness={0.9} />
            </mesh>

            {/* Poteaux VIP gauches */}
            {postZs.map((z, i) => (
                <group key={`l-${i}`} position={[-2, 0, z]}>
                    <mesh position={[0, 0.05, 0]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 0.5, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 1]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 1.05, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                </group>
            ))}

            {/* Poteaux VIP droits */}
            {postZs.map((z, i) => (
                <group key={`r-${i}`} position={[2, 0, z]}>
                    <mesh position={[0, 0.05, 0]}>
                        <cylinderGeometry args={[0.15, 0.15, 0.1]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 0.5, 0]}>
                        <cylinderGeometry args={[0.03, 0.03, 1]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                    <mesh position={[0, 1.05, 0]}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                    </mesh>
                </group>
            ))}

            {/* Cordes VIP */}
            {ropes.map((curve, i) => (
                <mesh key={`rope-${i}`}>
                    <tubeGeometry args={[curve, 20, 0.03, 8, false]} />
                    <meshStandardMaterial color="#8B0000" roughness={0.9} />
                </mesh>
            ))}
        </group>
    );
}

