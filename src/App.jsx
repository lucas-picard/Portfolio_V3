// Fichier principal de l'application 2D
// 
// ========================================================================

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Menu, Externe } from "./config/routes.jsx"
import style from "./App.module.css"
import BtnRetour from "./components/ui/btnRetour/btnRetour.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <nav className={style.menu}>
        {/* Liste le menu */}
        {Menu.map(({ path, label }) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      <BtnRetour />

      </nav>

      <Routes>
        {/* Routes externes */}
        {Externe.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {/* Routes menu */}
        {Menu.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        
      </Routes>
    </BrowserRouter>
  );
}
