import links from './lien.js';

const contact = {
  title: 'CONTACT',
  tagline: 'RESTONS EN CONTACT',
  information: {
    title: 'Informations',
    items: [
      {
        subtitle: 'Email',
        text: links.email,
      },
      {
        subtitle: 'Github',
        text: links.github,
      },
      {
        subtitle: 'Linkedin',
        text: links.linkedin,
      },
      {
        subtitle: 'CodeWars',
        text: links.codewars,
      },
      {
        subtitle: 'CV',
        text: 'Télécharger mon CV (PDF)',
      },
      {
        subtitle: 'Recherche actuelle',
        text: 'Stage (durée : 3 semaines), école (BUT Info, BTS SIO)',
      },
    ],
  },
  form: {
    title: 'Envoyez-moi un message',
    fields: [
      {
        name: 'name',
        label: 'Nom',
        type: 'text',
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
      },
      {
        name: 'subject',
        label: 'Sujet',
        type: 'select',
        options: ['Stage', 'École', 'Autre'],
      },
      {
        name: 'message',
        label: 'Message',
        type: 'textarea',
      },
    ],
    submitLabel: 'Envoyer le message',
    successMessage: 'Merci, ton message a bien été envoyé !',
    errorMessage:
      "Oups, une erreur est survenue. Réessaie ou écris-moi directement par e-mail.",
  },
};

export default contact;
