import { Artwork } from "@/types/artwork";

interface ArtworkJsonLdProps {
  artwork: Artwork;
}

export default function ArtworkJsonLd({ artwork }: ArtworkJsonLdProps) {
  const artworkUrl = `https://www.scarlettgallery.com/gallery/${artwork.id}`;
  
  const seoDescription = artwork.description || 
    `Découvrez ${artwork.title}, une œuvre originale par Emma De Noni (${artwork.dimensions}). Faisant partie de la ${artwork.serie}.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "VisualArtwork",
        "@id": `${artworkUrl}#artwork`,
        "name": artwork.title,
        "url": artworkUrl,
        "image": `https://www.scarlettgallery.com${artwork.image}`,
        "description": seoDescription,
        "creator": {
          "@type": "Person",
          "@id": "https://www.scarlettgallery.com/#person",
          "name": "Emma De Noni"
        },
        "artMedium": artwork.category === "linogravures" ? "Linogravure" : "Huile sur toile",
        "artform": artwork.category === "linogravures" ? "Estampe / Linogravure" : "Peinture",
        "artworkSurface": artwork.category === "linogravures" ? "Papier d'art" : "Toile",
        "size": artwork.dimensions,
        "isPartOf": {
          "@type": "CreativeWorkSeries",
          "name": artwork.serie
        },
        "inLanguage": "fr-BE"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.scarlettgallery.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Galerie",
            "item": "https://www.scarlettgallery.com/gallery"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": artwork.title,
            "item": artworkUrl
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}