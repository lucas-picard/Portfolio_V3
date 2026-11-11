// Fichier du modèle 3D des catégories de compétences
//
// ========================================================================

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bounds, useGLTF } from "@react-three/drei"

function Model({ path }) {
    const { scene } = useGLTF(path)
    const modelRef = useRef(null)

    useFrame((_, delta) => {
        if (modelRef.current) modelRef.current.rotation.y += delta * 0.2
    })

    return (
        <group ref={modelRef}>
            <primitive object={scene} />
        </group>
    )
}

export default function SkillModel({ file }) {
    return (
        <Canvas
            aria-hidden="true"
            camera={{ position: [0, 0, 5], fov: 35 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight position={[3, 4, 5]} intensity={2} />
            <Suspense fallback={null}>
                <Bounds fit clip observe margin={1.5}>
                    <Model path={`/models/Iframe/${file}`} />
                </Bounds>
            </Suspense>
        </Canvas>
    )
}
