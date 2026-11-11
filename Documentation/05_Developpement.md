# Développement et commandes

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
