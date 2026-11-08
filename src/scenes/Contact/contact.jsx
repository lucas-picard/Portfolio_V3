// Fichier de la page Contact
//
// ========================================================================

import { useState } from "react"
import BtnRetour from "../../components/btnRetour/btnRetour.jsx"
import Icon from "../../components/Icon.jsx"
import contact from "../../content/contact.js"
import style from "./contact.module.css"

export default function Contact() {
    const [status, setStatus] = useState("idle")
    const [errorMessage, setErrorMessage] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget
        const formData = new FormData(form);
        setStatus("sending")
        setErrorMessage("")

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(Object.fromEntries(formData))
            })
            const data = await response.json()

            if (!response.ok || !data.success) {
                throw new Error(data.body?.message || data.message || `Erreur HTTP ${response.status}`)
            }

            setStatus("success")
            form.reset()
        } catch (error) {
            console.error("Échec de l’envoi du formulaire de contact :", error)
            setErrorMessage(error instanceof Error ? error.message : "Erreur réseau inconnue.")
            setStatus("error")
        }
    };


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
                    <BtnRetour Label="Accueil" To="/" Compact />
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

                    <form
                        className={style.form}
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        onSubmit={onSubmit}
                    >
                        <input type="hidden" name="access_key" value="442b7a70-4a36-4357-a73d-6982d9b3b173" />
                        {contact.form.fields.map((field) => (
                            <label key={field.name}>
                                {field.label}
                                {field.type === "textarea" ? (
                                    <textarea name={field.name} rows="5" required />
                                ) : (
                                    <input
                                        name={field.name}
                                        type={field.type}
                                        autoComplete={field.name === "name" || field.name === "email" ? field.name : undefined}
                                        required
                                    />
                                )}
                            </label>
                        ))}

                        <button className={style.submitButton} type="submit" disabled={status === "sending"}>
                            <Icon name="send" set="gentle" size={16} />
                            {status === "sending" ? "Envoi en cours..." : contact.form.submitLabel}
                        </button>
                        {status !== "idle" && (
                            <p
                                className={`${style.formStatus} ${status === "error" ? style.formError : ""}`}
                                role={status === "error" ? "alert" : "status"}
                                aria-live={status === "error" ? "assertive" : "polite"}
                            >
                                {status === "success"
                                    ? contact.form.successMessage
                                    : status === "error"
                                        ? `${contact.form.errorMessage} (${errorMessage})`
                                        : "Envoi en cours..."}
                            </p>
                        )}
                    </form>
                </section>
            </div>
        </main>
    )
}
