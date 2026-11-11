# Pages et navigation

## Pages disponibles

| Page | Adresse interne | Contenu |
|---|---|---|
| Accueil | `/` | Présentation courte et diorama 3D. Le bouton d’entrée ouvre À propos. |
| À propos | `/about` | Les débuts, la formation, les objectifs et les passions, accompagnés d’images. |
| Projets | `/projets` | Cartes de projets, pagination et fiches détaillées. |
| Compétences | `/skills` | Langages, matériel, systèmes et réseaux, outils et qualités personnelles. |
| Parcours | `/journey` | Recherche de stage, formations, stages et emplois. |
| Contact | `/contact` | Coordonnées, liens, téléchargement du CV et formulaire. |
| Page inconnue | Toute autre adresse | Affiche une page 404. |

## Projets

La liste contient actuellement six projets :

- APP NUMWORKS ;
- CodeWars ;
- IA_neuronal1 ;
- login_secure ;
- portfolio_v3 ;
- rubber_ducky.

Le nombre de cartes affichées dépend de la largeur disponible :

| Largeur | Cartes par page |
|---|---:|
| Jusqu’à 560 px | 1 |
| De 561 à 850 px | 2 |
| Plus de 850 px | 3 |

Les boutons précédent et suivant parcourent les pages en boucle. L’ouverture d’une carte remplace la liste par une fiche détaillée. Selon le projet, cette fiche présente son contexte, sa réalisation, ses défis, ses technologies, son état et des liens externes. Le bouton « Projets » de la navigation mobile reste actif lorsqu’une fiche est ouverte.

## Contact

La page permet d’ouvrir un nouveau message électronique et de consulter les profils en ligne. Le bouton de téléchargement fournit `static/assets/CV.pdf`.

Le formulaire demande un nom, une adresse e-mail et un message. Son envoi utilise le service Web3Forms et affiche l’état de l’envoi ou une erreur.

## Navigation entre la 3D et la page intégrée

L’application utilise un `MemoryRouter` : les pages sont parcourues dans l’application sans navigation classique du navigateur.

1. Un bouton 3D met à jour la section sélectionnée dans `src/store/useSectionStore.jsx`.
2. Il envoie un événement `portfolio:navigate` contenant l’adresse de la page.
3. `src/components/FrameNavigationListener.jsx` reçoit l’événement et demande au routeur d’afficher la page correspondante.
4. Les boutons de retour des pages mettent à jour la section sélectionnée et ramènent à l’accueil.

Ce mécanisme maintient la navigation 2D synchronisée avec les boutons du décor 3D.
