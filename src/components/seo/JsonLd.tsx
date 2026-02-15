import { CONTACT_INFO } from "@/data/contact";

export default function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://www.scarlettgallery.com/#person",
        "name": "Emma De Noni",
        "alternateName": "Scarlett Gallery",
        "jobTitle": "Artiste Peintre",
        "url": "https://www.scarlettgallery.com",
        "image": "https://www.scarlettgallery.com/images/about/Scarlett_peint.webp",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bruxelles",
          "addressCountry": "BE"
        },
        "sameAs": [
          CONTACT_INFO.socials.instagram,
          CONTACT_INFO.socials.facebook,
          CONTACT_INFO.socials.tiktok,
          CONTACT_INFO.socials.etsy,
          CONTACT_INFO.socials.vinted
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.scarlettgallery.com/#website",
        "url": "https://www.scarlettgallery.com",
        "name": "Scarlett Gallery",
        "description": "Artiste peintre à Bruxelles. Portraits à l'huile, linogravures et œuvres originales.",
        "publisher": {
          "@id": "https://www.scarlettgallery.com/#person"
        },
        "inLanguage": "fr-FR"
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
