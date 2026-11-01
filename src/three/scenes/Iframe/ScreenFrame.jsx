
// Importation des bibliothèques et des composants nécessaires
import Frame from 'react-frame-component'
import { Html } from '@react-three/drei'

// Importation des composants et scènes
import CopieStyles from '../../../components/CopieStyles.jsx'
import App from '../../../App.jsx'

// Importation des styles globaux et des tokens CSS
import '../../../styles/tokens.css'
import './ScreenFrame.css'

export default function ScreenFrame() {
  return (
    <Html 
        transform 
        position={[0, -2.9, 0.21]} 
        distanceFactor={7.2}
        wrapperClass="htmlScreen"
    >
        <Frame>
            <CopieStyles />
            <App />
        </Frame>
    </Html>
  )
}