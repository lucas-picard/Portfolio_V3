// Fichier du composant 3D des projets
//
// ========================================================================

import { Suspense, useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Bounds, useGLTF } from "@react-three/drei"

function Model({ path }) {
    const { scene } = useGLTF(path)
    const model = useMemo(() => scene.clone(true), [scene])
    const modelRef = useRef(null)

    useFrame((_, delta) => {
        if (modelRef.current) modelRef.current.rotation.y += delta * 0.18
    })

    return (
        <group ref={modelRef}>
            <primitive object={model} />
        </group>
    )
}

export default function ProjectModel({ file }) {
    return (
        <div className="project-model" aria-hidden="true">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 35 }}
                dpr={[1, 1.5]}
                gl={{ alpha: true, antialias: true }}
            >
                <ambientLight intensity={1.5} />
                <directionalLight position={[3, 4, 5]} intensity={2} />
                <Suspense fallback={null}>
                    <Bounds fit clip observe margin={1.3}>
                        <Model path={`/models/Iframe/Projects/${file}`} />
                    </Bounds>
                </Suspense>
            </Canvas>
        </div>
    )
}
