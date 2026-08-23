"use client";

import Link from "next/link";
import * as THREE from "three";
import { useLoader, useThree } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import { motion } from "framer-motion";
import { TypewriterText } from "../ui/ExpositionUI";

export function Artwork3D({ 
    item, 
    position, 
    rotation, 
    isLeftWall,
    isSelected,
    onClose,
    startZ
}: { 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    item: any, position: [number, number, number], rotation: [number, number, number], isLeftWall: boolean, isSelected: boolean, onClose: () => void, startZ: number 
}) {
    const { gl } = useThree();
    const texture = useLoader(THREE.TextureLoader, item.image + "?v=2") as THREE.Texture;
    
    // Optimisation de la netteté à distance (Anisotropie)
    texture.anisotropy = gl.capabilities.getMaxAnisotropy();
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipMapLinearFilter;
    
    const img = texture.image as HTMLImageElement;
    const imageAspect = img.width / img.height;
    
    let targetWidth = 2;
    let targetHeight = 2 / imageAspect;
    
    const match = item.dimensions.match(/(\d+(?:[.,]\d+)?)\s*[xX]\s*(\d+(?:[.,]\d+)?)/);
    if (match) {
        const d1 = parseFloat(match[1].replace(",", "."));
        const d2 = parseFloat(match[2].replace(",", "."));
        const physicalArea = d1 * d2;
        const targetArea3D = physicalArea * 0.0025;
        
        targetHeight = Math.sqrt(targetArea3D / imageAspect);
        targetWidth = targetHeight * imageAspect;
        
        if (targetHeight < 0.8) {
            const scaleUp = 0.8 / targetHeight;
            targetHeight *= scaleUp;
            targetWidth *= scaleUp;
        }
    }

    // Positionnement de la caméra
    // Si on est sur grand écran OU en mode paysage, on considère que c'est "desktop" (isMobile = false)
    const isMobile = typeof window !== 'undefined' ? 
        (window.innerWidth < 1280 && window.innerHeight > window.innerWidth) 
        : false;
        
    // 1. Recul dynamique (plus la toile est grande, plus on recule)
    const maxDim = Math.max(targetWidth, targetHeight);
    const baseOffset = isMobile ? 5 : 3.5;
    const additionalOffset = Math.max(0, maxDim - 1.5) * 1.2; 
    const finalOffset = Math.min(baseOffset + additionalOffset, 11); // On limite à 11 pour ne pas traverser le mur opposé
    const camOffset = isLeftWall ? finalOffset : -finalOffset; 

    // 2. Décalage latéral (pan) pour laisser de la place à la fenêtre sur Desktop
    // La fenêtre est à gauche de la toile (local -X). On décale donc la caméra vers la gauche pour centrer l'ensemble.
    const lateralShift = !isMobile ? (targetWidth * 0.25 + 0.3) : 0;
    const globalZ = startZ + position[2] + (isLeftWall ? lateralShift : -lateralShift);
    
    const targetPos = new THREE.Vector3(position[0] + camOffset, position[1], globalZ);
    
    // Rotation absolue forcée pour la caméra (90 degrés vers la gauche ou vers la droite)
    const targetEuler = new THREE.Euler(0, isLeftWall ? Math.PI / 2 : -Math.PI / 2, 0, 'YXZ');
    const targetQuat = new THREE.Quaternion().setFromEuler(targetEuler);

    const userData = {
        artwork: item,
        targetPosition: targetPos,
        targetQuaternion: targetQuat
    };

    return (
        <group position={position} rotation={rotation}>
            {/* L'image elle-même cliquable */}
            <mesh position={[0, 0, 0.1]} userData={userData}>
                <planeGeometry args={[targetWidth, targetHeight]} />
                <meshBasicMaterial map={texture} transparent />
            </mesh>
            
            <mesh position={[0, -0.05, 0.02]}>
                <planeGeometry args={[targetWidth + 0.15, targetHeight + 0.15]} />
                <meshBasicMaterial color="black" opacity={0.2} transparent />
            </mesh>

            {/* Cartel également cliquable */}
            <mesh position={[targetWidth/2 + 0.5, -targetHeight/2 + 0.1, 0.02]} userData={userData}>
                <boxGeometry args={[0.8, 0.35, 0.02]} />
                <meshStandardMaterial color="#1A1A1A" roughness={0.8} />
            </mesh>

            <Text
                position={[targetWidth/2 + 0.15, -targetHeight/2 + 0.18, 0.035]}
                fontSize={0.055}
                color="#FFFFFF"
                anchorX="left"
                anchorY="middle"
                maxWidth={0.7}
            >
                {item.title}
            </Text>
            <Text
                position={[targetWidth/2 + 0.15, -targetHeight/2 + 0.03, 0.035]}
                fontSize={0.035}
                color="#AAAAAA"
                anchorX="left"
                anchorY="middle"
                letterSpacing={0.1}
                maxWidth={0.7}
            >
                {item.dimensions}
            </Text>
            
            {/* Spotlight supprimé pour des raisons de performances (il y en avait 35 en même temps, ce qui faisait chauffer le GPU) */}
            {/* Bulle HTML Bureau (à gauche) */}
            {isSelected && (
                <Html
                    position={[-targetWidth/2 - 0.4, 0, 0]}
                    style={{ transform: "translate3d(-100%, -50%, 0)" }}
                    zIndexRange={[100, 0]}
                >
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-[360px] bg-black/80 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-white shadow-2xl flex-col hidden landscape:flex xl:flex"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-[#D8A48F] mb-4 flex">
                            <TypewriterText text={item.category} delay={0.2} />
                        </p>
                        
                        <h2 className="text-4xl font-cormorant italic mb-6 leading-tight flex flex-wrap">
                            <TypewriterText text={item.title} delay={0.6} />
                        </h2>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            className="space-y-3 text-sm text-gray-300 font-light mb-8"
                        >
                            <p className="flex justify-between border-b border-white/10 pb-2">
                                <span>Médium</span> 
                                <span className="text-white">{item.dimensions.split(' - ')[0].replace(/originale/i, '').trim()}</span>
                            </p>
                            {item.serie && (
                                <p className="flex justify-between border-b border-white/10 pb-2">
                                    <span>Série</span> 
                                    <span className="text-white">{item.serie}</span>
                                </p>
                            )}
                            <p className="flex justify-between border-b border-white/10 pb-2">
                                <span>Format</span> 
                                <span className="text-white text-right max-w-[200px] truncate">{item.dimensions.split(' - ')[1] ? item.dimensions.split(' - ')[1].trim() : "Original"}</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2, duration: 0.5 }}
                            className="flex flex-col gap-3 mt-auto"
                        >
                            <Link 
                                href={`/gallery/${item.id}`}
                                className="block w-full text-center bg-white text-black py-4 uppercase text-xs tracking-widest hover:bg-[#A44A3F] hover:text-white transition-colors rounded-sm font-bold"
                            >
                                Acquérir l&apos;œuvre
                            </Link>
                            <button 
                                onClick={onClose}
                                className="block w-full text-center border border-white/30 py-4 uppercase text-xs tracking-widest hover:bg-white/10 transition-colors rounded-sm"
                            >
                                Reprendre la marche
                            </button>
                        </motion.div>
                    </motion.div>
                </Html>
            )}

            {/* Bulle HTML Mobile (en dessous) */}
            {isSelected && (
                <Html
                    position={[0, -targetHeight/2 - 0.2, 0]}
                    style={{ transform: "translate3d(-50%, 0, 0)" }}
                    zIndexRange={[100, 0]}
                >
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-[340px] sm:w-[500px] md:w-[640px] lg:w-[760px] bg-black/80 backdrop-blur-md p-5 md:p-6 rounded-2xl lg:rounded-3xl border border-white/20 text-white shadow-2xl flex-col flex landscape:hidden xl:hidden"
                    >
                        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.4em] text-[#D8A48F] mb-2 md:mb-3 flex justify-center">
                            <TypewriterText text={item.category} delay={0.2} />
                        </p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-cormorant italic mb-4 leading-tight flex flex-wrap justify-center text-center">
                            <TypewriterText text={item.title} delay={0.4} />
                        </h2>
                        
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="space-y-2 md:space-y-3 text-[10px] sm:text-xs md:text-sm text-gray-300 font-light mb-4 md:mb-6"
                        >
                            <p className="flex justify-between border-b border-white/10 pb-1">
                                <span>Médium</span> 
                                <span className="text-white">{item.dimensions.split(' - ')[0].replace(/originale/i, '').trim()}</span>
                            </p>
                            {item.serie && (
                                <p className="flex justify-between border-b border-white/10 pb-1">
                                    <span>Série</span> 
                                    <span className="text-white">{item.serie}</span>
                                </p>
                            )}
                            <p className="flex justify-between border-b border-white/10 pb-1">
                                <span>Format</span> 
                                <span className="text-white text-right max-w-[120px] md:max-w-[250px] lg:max-w-[350px] truncate">{item.dimensions.split(' - ')[1] ? item.dimensions.split(' - ')[1].trim() : "Original"}</span>
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.5, duration: 0.5 }}
                            className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-auto"
                        >
                            <Link 
                                href={`/gallery/${item.id}`}
                                className="flex-1 text-center bg-white text-black py-3 uppercase text-[10px] sm:text-xs md:text-sm tracking-widest hover:bg-[#A44A3F] hover:text-white transition-colors rounded-sm font-bold"
                            >
                                Acquérir l&apos;œuvre
                            </Link>
                            <button 
                                onClick={onClose}
                                className="flex-1 text-center border border-white/30 py-3 uppercase text-[10px] sm:text-xs md:text-sm tracking-widest hover:bg-white/10 transition-colors rounded-sm"
                            >
                                Reprendre la visite
                            </button>
                        </motion.div>
                    </motion.div>
                </Html>
            )}
        </group>
    );
}

