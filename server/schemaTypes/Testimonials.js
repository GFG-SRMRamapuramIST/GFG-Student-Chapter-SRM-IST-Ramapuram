export default {
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Designation/Position',
      type: 'string',
    },
    {
      name: 'testimonial',
      title: 'Testimonial',
      type: 'string',
    },
    {
      name: 'highlightedPhrases',
      title: 'Highlighted Phrases',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'imageHashCode',
      title: 'Image Hash Code',
      type: 'string',
    },
    {
      name: 'imageAltText',
      title: 'Image Alt Text',
      type: 'string',
    },
  ],
}
