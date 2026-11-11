# Développement et commandes de mon projet

> **IMPORTANT — LICENCE OBLIGATOIRE**
>
> Je demande à toute personne qui consulte ou utilise ce projet de lire intégralement ma [licence](../LISCENCE.txt) avant de consulter le code à des fins de réutilisation, de le modifier ou de l’exploiter.
>
> Toute personne qui souhaite utiliser ce projet doit prendre connaissance de l’ensemble des conditions de ma licence et s’engager à les respecter.
>
> Toute publication, mise en ligne, hébergement ou redistribution du projet, dans sa forme originale ou modifiée, nécessite mon autorisation écrite préalable.
>
> L’utilisation de ce projet implique l’acceptation des conditions de ma licence.

## Installation

L’installation nécessite Node.js et npm. À la racine du dépôt, installez les dépendances avec :

```bash
npm install
```

## Démarrage en local

```bash
npm run dev
```

Cette commande démarre le serveur de développement Vite. Son adresse locale s’affiche dans le terminal.

## Commandes disponibles

```bash
npm run lint    # Vérifier le code avec ESLint
npm run build   # Générer la version de production dans dist/
npm run preview # Prévisualiser la version de production
```

Après une modification, exécutez `npm run lint` pour vérifier le code et `npm run build` pour valider la compilation de production.

## Déploiement

La commande `npm run build` génère le site compilé dans `dist/`. Le contenu de ce dossier peut ensuite être déployé sur un hébergeur statique compatible avec Vite.

Le dossier `static/`, configuré dans `vite.config.js`, sert les ressources publiques. Leurs chemins d’URL ne reprennent pas le préfixe `static` : par exemple, `static/assets/Images/Futur.jpg` devient `/assets/Images/Futur.jpg`.
