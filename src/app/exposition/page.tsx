"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";

import { InteractionController } from "./_components/controllers/InteractionController";
import { CameraAnimator } from "./_components/controllers/CameraAnimator";
import { MobileTouchLook } from "./_components/controllers/MobileTouchLook";
import { PlayerController } from "./_components/controllers/PlayerController";
import { CameraSetup } from "./_components/controllers/CameraSetup";
import { MuseumEnsemble } from "./_components/scene/MuseumEnsemble";
import { Loader } from "./_components/ui/ExpositionUI";
import { VirtualJoystick } from "./_components/ui/VirtualJoystick";

export default function ExpositionPage() {
    const [startLocked, setStartLocked] = useState(false);
    const [selectedArtworkData, setSelectedArtworkData] = useState<any | null>(null);
    const controlsRef = useRef<any>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.matchMedia("(max-width: 1024px)").matches || ("ontouchstart" in window) || navigator.maxTouchPoints > 0);
            
            // Écouter les changements de taille d'écran (optionnel mais recommandé)
            const handleResize = () => setIsMobile(window.innerWidth <= 1024 || ("ontouchstart" in window) || navigator.maxTouchPoints > 0);
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleCloseArtwork = () => {
        setSelectedArtworkData(null);
        setStartLocked(true);
        if (!isMobile) {
            setTimeout(() => {
                controlsRef.current?.lock();
            }, 100);
        }
    };

    return (
        <main className="fixed inset-0 w-screen h-screen bg-[#EAE0D5] overflow-hidden">
            {/* Écran d'accueil */}
            {!startLocked && !selectedArtworkData && (
                <div className="absolute inset-0 z-50 bg-[#EAE0D5]/90 backdrop-blur-md flex flex-col items-center justify-center text-gray-900 p-8">
                    <h1 className="font-cormorant text-5xl md:text-8xl italic mb-4 text-center tracking-wide text-[#A44A3F]">La galerie de Scarlett</h1>
                    <p className="text-xs uppercase tracking-[0.5em] text-[#A44A3F]/70 mb-12">5 Salles • 5 Collections</p>
                    
                    <div className="flex flex-col items-center space-y-4 max-w-md text-center">
                        <p className="text-[10px] text-gray-500 mb-4 uppercase tracking-widest">Navigation</p>
                        {!isMobile ? (
                            <div className="flex gap-6 opacity-80 text-xs text-gray-800 justify-center">
                                <span className="flex items-center gap-2"><span className="border border-gray-400 px-2 py-1 rounded">Z Q S D</span> Avancer</span>
                                <span className="flex items-center gap-2"><span className="border border-gray-400 px-2 py-1 rounded">SOURIS</span> Regarder</span>
                                <span className="flex items-center gap-2 text-terra font-bold"><span className="border border-terra px-2 py-1 rounded">CLIC</span> Voir la toile</span>
                            </div>
                        ) : (
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 opacity-80 text-xs text-gray-800 justify-center">
                                <span className="flex items-center gap-2">
                                    <span className="border border-gray-400 px-2 py-1 rounded font-bold text-[10px] uppercase">
                                        Joystick
                                    </span> 
                                    Avancer
                                </span>
                                <span className="flex items-center gap-2"><span className="border border-gray-400 px-2 py-1 rounded font-bold text-[10px] uppercase">Glisser</span> Regarder</span>
                                <span className="flex items-center gap-2 text-terra font-bold"><span className="border border-terra px-2 py-1 rounded">TAP</span> Voir la toile</span>
                            </div>
                        )}
                        <button 
                            onClick={() => {
                                setStartLocked(true);
                                if (!isMobile) {
                                    setTimeout(() => {
                                        controlsRef.current?.lock();
                                    }, 100);
                                }
                            }}
                            className="mt-12 bg-[#A44A3F] text-white px-12 py-4 text-xs uppercase tracking-widest hover:bg-black transition-all duration-300 shadow-xl shadow-[#A44A3F]/20"
                        >
                            Reprendre / Débuter
                        </button>
                        <Link href="/gallery" className="mt-8 text-[10px] text-gray-500 hover:text-black uppercase tracking-widest transition-colors">
                            &larr; Retour à l'accueil
                        </Link>
                    </div>
                </div>
            )}

            {/* Viseur au centre de l'écran pour aider à cliquer */}
            {startLocked && !selectedArtworkData && !isMobile && (
                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-white/80 rounded-full -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none mix-blend-difference"></div>
            )}
            
            {/* Aide textuelle en mode marche (Desktop) */}
            {startLocked && !selectedArtworkData && !isMobile && (
                <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 text-gray-500 text-[10px] uppercase tracking-widest pointer-events-none">
                    Visez un tableau et cliquez pour le voir • "Échap" pour sortir
                </div>
            )}

            {/* Bouton Quitter et Joystick (Mobile) */}
            {startLocked && !selectedArtworkData && isMobile && (
                <>
                    <button 
                        onClick={() => setStartLocked(false)}
                        className="absolute top-8 right-8 z-50 bg-black/40 backdrop-blur border border-white/20 text-white px-4 py-2 uppercase text-[10px] tracking-widest rounded-full"
                    >
                        Quitter
                    </button>

                    <VirtualJoystick />
                </>
            )}

            <Canvas 
                className="w-full h-full touch-none"
                dpr={[1, 1.5]} 
                gl={{ powerPreference: "high-performance", antialias: true }}
            >
                <fog attach="fog" args={['#F4EEE8', 10, 80]} />
                <color attach="background" args={['#F4EEE8']} />
                
                <ambientLight intensity={1.5} color="#FFECD6" />
                <directionalLight position={[0, 20, 10]} intensity={1.2} color="#FFFFFF" />
                
                <Suspense fallback={<Loader />}>
                    <CameraSetup />
                    <MuseumEnsemble 
                        selectedArtworkId={selectedArtworkData?.artwork?.id || null} 
                        onCloseArtwork={handleCloseArtwork}
                    />
                </Suspense>

                {startLocked && !selectedArtworkData && (
                    <>
                        <PlayerController />
                        {!isMobile && (
                            <PointerLockControls 
                                ref={controlsRef}
                                onUnlock={() => setStartLocked(false)}
                            />
                        )}
                        {isMobile && <MobileTouchLook />}
                        <InteractionController onSelect={setSelectedArtworkData} isMobile={isMobile} />
                    </>
                )}

                {/* Si on regarde une toile, on anime la caméra */}
                {selectedArtworkData && (
                    <CameraAnimator activeData={selectedArtworkData} />
                )}
            </Canvas>
        </main>
    );
}

