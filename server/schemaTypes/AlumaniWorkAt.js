export default {
  name: 'alumaniCompany',
  title: 'Alumni Companies',
  type: 'document',
  fields: [
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    },
    {
      name: 'companyLogo',
      type: 'image',
      title: 'Compoany Logo',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Company logo is required'),
      fields: [
        {
          name: 'altText',
          type: 'string',
          title: 'Alt Text',
          description: 'Name of the company Eg: "{COMPANY_NAME} Logo"',
        },
        {
          name: 'companyLogoHashCode',
          type: 'string',
          title: 'Hash Code',
          description: 'Unique hash code for the company logo.',
        },
      ],
    },
  ],
}
  