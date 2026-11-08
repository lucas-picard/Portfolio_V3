// Fichier de la page Home
// 
// ========================================================================

import home from "../../content/home"
import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import HomeDiorama from "./HomeDiorama.jsx"

import style from "./Home.module.css"



export default function Home() {
    return (
        <main className={ style.home }>
            <section className={ style.intro }>
                <h1 className={ style.hero }>{ home.title }</h1>
                <h2 className={ style.headline }>{ home.tagline }</h2>
                <p className={ style.paragraph }>{ home.paragraph }</p>

                <div className={ style.action }>
                    <BtnRetour 
                    Label="ENTRER DANS LE PORTFOLIO" 
                    To={ "/about" }
                    Section="about"
                    IconName="arrow-right"
                    IconSet="pixel"
                    />
                </div>
            </section>
            <HomeDiorama />
        </main>
    )
}