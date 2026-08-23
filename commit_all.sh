#!/bin/bash
git reset

# 1. chore(cleanup): suppression des anciens composants et images inutilisés
git ls-files --deleted | grep -E 'loading\.tsx|Lightbox\.tsx|SocialBtn\.tsx' | xargs git rm --ignore-unmatch
git ls-files --deleted | grep -E 'saisons/CP|saisons/.*SD|saisons/.*HD|religieux/.*\.JPG' | xargs git rm --ignore-unmatch
git commit -m "chore(cleanup): suppression des anciens composants et images inutilisés"

# 2. style(theme): passage au fond beige global et harmonisation des polices
git add src/app/globals.css src/app/layout.tsx src/app/template.tsx
git commit -m "style(theme): passage au fond beige global et harmonisation des polices"

# 3. feat(ui): ajout du curseur fluide, des badges et du RevealTitle
git add src/components/ui/CustomCursor.tsx src/components/ui/RevealTitle.tsx src/components/ui/Badge.tsx src/context/
git commit -m "feat(ui): ajout du curseur fluide, des badges et du RevealTitle"

# 4. refactor(nav): mise à jour de la navigation et du footer
git add src/components/layout/Navbar.tsx src/components/layout/Footer.tsx src/data/nav.ts src/components/ui/MobileNavLink.tsx
git commit -m "refactor(nav): mise à jour de la navigation et du footer"

# 5. feat(expo): création de la salle d'exposition virtuelle interactive 3D
git add src/app/exposition/
git commit -m "feat(expo): création de la salle d'exposition virtuelle interactive 3D"

# 6. refactor(home): refonte des sections de la page d'accueil (Hero, Gallery, Services)
git add src/components/home/
git commit -m "refactor(home): refonte des sections de la page d'accueil (Hero, Gallery, Services)"

# 7. refactor(about): modernisation de la page à propos et présentation de l'atelier
git add src/app/about/
git commit -m "refactor(about): modernisation de la page à propos et présentation de l'atelier"

# 8. refactor(services): nouvelle mise en page des offres sur-mesure
git add src/app/services/
git commit -m "refactor(services): nouvelle mise en page des offres sur-mesure"

# 9. feat(contact): sécurisation des API avec Zod et refonte des formulaires
git add src/app/api/ src/app/contact/ src/components/ui/ContactForm.tsx src/components/ui/FloatingInput.tsx src/components/ui/NewsletterForm.tsx
git commit -m "feat(contact): sécurisation des API avec Zod et refonte des formulaires"

# 10. feat(journal): préparation de l'architecture de base pour le futur blog
git add src/_backup_journal/ src/data/journal.ts src/lib/
git commit -m "feat(journal): préparation de l'architecture de base pour le futur blog"

# 11. feat(seo): intégration des données JsonLd et sitemap dynamique
git add src/app/sitemap.ts src/components/seo/
git commit -m "feat(seo): intégration des données JsonLd et sitemap dynamique"

# 12. feat(gallery): intégration du lecteur vidéo natif pour les œuvres
git add public/videos/ src/app/gallery/
git commit -m "feat(gallery): intégration du lecteur vidéo natif pour les œuvres"

# 13. refactor(data): mise à jour du modèle TypeScript de la galerie
git add src/data/gallery.ts src/data/artworks.ts src/types/artwork.ts
git commit -m "refactor(data): mise à jour du modèle TypeScript de la galerie"

# 14. feat(data): réorganisation des dossiers d'images pour la collection Saisons
git add public/images/gallery/saisons/
git commit -m "feat(data): réorganisation des dossiers d'images pour la collection Saisons"

# 15. feat(data): ajout des zooms et vues déco pour la collection Les Minis
git add public/images/gallery/minis/
git commit -m "feat(data): ajout des zooms et vues déco pour la collection Les Minis"

# 16. feat(data): ajout des photos de chevalet pour les Personnalités
git add public/images/gallery/personnalites/
git commit -m "feat(data): ajout des photos de chevalet pour les Personnalités"

# 17. feat(data): ajouts des déclinaisons pour les Linogravures
git add public/images/gallery/linogravures/
git commit -m "feat(data): ajouts des déclinaisons pour les Linogravures"

# 18. feat(data): intégration de nouvelles photos pour la collection Religieux
git add public/images/gallery/religieux/
git commit -m "feat(data): intégration de nouvelles photos pour la collection Religieux"

# 19. chore(data): structuration des données des avis clients
git add src/data/testimonials.ts src/types/testimonial.ts
git commit -m "chore(data): structuration des données des avis clients"

# 20. chore: ajustements finaux et correctifs mineurs
git add .
git commit -m "chore: ajustements finaux et correctifs mineurs"

