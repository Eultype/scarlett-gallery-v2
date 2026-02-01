import { MetadataRoute } from 'next'

// Composant manifest : Configuration pour l'installation du site en tant qu'App
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Scarlett Gallery | Emma De Noni',
    short_name: 'Scarlett',
    description: 'Artiste peintre à Bruxelles : portraits, linogravures et œuvres originales.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FDFBF7',
    theme_color: '#95421A',
    icons: [
      {
        src: '/web-app-manifest-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/web-app-manifest-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
