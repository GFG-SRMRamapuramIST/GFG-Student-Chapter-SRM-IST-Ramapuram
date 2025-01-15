export default {
  name: 'gfgcourse',
  type: 'document',
  title: 'GFG Course',
  fields: [
    {
      name: 'courseImage',
      type: 'image',
      title: 'Course Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for screen readers.',
        },
        {
          name: 'hashCode',
          type: 'string',
          title: 'Hash Code',
          description: 'Unique hash code for the course.',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Title of the course.',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      description: 'Rating of the course (1 to 5).',
      validation: (Rule) => Rule.min(1).max(5),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Brief description of the course.',
      rows: 3,
    },
  ],
}
