export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'blogtitle',
      type: 'string',
      title: 'Blog Title',
      description: 'Title of the blog.',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      description: 'Publishing date of the blog.',
      options: {
        dateFormat: 'DD-MM-yyyy',
      },
    },
    {
      name: 'subHeading',
      type: 'string',
      title: 'Sub Heading',
      description: 'Subheading of the blog.',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      description:
        'Array of paragraphs to describe the content of the blog. You can add multiple paragraphs here.',
      of: [
        {
          type: 'text',
          title: 'Paragraph',
          description: 'Each paragraph of the blog content.',
          rows: 3,
        },
      ],
    },
    {
      name: 'blogimage',
      type: 'image',
      title: 'Blog Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
          description: 'Alternative text for the image.',
        },
        {
          name: 'blogimghashCode',
          type: 'string',
          title: 'Hash Code',
          description: 'Unique hash code for the blog image.',
        },
      ],
    },
  ],
}
