// Fichier de configuration des routes de l'application
// 
// ========================================================================

import Home from "../scenes/Home/home.jsx"
import About from "../scenes/About/about.jsx"
import Journey from "../scenes/Journey/Journey.jsx"
import Contact from "../scenes/Contact/Contact.jsx"
import NotFound from "../scenes/NotFound/NotFound.jsx"
import Skills from "../scenes/Skills/Skills.jsx"
import Projects from "../scenes/Projects/Projects.jsx"


// ========================================================================
// ----------------------------- APP 2D -----------------------------------
// ========================================================================


// Chemain lier aux components de la scenes
export const Menu = [
  { path: "/about", element: <About />, label: "About" },
  { path: "/journey", element: <Journey />, label: "Parcours" },
  { path: "/skills", element: <Skills />, label: "Compétences" },
  { path: "/projets", element: <Projects />, label: "Projets" },
  { path: "/contact", element: <Contact />, label: "Contact" }
]

// Chemain lier au component de la scene NotFound
export const Externe = [
  { path: "/", element: <Home />, label: "Home" },
  { path: "*", element: <NotFound />, label: "Not Found" }
]




// ========================================================================
// ----------------------------- APP 3D -----------------------------------
// ========================================================================


// ========================================================================
// ----------------------------- APP Arcades -----------------------------------
// ========================================================================