import { type SchemaTypeDefinition } from 'sanity'
import { artworkType } from './artwork'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [artworkType],
}
