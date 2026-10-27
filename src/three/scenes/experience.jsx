// Fichier contenant toute la scene 3D principal
// 
// ========================================================================

// Loader
import Panneau from '../Objects/Loader/panneau'
import Encadre from '../Objects/Loader/Encadre'
import Wall from '../Objects/Loader/wall'
import Arcade from '../Objects/Loader/Arcade'

// BTN
import BTNabout from '../Objects/Loader/BTN/About'
import BTNproject from '../Objects/Loader/BTN/Project'
import BTNskill from '../Objects/Loader/BTN/Skill'
import BTNjourney from '../Objects/Loader/BTN/Journey'
import BTNcontact from '../Objects/Loader/BTN/Contact'

// Mesh
import Ground from '../Objects/Mesh/Gound'


export default function Experience()
{
    return(
        <>
            <Encadre />
            <Wall />
            <Panneau />
            <Arcade />


            <BTNabout />
            <BTNproject />
            <BTNskill />
            <BTNjourney />
            <BTNcontact />

            <Ground />
        </>
    )
}