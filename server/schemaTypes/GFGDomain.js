export default {
  name: 'gfgdomains',
  title: 'GFG Domains',
  type: 'document',
  fields: [
    {
      name: 'domainlogo',
      title: 'Domain Logo',
      type: 'image',
      description: 'Upload the logo for the domain.',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'hashCode',
          type: 'string',
          title: 'Hash Code',
          description: 'Unique hash code for the course.',
        },
      ],
    },
    {
      name: 'domaintitle',
      title: 'Domain Title',
      type: 'string',
      description: 'The title of the domain (e.g., Web Development).',
    },
    {
      name: 'domaintags',
      title: 'Domain Tags',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tags related to the domain (e.g., Frontend, Backend).',
    },
    {
      name: 'cardbgColor',
      title: 'Card Background Color',
      type: 'string',
      description: 'Background color for the card (e.g., bg-blue-50).',
    },
  ],
}
