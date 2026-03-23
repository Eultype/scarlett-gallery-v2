import { defineField, defineType } from 'sanity'

export const artworkType = defineType({
  name: 'artwork',
  title: 'Œuvres',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de l\'œuvre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Saisons', value: 'saisons' },
          { title: 'Personnalités', value: 'personnalites' },
          { title: 'Linogravures', value: 'linogravures' },
          { title: 'Minis', value: 'minis' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions (ex: Huile sur toile - 40x50cm)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'serie',
      title: 'Série (ex: Série "Saisons" - 2024/2025)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'availableSizes',
      title: 'Tailles disponibles',
      type: 'string',
    }),
    defineField({
      name: 'moreImages',
      title: 'Images additionnelles',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    }),
  ],
})
