# Développement et commandes

> **IMPORTANT — LICENCE OBLIGATOIRE**
>
> La lecture de la licence (`LICENSE.txt`) est impérative avant toute utilisation, consultation du code à des fins de réutilisation, modification ou exploitation de ce projet.
>
> Toute personne souhaitant utiliser ce projet doit prendre connaissance de l'intégralité des conditions définies dans la licence et s'engager à les respecter.
>
> Toute publication, mise en ligne, hébergement ou redistribution du projet, dans sa forme originale ou modifiée, nécessite l'autorisation écrite préalable de Lucas Picard.
>
> L'utilisation de ce projet implique l'acceptation des conditions de sa licence.

## Prérequis

Installe Node.js et npm. À la racine du dépôt, installe les dépendances du projet :

```bash
npm install
```

## Démarrer en local

```bash
npm run dev
```

Vite démarre un serveur de développement et affiche son adresse locale dans le terminal.

## Commandes disponibles

```bash
npm run lint    # Vérifier le code avec ESLint
npm run build   # Générer la version de production dans dist/
npm run preview # Prévisualiser le build de production
```

Après une modification, `npm run lint` vérifie les règles du projet et `npm run build` valide la compilation de production.

## Déploiement

La commande `npm run build` produit le site compilé dans `dist/`. Le contenu de ce dossier peut ensuite être déployé sur un hébergeur statique compatible avec Vite.

Vite utilise `static/` comme dossier public, configuré dans `vite.config.js`. Les fichiers qui s’y trouvent sont accessibles par leur chemin d’URL sans le préfixe `static` : `static/assets/Images/Futur.jpg` devient `/assets/Images/Futur.jpg`.
