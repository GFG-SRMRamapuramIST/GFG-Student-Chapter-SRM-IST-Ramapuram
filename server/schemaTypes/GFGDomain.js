export default {
    name: 'domains',
    title: 'GFG_Domains',
    type: 'document',
    fields: [
      {
        name: 'logo',
        title: 'Domain Logo',
        type: 'image',
        description: 'Upload the logo for the domain.',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required().error('Domain logo is required'),
      },
      {
        name: 'hashCode',
        title: 'Hash Code',
        type: 'string',
        description: 'Unique hash code for the domain.',
        validation: (Rule) =>
          Rule.required().error('Hash code is required'),
      },
      {
        name: 'title',
        title: 'Domain Title',
        type: 'string',
        description: 'The title of the domain (e.g., Web Development).',
        validation: (Rule) =>
          Rule.required().error('Domain title is required'),
      },
      {
        name: 'tags',
        title: 'Domain Tags',
        type: 'array',
        of: [{ type: 'string' }],
        description: 'Tags related to the domain (e.g., Frontend, Backend).',
        validation: (Rule) =>
          Rule.min(1).error('At least one tag is required'),
      },
      {
        name: 'bgColor',
        title: 'Card Background Color',
        type: 'string',
        description: 'Background color for the card (e.g., bg-blue-50).',
        validation: (Rule) =>
          Rule.required().error('Background color is required'),
      },
    ],
  };
  