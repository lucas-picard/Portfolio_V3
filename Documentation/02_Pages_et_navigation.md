# Mes pages et ma navigation

## Mes pages

| Page | Adresse interne | Ce que j’y présente |
|---|---|---|
| Accueil | `/` | Je me présente brièvement avec un diorama 3D. Mon bouton d’entrée mène à ma page À propos. |
| À propos | `/about` | Je raconte mes débuts, ma formation, mes objectifs et mes passions avec des images. |
| Projets | `/projets` | Je présente mes projets dans des cartes et des fiches détaillées. |
| Compétences | `/skills` | Je présente mes langages, mon matériel, mes compétences en systèmes et réseaux, mes outils et mes qualités. |
| Parcours | `/journey` | Je présente ma recherche de stage, mes formations, mes stages et mes emplois. |
| Contact | `/contact` | Je partage mes coordonnées et mes liens, mon CV à télécharger et un formulaire. |
| Page inconnue | Toute autre adresse | J’affiche une page 404. |

## Mes projets

Je présente actuellement six projets :

- APP NUMWORKS ;
- CodeWars ;
- IA_neuronal1 ;
- login_secure ;
- portfolio_v3 ;
- rubber_ducky.

J’adapte le nombre de cartes affichées à la largeur disponible :

| Largeur | Cartes par page |
|---|---:|
| Jusqu’à 560 px | 1 |
| De 561 à 850 px | 2 |
| Plus de 850 px | 3 |

J’ai fait en sorte que mes boutons précédent et suivant parcourent les pages en boucle. Quand un visiteur ouvre une carte, je remplace la liste par une fiche détaillée. Selon le projet, j’y présente son contexte, sa réalisation, ses défis, ses technologies, son état et des liens externes. Sur mobile, je garde l’entrée « Projets » active lorsqu’une fiche est ouverte.

## Me contacter

Je permets aux visiteurs de m’écrire par e-mail, de consulter mes profils en ligne et de télécharger mon CV depuis `static/assets/CV.pdf`.

Mon formulaire demande un nom, une adresse e-mail et un message. J’utilise Web3Forms pour l’envoi et j’affiche le résultat ou l’erreur éventuelle.

## Ma navigation entre la 3D et la page intégrée

J’utilise un `MemoryRouter` pour parcourir mes pages dans l’application sans navigation classique du navigateur.

1. Quand un visiteur sélectionne un bouton 3D, je mets à jour la section dans `src/store/useSectionStore.jsx`.
2. J’envoie l’événement `portfolio:navigate` avec l’adresse de la page.
3. `src/components/FrameNavigationListener.jsx` reçoit mon événement et demande au routeur d’afficher la page correspondante.
4. Mes boutons de retour mettent à jour la section sélectionnée et ramènent à l’accueil.

Grâce à ce mécanisme, je synchronise ma navigation 2D avec les boutons du décor 3D.
