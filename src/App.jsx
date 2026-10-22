// Fichier principal de l'application 2D
// 
// ========================================================================

import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Menu, Externe } from "./config/routes.jsx"
import style from "./App.module.css"

export default function App() {
  return (
    <BrowserRouter>
      <nav className={style.menu}>
        {Menu.map(({ path, label }) => (
          <Link key={path} to={path}>
            {label}
          </Link>
        ))}
      </nav>

      <Routes>
        {Externe.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}

        {Menu.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
        
      </Routes>
    </BrowserRouter>
  );
}
