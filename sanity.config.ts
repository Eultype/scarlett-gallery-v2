import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schemaTypes'
import { projectId, dataset } from './src/sanity/env'

export default defineConfig({
  name: 'default',
  title: 'Scarlett Gallery Studio',

  projectId,
  dataset,

  basePath: '/studio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
