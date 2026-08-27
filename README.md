# Scarlett Gallery

Portfolio officiel et galerie virtuelle interactive de l'artiste peintre Emma De Noni.
Ce projet intègre une expérience de navigation web classique ainsi qu'une exposition 3D développée en WebGL.

## Stack Technique

- **Framework :** Next.js 16 (App Router)
- **3D / WebGL :** Three.js, React Three Fiber, Drei
- **Langage :** TypeScript
- **Styles :** Tailwind CSS v4
- **Animations :** Framer Motion, Lenis (Smooth Scroll)
- **Hébergement :** Vercel

## Fonctionnalités Principales

- **Exposition Virtuelle 3D :** Navigation à la première personne dans une galerie virtuelle, avec gestion des collisions, animations de caméra fluide et prise en charge des contrôles tactiles (joystick virtuel) sur mobile.
- **Performances (SSG) :** L'intégralité du site (y compris les pages dynamiques des œuvres) est générée statiquement (Static Site Generation) au moment du build pour garantir un TTFB (Time To First Byte) minimal.
- **Optimisation des assets :** Utilisation du format WebP (jusqu'à 6000px pour les œuvres 3D) avec chargement asynchrone pour préserver le LCP (Largest Contentful Paint).
- **SEO & Accessibilité :** Génération automatique du `sitemap.xml`, balises OpenGraph configurées pour le partage social, et structure sémantique optimisée.
- **Protection des œuvres :** Désactivation du clic droit sur les médias visuels.

## Structure du Projet

```text
src/
 ├── app/
 │    ├── about/        # Page de présentation de l'artiste
 │    ├── api/          # Routes API Next.js (si applicables)
 │    ├── contact/      # Page de contact et formulaires
 │    ├── exposition/   # Application WebGL (Galerie 3D interactive)
 │    ├── gallery/      # Catalogue complet des œuvres avec pages dynamiques
 │    ├── mentions/     # Mentions légales
 │    ├── politique/    # Politique de confidentialité
 │    ├── services/     # Prestations (commandes sur mesure, etc.)
 │    ├── layout.tsx    # Configuration globale de l'UI
 │    ├── page.tsx      # Page d'accueil principale
 │    └── sitemap.ts    # Génération dynamique du plan du site pour le SEO
 ├── components/
 │    ├── layout/       # Éléments d'interface (Navbar, Footer)
 │    └── ui/           # Composants réutilisables (Lightbox, Loaders)
 ├── data/              # Base de données locale (gallery.ts)
 ├── hooks/             # Custom hooks React
 └── types/             # Interfaces TypeScript
```

## Scripts

```bash
# Installation des dépendances
npm install

# Lancement de l'environnement de développement (localhost:3000)
npm run dev

# Compilation pour la production (SSG)
npm run build

# Simulation du serveur de production en local
npm run start
```

## Propriété Intellectuelle

L'intégralité du contenu de ce projet (code source, photographies, œuvres picturales et design) est la propriété exclusive d'Emma De Noni. Toute reproduction, distribution ou utilisation sans accord préalable écrit est strictement interdite.
