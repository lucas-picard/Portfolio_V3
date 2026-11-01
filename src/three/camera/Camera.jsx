// Fichier contient la caméra principal
// 
// ========================================================================

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Camera() {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={ [ 0, -1, 28 ] }
        fov={ 45 }
        near={ 0.1 }
        far={ 1000 }
      />

      {/* <PerspectiveCamera
        makeDefault
        position={ [ 0, -3, 18 ] }
        fov={ 40 }
        near={ 10 }
        far={ 20 }
      /> */}

      {/* OrbitControls is imported and ready to enable when needed. */}
      {/* <OrbitControls makeDefault /> */}
    </>
  )
}