"use client";

import * as THREE from "three";
import { Text } from "@react-three/drei";
import { collectionColors, displayNames } from "../ExpositionState";
import { Artwork3D } from "./Artwork3D";

export function CollectionRoom({ 
    category, 
    items, 
    startZ, 
    roomLength, 
    width, 
    height, 
    isLast,
    prevName,
    selectedArtworkId,
    onCloseArtwork
}: { 
    category: string, items: any[], startZ: number, roomLength: number, width: number, height: number, isLast: boolean, prevName: string, selectedArtworkId: string | null, onCloseArtwork: () => void 
}) {
    const wallColor = collectionColors[category] || "#D6C5B3";
    const displayName = displayNames[category] || category;
    
    const spacing = roomLength / (Math.ceil(items.length / 2) + 1);

    return (
        <group position={[0, 0, startZ]}>
            <mesh position={[0, height, -roomLength/2]} rotation={[Math.PI / 2, 0, 0]}>
                <planeGeometry args={[width, roomLength]} />
                <meshStandardMaterial color="#EAE0D5" roughness={1} />
            </mesh>

            <mesh position={[-width/2, height/2, -roomLength/2]}>
                <boxGeometry args={[1, height, roomLength]} />
                <meshStandardMaterial color={wallColor} roughness={1} />
            </mesh>
            
            <mesh position={[width/2, height/2, -roomLength/2]}>
                <boxGeometry args={[1, height, roomLength]} />
                <meshStandardMaterial color={wallColor} roughness={1} />
            </mesh>

            <group position={[0, height - 2.5, 0]}>
                <mesh position={[-1.5, 1.25, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2.5]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                <mesh position={[1.5, 1.25, 0]}>
                    <cylinderGeometry args={[0.02, 0.02, 2.5]} />
                    <meshStandardMaterial color="#222" />
                </mesh>
                
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3.5, 0.8, 0.1]} />
                    <meshStandardMaterial color="#1A1A1A" roughness={0.5} />
                </mesh>
                
                <Text
                    position={[0, 0, 0.06]}
                    fontSize={0.3}
                    color="#FFFFFF"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.2}
                >
                    {displayName.toUpperCase()}
                </Text>
                
                <Text
                    position={[0, 0, -0.06]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={0.3}
                    color="#FFFFFF"
                    anchorX="center"
                    anchorY="middle"
                    letterSpacing={0.2}
                >
                    {prevName.toUpperCase()}
                </Text>
            </group>

            {!isLast && (
                <group position={[0, 0, -roomLength]}>
                    <mesh position={[-width/2 + 2, height/2, 0]}>
                        <boxGeometry args={[width/2 - 2, height, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>
                    <mesh position={[width/2 - 2, height/2, 0]}>
                        <boxGeometry args={[width/2 - 2, height, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>
                    <mesh position={[0, height - 1, 0]}>
                        <boxGeometry args={[8, 2, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>
                </group>
            )}

            {isLast && (
                <group position={[0, 0, -roomLength]}>
                    {/* Mur du fond avec ouverture centrale (porte) */}
                    <mesh position={[-width/4 - 1.5, height/2, 0]}>
                        <boxGeometry args={[width/2 - 3, height, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>
                    <mesh position={[width/4 + 1.5, height/2, 0]}>
                        <boxGeometry args={[width/2 - 3, height, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>
                    {/* Dessus de la porte */}
                    <mesh position={[0, height - 2, 0]}>
                        <boxGeometry args={[6, 4, 1]} />
                        <meshStandardMaterial color={wallColor} roughness={1} />
                    </mesh>

                    {/* La porte elle-même (cliquable pour sortir) */}
                    <group position={[0, 2, 0]}>
                        <mesh position={[0, 0, 0.2]} userData={{ link: "/gallery" }}>
                            <boxGeometry args={[6, 4, 0.4]} />
                            <meshStandardMaterial color="#111111" roughness={0.9} />
                        </mesh>
                        {/* Poignée de la porte */}
                        <mesh position={[2.5, 0, 0.45]} userData={{ link: "/gallery" }}>
                            <cylinderGeometry args={[0.05, 0.05, 0.4]} />
                            <meshStandardMaterial color="#D8A48F" metalness={0.8} roughness={0.2} />
                        </mesh>
                    </group>
                    
                    {/* Panneau sur pied à côté de la porte */}
                    <group position={[-4, 0, 1.5]} rotation={[0, Math.PI / 6, 0]}>
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
                                FIN DE LA VISITE
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
                                Merci d'avoir visité l'exposition.
                            </Text>
                            <Text
                                position={[0, -0.3, 0]}
                                fontSize={0.05}
                                color="#D8A48F"
                                anchorX="center"
                                anchorY="middle"
                                letterSpacing={0.05}
                            >
                                → CLIQUEZ SUR LA PORTE
                            </Text>
                        </group>
                    </group>
                </group>
            )}

            {items.map((item, index) => {
                const isLeftWall = index % 2 === 0;
                const stepIndex = Math.floor(index / 2);
                const z = - (stepIndex + 1) * spacing;
                const y = 3; 
                
                const x = isLeftWall ? -width/2 + 0.6 : width/2 - 0.6;
                const rotY = isLeftWall ? Math.PI / 2 : -Math.PI / 2;

                return (
                    <Artwork3D 
                        key={item.id}
                        item={item}
                        position={[x, y, z]}
                        rotation={[0, rotY, 0]}
                        isLeftWall={isLeftWall}
                        isSelected={selectedArtworkId === item.id}
                        onClose={onCloseArtwork}
                        startZ={startZ}
                    />
                );
            })}
        </group>
    );
}

