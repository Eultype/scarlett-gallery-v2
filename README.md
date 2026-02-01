# 🎨 Scarlett Gallery | Portfolio d'Art & Peinture de Prestige

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-6633FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

> **Une vitrine digitale d'exception pour l'artiste peintre Emma De Noni.** Ce projet fusionne une direction artistique minimaliste avec une architecture logicielle de pointe, transformant une simple galerie en une expérience immersive haute fidélité.

---

## 🌟 Expérience Utilisateur (UX/UI)

### 💎 Esthétique Signature
- **Direction Artistique** : Palette organique "Terra & Crème" évoquant la terre cuite et la toile brute, créant un écrin neutre pour sublimer les couleurs des œuvres.
- **Initial Loader** : Séquence d'introduction chorégraphiée avec **Framer Motion**, offrant une transition fluide vers l'univers de l'artiste.
- **Fluidité Totale** : Navigation soyeuse grâce au Smooth Scroll via **Lenis**, éliminant toute saccade visuelle.

### 🖼️ Galerie Immersive
- **Lightbox Haute Performance** : Visualisation détaillée avec gestion intelligente du chargement (loaders intégrés) et navigation par miniatures.
- **Swipe Mobile Native** : Expérience tactile optimisée avec indicateurs visuels de balayage pour une consultation naturelle sur smartphones et tablettes.
- **Protection du Contenu** : Couche de protection contre le clic droit sur les images pour préserver l'intégrité des œuvres.

---

## 🚀 Performance & Architecture

### 🏗️ Excellence Technique
- **Next.js 16 & Static Site Generation (SSG)** : Pages pré-rendues au build pour un temps de réponse instantané (TTFB minimal) et une fiabilité absolue.
- **Optimisation Assets** : Migration intégrale vers le format **WebP** avec gestion rigoureuse des propriétés `priority` et `sizes`, garantissant un score LCP (Largest Contentful Paint) exemplaire.
- **Lazy Loading Sélectif** : Utilisation de `next/dynamic` pour les composants lourds comme la Lightbox, allégeant le bundle initial.

### 📈 SEO de Pointe
- **Indexation Totale** : Génération dynamique de `sitemap.xml` et `robots.txt` pour une visibilité maximale sur les moteurs de recherche.
- **Metadata Avancées** : Configuration complète des balises OpenGraph et Twitter Card avec URL de base résolue pour un partage social professionnel.
- **Performance Monitor** : Intégration de `@vercel/speed-insights` pour un suivi analytique des performances réelles des utilisateurs.

---

## 🛠️ Stack Technique

- **Core** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4 (Moteur de rendu ultra-rapide)
- **Langage** : TypeScript (Typage strict et centralisé)
- **Animations** : Framer Motion (Interactions complexes)
- **Scroll** : Lenis (Smooth scrolling)

---

## 🏗️ Structure du Projet

```text
src/
 ├── app/               # Routes et fichiers spéciaux (error, loading, sitemap)
 ├── components/
 │    ├── home/         # Sections modulaires de la page d'accueil
 │    ├── layout/       # Composants structurels (Navbar, Footer)
 │    └── ui/           # Bibliothèque de composants atomiques réutilisables
 ├── data/              # Source de vérité (Données typées, prêt pour CMS)
 ├── types/             # Centralisation des interfaces TypeScript
 └── fonts/             # Gestion des polices locales premium
```

---

## 🚀 Lancement

1. **Installation**
   ```bash
   npm install
   ```
2. **Développement**
   ```bash
   npm run dev
   ```
3. **Build de Production**
   ```bash
   npm run build
   ```

---

## 📄 Propriété Intellectuelle

Ce projet et l'intégralité de son contenu (code, photographies et œuvres picturales) sont la **propriété exclusive d'Emma De Noni**. Toute reproduction ou utilisation sans accord préalable est strictement interdite.

---
*Réalisé avec passion pour l'Art et l'Ingénierie Web.*