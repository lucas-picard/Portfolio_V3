# Mes pages et ma navigation

## Mes pages

| Page | Adresse interne | Contenu |
|---|---|---|
| Accueil | `/` | Présentation courte et diorama 3D. Le bouton d’entrée ouvre la page À propos. |
| À propos | `/about` | Mes débuts, ma formation, mes objectifs et mes passions, accompagnés d’images. |
| Projets | `/projets` | Mes projets, présentés sous forme de cartes et de fiches détaillées. |
| Compétences | `/skills` | Mes langages, mon matériel, mes compétences en systèmes et réseaux, mes outils et mes qualités. |
| Parcours | `/journey` | Ma recherche de stage, mes formations, mes stages et mes emplois. |
| Contact | `/contact` | Mes coordonnées, mes liens, mon CV à télécharger et un formulaire. |
| Page inconnue | Toute autre adresse | Une page 404. |

## Projets

Je présente actuellement six projets sur cette page :

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

Les boutons précédent et suivant parcourent les pages en boucle. L’ouverture d’une carte remplace la liste par une fiche détaillée qui peut présenter le contexte, la réalisation, les défis, les technologies, l’état du projet et des liens externes. Sur mobile, l’entrée « Projets » reste active lorsqu’une fiche est ouverte.

## Contact

Les visiteurs peuvent m’écrire par e-mail, consulter mes profils en ligne et télécharger mon CV depuis `static/assets/CV.pdf`.

Le formulaire demande un nom, une adresse e-mail et un message. L’envoi utilise Web3Forms ; son résultat ou une éventuelle erreur s’affiche sur la page.

## Navigation entre la 3D et la page intégrée

L’application utilise un `MemoryRouter` pour parcourir les pages sans navigation classique du navigateur.

1. La sélection d’un bouton 3D met à jour la section dans `src/store/useSectionStore.jsx`.
2. Le bouton envoie l’événement `portfolio:navigate` avec l’adresse de la page.
3. `src/components/FrameNavigationListener.jsx` reçoit l’événement et demande au routeur d’afficher la page correspondante.
4. Les boutons de retour mettent à jour la section sélectionnée et ramènent à l’accueil.

Ce mécanisme synchronise la navigation 2D avec les boutons du décor 3D.
