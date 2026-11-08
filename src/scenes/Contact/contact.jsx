// Fichier de la page Contact
//
// ========================================================================

import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import contact from "../../content/contact.js"
import style from "./Contact.module.css"

export default function Contact() {
    return (
        <main className={style.contact}>
            {/* En-tête et bouton de retour */}
            <header className={style.header}>
                <div>
                    <p className={style.eyebrow}>05 / ÉCHANGE</p>
                    <h1 className={style.title}>{contact.title}</h1>
                    <p className={style.tagline}>{contact.tagline}</p>
                </div>
                <div className={style.returnButton}>
                    <BtnRetour Label="Accueil" To="/" />
                </div>
            </header>

            <div className={style.content}>
                {/* Coordonnées et liens directs */}
                <section className={style.infoPanel} aria-labelledby="info-title">
                    <h2 id="info-title">
                        <Icon name="user" set="gentle" size={20} />
                        {contact.information.title}
                    </h2>

                    <a className={style.contactLink} href={`mailto:${contact.information.items[0].text}`}>
                        <span className={style.contactLabel}>
                            <Icon name="mail" set="gentle" size={16} />
                            {contact.information.items[0].subtitle}
                        </span>
                        <span>{contact.information.items[0].text}</span>
                    </a>
                    <a
                        className={style.contactLink}
                        href={contact.information.items[1].text}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className={style.contactLabel}>
                            <Icon name="github" size={16} />
                            {contact.information.items[1].subtitle}
                        </span>
                        <span>{contact.information.items[1].text}</span>
                    </a>
                    <a
                        className={style.contactLink}
                        href={contact.information.items[2].text}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className={style.contactLabel}>
                            <Icon name="linkedin" size={16} />
                            {contact.information.items[2].subtitle}
                        </span>
                        <span>{contact.information.items[2].text}</span>
                    </a>
                    <a
                        className={style.contactLink}
                        href={contact.information.items[3].text}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <span className={style.contactLabel}>
                            <Icon name="code" set="gentle" size={16} />
                            {contact.information.items[3].subtitle}
                        </span>
                        <span>{contact.information.items[3].text}</span>
                    </a>

                    <div className={style.availability}>
                        <span className={style.contactLabel}>
                            <Icon name="briefcase" set="gentle" size={16} />
                            {contact.information.items[5].subtitle}
                        </span>
                        <p>{contact.information.items[5].text}</p>
                    </div>

                    <a className={style.contactLink} href="/assets/CV.pdf" download>
                        <span className={style.contactLabel}>
                            <Icon name="save" size={20} />
                            Télécharger mon CV
                        </span>
                        <span>CV.pdf</span>
                    </a>
                </section>


                {/* Formulaire d'envoie */}
                <section className={style.formPanel} aria-labelledby="form-title">
                    <h2 id="form-title">
                        <Icon name="send" set="gentle" size={20} />
                        {contact.form.title}
                    </h2>

                    <form className={style.form} onSubmit={(event) => event.preventDefault()}>
                        <label>
                            {contact.form.fields[0].label}
                            <input
                                name={contact.form.fields[0].name}
                                type={contact.form.fields[0].type}
                                autoComplete="name"
                                required
                            />
                        </label>

                        <label>
                            {contact.form.fields[1].label}
                            <input
                                name={contact.form.fields[1].name}
                                type={contact.form.fields[1].type}
                                autoComplete="email"
                                required
                            />
                        </label>

                        <label>
                            {contact.form.fields[2].label}
                            <input
                                name={contact.form.fields[2].name}
                                type={contact.form.fields[2].type}
                                required
                            />
                        </label>

                        <label>
                            {contact.form.fields[3].label}
                            <textarea
                                name={contact.form.fields[3].name}
                                rows="5"
                                required
                            />
                        </label>

                        <button className={style.submitButton} type="submit">
                            <Icon name="send" set="gentle" size={16} />
                            {contact.form.submitLabel}
                        </button>
                    </form>
                </section>
            </div>
        </main>
    )
}
