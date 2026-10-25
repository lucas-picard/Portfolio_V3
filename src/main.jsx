// Fichier principal du site web réunissant toutes les scènes et les routes
// des fichiers APP 2D, APP 3D et APP Arcades
// 
// ========================================================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App3D from './App3D.jsx'

import './styles/tokens.css'
import './styles/global.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App3D />
  </StrictMode>,
)


/*
      ,-.
     / \  `.  __..-,O
    :   \ --''_..-'.'
    |    . .-' `. '.
    :     .     .`.'
     \     `.  /  ..
      \      `.   ' .
       `,       `.   \
      ,|,`.        `-.\
     '.||  ``-...__..-`
      |  |
      |__|
      /||\
     //||\\
    // || \\
 __//__||__\\__
'--------------' 

 010011001101111011011110111001101101011 
0110000101110011    
*/