export default {
  name: 'members24',
  type: 'document',
  title: 'Members 24',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      description: 'Name of the person',
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'string',
      description: 'Information about the person',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
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
          name: 'imghashCode',
          type: 'string',
          title: 'Hash Code',
          description: 'Unique hash code for the blog image.',
        },
      ],
    },
    {
      name: 'socials',
      title: 'Socials',
      type: 'object',
      description: 'LinkedIn & Codolio profile link of the person',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'string',
          description: 'Eg: https://www.linkedin.com/in/{USER_PROFILE}',
        },
        {
          name: 'codolio',
          title: 'Codolio',
          type: 'string',
          description: 'Eg: https://codolio.com/profile/{USER_PROFILE}',
        },
      ],
    },
  ],
}
