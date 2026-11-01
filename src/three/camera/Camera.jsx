// Fichier contient la caméra principal
// 
// ========================================================================

import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

export default function Camera( { fov = 45 } ) {
  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={ [ 0, -1, 28 ] }
        fov={ fov }
        near={ 0.1 }
        far={ 1000 }
      />

      {/* OrbitControls is imported and ready to enable when needed. */}
      {/* <OrbitControls makeDefault /> */}
    </>
  )
}