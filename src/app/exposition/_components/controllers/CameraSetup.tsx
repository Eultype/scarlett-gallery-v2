"use client";

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export function CameraSetup() {
    const { camera } = useThree();
    useEffect(() => {
        camera.position.set(0, 2.5, 5);
        camera.rotation.set(0, 0, 0);
    }, [camera]);
    return null;
}
