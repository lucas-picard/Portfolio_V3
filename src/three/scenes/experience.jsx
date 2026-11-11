// Fichier contenant toute la scene 3D principal
// 
// ========================================================================



import Import from '../../components/Import'
import Ground from '../Objects/Gound'
import Top from '../Objects/Top'
import VoxelBot from '../Objects/VoxelBot'
import { Text3D } from '@react-three/drei'


export default function Experience()
{

   

    const latte_x = -13
    const latte_z = -0.4

    return(
        <>

        {/* Panneau */}
            <Import
            key="panneau"
            path="/models/Fonctionnel/panneau.glb"
            position={{ x: 0, y: -2.8, z: 0.2 }}
            scale={2}
            receiveShadow
            />

        {/* Wall */}
            <Import
            key="wall"
            path="/models/Decors/wall.glb"
            position={{ x: 0, y: -2.5, z: -0.15 }}
            scale={1}
            />


        {/* Arcade */}
            <Import
            key="arcade"
            path="/models/Fonctionnel/arcade.glb"
            position={{ x: -16, y: -10.2, z: 0.9 }}
            scale={2}
            />

         {/* Cadre */}
            <Import
            key="cadre"
            path="/models/Decors/cadre.glb"
            position={{ x: 15, y: 1, z: -0.4 }}
            scale={0.5}
            />

        {/* Kakemono */}
            <Import
            key="kakemono"
            path="/models/Decors/kakemono.glb"
            position={{ x: 12, y: -7, z: -0.3 }}
            scale={1}
            />
        
        {/* Bar led */}
            <Import
            key="barLed"
            path="/models/Decors/barre_led.glb"
            position={{ x: 0, y: 3.8, z: 0.6 }}
            scale={2}
            />

        {/* Etagere */}
            <Import
            key="etagere"
            path="/models/Decors/etagere_murale.glb"
            position={{ x: -15, y: 3.8, z: 0.2 }}
            scale={1}
            />

         {/* PC */}
            <Import
            key="pc"
            path="/models/Decors/pc_gamer.glb"
            position={{ x: 10, y: -9.55, z: 0.7 }}
            scale={1}
            />

        {/* plantes_murales */}
            <Import
            key="plantes_murales"
            path="/models/Decors/plantes_murales.glb"
            position={{ x: 15.5, y: -3.5, z: 0.2 }}
            scale={1}
            />

        {/* terminal */}
            <Import
            key="terminal"
            path="/models/Decors/terminal.glb"
            position={{ x: 15.5, y: -10, z: 1 }}
            scale={2}
            />
        
        {/* Robot cubique */}
            <VoxelBot position={[-15, 0.2, 1]} />

        {/* stoneLantern */}
            <Import
            key="stoneLantern"
            path="/models/Decors/stoneLantern.glb"
            position={{ x: -12.8, y: -10, z: 1 }}
            scale={1}
            />

        {/* bonsai */}
            <Import
            key="bonsai"
            path="/models/Decors/bonsai.glb"
            position={{ x: -13.5, y: 4.01, z: 0.2 }}
            scale={1}
            />

        {/* smallPlant */}
            <Import
            key="smallPlant"
            path="/models/Decors/smallPlant.glb"
            position={{ x: -17, y: 0, z: 2 }}
            scale={1}
            />

        {/* mangas*/}
            <Import
            key="mangas"
            path="/models/Decors/mangas.glb"
            position={{ x: -16, y: 4, z: -0.3 }}
            scale={1}
            />

      

        {/* poteau_electrique */}
            <Import
            key="poteau_electrique"
            path="/models/Decors/poteau_electrique.glb"
            position={{ x: 0, y: 8, z: 1 }}
            scale={1.5}
            />




        {/* plaques_acoustiques_lattes */}
            <Import
            key="plaques_acoustiques_lattes"
            path="/models/Decors/plaques_acoustiques_lattes.glb"
            position={{ x: latte_x, y: -8, z: latte_z }}
            scale={1}
            />

        {/* plaques_acoustiques_lattes2 */}
            <Import
            key="plaques_acoustiques_lattes2"
            path="/models/Decors/plaques_acoustiques_lattes.glb"
            position={{ x: latte_x, y: -5, z: latte_z }}
            scale={1}
            />

        {/* plaques_acoustiques_lattes3 */}
            <Import
            key="plaques_acoustiques_lattes3"
            path="/models/Decors/plaques_acoustiques_lattes.glb"
            position={{ x: latte_x, y: -2, z: latte_z }}
            scale={1}
            />



          {/* enseigne */}
            <Import
            key="enseigne"
            path="/models/Fonctionnel/enseigne.glb"
            position={{ x: 0, y: 8, z: 1 }}
            scale={1.5}
            />

            <Text3D
                font="/font/VT323_Regular.json"
                position={ [ -3.5, 7.48, 1.33 ] }
                size={ 0.8 }
                height={ 0.09 }
                curveSegments={ 1 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                PORTFOLIO
            <meshBasicMaterial color="#7cc84a" />
        </Text3D>

        <Text3D
                font="/font/VT323_Regular.json"
                position={ [ -3, 6.82, 1.33 ] }
                size={ 0.4 }
                height={ 0.09 }
                curveSegments={ 1 }
                bevelEnabled
                bevelThickness={ 0.02 }
                bevelSize={ 0.02 }
                bevelOffset={ 0 }
                bevelSegments={ 5 }
            >
                v3.0.0
            <meshBasicMaterial color="#7cc84a" />
        </Text3D>

        

             {/* Encadrement des boutons */}
            <Import
            key="encadre"
            path="/models/Decors/Encadre.glb"
            position={{ x: -11.2, y: -2.8, z: 0 }}
            scale={2.233}
            />


        {/* Sol, Plafond */}
            <Ground />
            <Top />

            
        </>
    )
}