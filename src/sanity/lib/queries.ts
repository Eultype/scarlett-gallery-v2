import { client } from './client'
import { Artwork } from '@/types/artwork'
import { urlForImage } from './image'

export async function getArtworks(): Promise<Artwork[]> {
  const query = `*[_type == "artwork"] | order(_createdAt desc) {
    "id": _id,
    title,
    category,
    "image": mainImage,
    dimensions,
    serie,
    availableSizes,
    status,
    "moreImages": moreImages[]
  }`

  const artworks = await client.fetch(query)
  
  return artworks.map((art: { image: any; moreImages?: any[] } & Artwork) => ({
    ...art,
    image: urlForImage(art.image).url(),
    moreImages: art.moreImages?.map((img: any) => urlForImage(img).url()) || []
  }))
}
