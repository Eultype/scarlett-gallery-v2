"use client";

import { useThree, useFrame } from "@react-three/fiber";

export function CameraAnimator({ activeData }: { activeData: any }) {
    const { camera } = useThree();

    useFrame((state, delta) => {
        if (activeData) {
            // Lerp doux de la position
            camera.position.lerp(activeData.targetPosition, 5 * delta);
            // Slerp doux de la rotation vers la rotation cible exacte pré-calculée
            camera.quaternion.slerp(activeData.targetQuaternion, 5 * delta);
        }
    });

    return null;
}

