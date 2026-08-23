"use client";

import { collectionNames, collections, displayNames } from "../ExpositionState";
import { CollectionRoom } from "./CollectionRoom";
import { VIPEntrance } from "./VIPEntrance";

export function MuseumEnsemble({ 
    selectedArtworkId, 
    onCloseArtwork 
}: { 
    selectedArtworkId: string | null, 
    onCloseArtwork: () => void 
}) {
    const corridorWidth = 14; 
    const wallHeight = 8;
    let currentZ = 0;

    return (
        <group>
            <VIPEntrance corridorWidth={corridorWidth} wallHeight={wallHeight} />

            {collectionNames.map((category, index) => {
                const items = collections[category];
                const roomLength = Math.max(20, (Math.ceil(items.length / 2) + 1) * 6);
                
                const prevCategory = index > 0 ? collectionNames[index - 1] : null;
                const prevName = prevCategory ? displayNames[prevCategory] : "SORTIE / ACCUEIL";

                const room = (
                    <CollectionRoom
                        key={category}
                        category={category}
                        items={items}
                        startZ={currentZ}
                        roomLength={roomLength}
                        width={corridorWidth}
                        height={wallHeight}
                        isLast={index === collectionNames.length - 1}
                        prevName={prevName}
                        selectedArtworkId={selectedArtworkId}
                        onCloseArtwork={onCloseArtwork}
                    />
                );

                currentZ -= roomLength; 
                return room;
            })}
            
            <mesh position={[0, 0, currentZ/2 + 5]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[corridorWidth, Math.abs(currentZ) + 20]} />
                <meshStandardMaterial color="#D9CABC" roughness={0.9} />
            </mesh>
        </group>
    );
}
