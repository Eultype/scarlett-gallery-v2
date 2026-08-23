import { Artwork } from "@/types/artwork";

interface ArtworkJsonLdProps {
  artwork: Artwork;
}

export default function ArtworkJsonLd({ artwork }: ArtworkJsonLdProps) {
  // L'URL de la page de l'œuvre
  const artworkUrl = `https://www.scarlettgallery.com/gallery/${artwork.id}`;
  
  // Création d'une description SEO par défaut si l'œuvre n'en a pas
  const seoDescription = artwork.description || 
    `Découvrez ${artwork.title}, une peinture originale par Emma De Noni. ${artwork.dimensions}. Faisant partie de la ${artwork.serie}.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["VisualArtwork", "Product"], // Combinaison de VisualArtwork et Product pour un impact max
    "name": artwork.title,
    "image": `https://www.scarlettgallery.com${artwork.image}`,
    "description": seoDescription,
    "creator": {
      "@type": "Person",
      "name": "Emma De Noni",
      "sameAs": "https://www.scarlettgallery.com/#person"
    },
    "artMedium": artwork.category === "linogravures" ? "Linocut" : "Oil on canvas",
    "artform": artwork.category === "linogravures" ? "Print" : "Painting",
    "width": artwork.dimensions, // Idéalement, à extraire sous forme de valeur numérique
    // Propriétés produit
    "brand": {
      "@type": "Brand",
      "name": "Scarlett Gallery"
    },
    "offers": {
      "@type": "Offer",
      "url": artworkUrl,
      "availability": artwork.status === "Vendu" ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
      "priceCurrency": "EUR",
      // Si tu as un prix défini dans tes types à l'avenir, tu peux le lier ici. 
      // Sinon Google saura au moins si c'est dispo ou non.
      "seller": {
        "@type": "Organization",
        "name": "Scarlett Gallery"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}