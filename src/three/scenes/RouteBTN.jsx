// Fichier qui gere le visuel des bouttons celon endroit ou l'on est
// 
// ========================================================================

import Import from '../../components/Import'


export default function RouteBTN() {

    const BTN_select = ( y ) => 
    {
        <mesh position={ [ -12.05, y, 0.1 ] }>
                <boxGeometry args={[0.07, 1.8, 0.1]} />
                <meshStandardMaterial
                color="#a7ff02"
                emissive="#a7ff02"
                emissiveIntensity={3}
                />
            </mesh>
    }

    const choice = () => {
        let about = false
        let project = false
        let skill = false
        let journey = false
        let contact = false

        const input = window.prompt('Quelle section ? (1 a 5)')

        if (input === null) return

        if (input === '1') {
        about = true
        } else if (input === '2') {
        project = true
        } else if (input === '3') {
        skill = true
        } else if (input === '4') {
        journey = true
        } else if (input === '5') {
        contact = true
        } else {
        window.alert('Erreur : entre une valeur entre 1 et 5.')
        return
        }

        if (about) {
            BTN_select(2)
        } else if (project) {
            BTN_select(-0.5)
        } else if (skill) {
            BTN_select(-2.8)
        } else if (journey) {
            BTN_select(-5.2)
        } else if (contact) {
            BTN_select(-7.5)
        }
    }
  
    const BTN_x = -0.77
    const BTN_z = 0.02

  return (
    <>
        {/*==== BOUTONS ==== */}

            {/* ABOUT */}
            <Import
                key="about"
                path="/models/Fonctionnel/BTNabout.glb"
                position={{ x: BTN_x, y: -4.11, z: BTN_z }}
                scale={2.38}
            />
            
            {/* PROJECT */}
            <Import
                key="projets"
                path="/models/Fonctionnel/BTNprojets.glb"
                position={{ x: BTN_x, y: -3.96, z: BTN_z }}
                scale={2.38}
            />


            {/* SKILL */}
            <Import
                key="competences"
                path="/models/Fonctionnel/BTNcompetences.glb"
                position={{ x: BTN_x, y: -3.82, z: BTN_z }}
                scale={2.38}
            />



            {/* JOURNEY */}
            <Import
                key="parcours"
                path="/models/Fonctionnel/BTNparcours.glb"
                position={{ x: BTN_x, y: -3.67, z: BTN_z }}
                scale={2.38}
            />



            {/* CONTACT */}
            <Import
                key="contact"
                path="/models/Fonctionnel/BTNcontact.glb"
                position={{ x: BTN_x, y: -3.52, z: BTN_z }}
                scale={2.38}
            />
    </>
  )
}
