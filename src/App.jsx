// Fichier principal de l'application 2D
// 
// ========================================================================

// Importation des bibliothèques et des composants nécessaires
import { MemoryRouter, Routes, Route } from "react-router-dom"

// Importation des différentes scènes de l'application
import Home from "./scenes/Home/Home.jsx"
import About from "./scenes/About/About.jsx"
import Journey from "./scenes/Journey/Journey.jsx"
import Skills from "./scenes/Skills/Skills.jsx"
import Projects from "./scenes/Projects/Projects.jsx"
import Contact from "./scenes/Contact/contact.jsx"
import NotFound from "./scenes/NotFound/NotFound.jsx"
import Light2D from "./components/Light/2D_Light.jsx"

// Importation du composant qui écoute les demandes de navigation
import FrameNavigationListener from "./components/FrameNavigationListener.jsx"
import MobileNavigation from "./Mobile/Mobile.jsx"



export default function App() {
  const isEmbedded = window.self !== window.top

  return (
    <MemoryRouter>
      {/* Garde la navigation de l'écran indépendante de l'URL principale. */}
      <FrameNavigationListener />
      <div
        className={isEmbedded ? "app-embedded" : "mobile-app-shell"}
      >
        <Routes>
          {/* Pages accessibles depuis les boutons de la scène 3D. */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isEmbedded && <MobileNavigation />}
      </div>

      {/* Light pour avoir l'effet lumineux sur l'iframe */}
      <Light2D />
    </MemoryRouter>
  );
}
