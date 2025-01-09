export default {
    name: 'alumaniCompany',
    title: 'Alumni Companies',
    type: 'document',
    fields: [
      {
        name: 'companyLogo',
        title: 'Company Logo',
        type: 'image',
        options: {
          hotspot: true,
        },
        description: 'Upload the logo of the company.',
        validation: (Rule) => Rule.required().error('Company logo is required'),
      },
      {
        name: 'hashCode',
        title: 'Hash Code',
        type: 'string',
        description: 'Unique hash code to identify the company logo.',
        validation: (Rule) =>
          Rule.required()
            .min(4)
            .max(64)
            .error('Hash code must be between 4 and 64 characters'),
      },
      {
        name: 'altText',
        title: 'Alt Text',
        type: 'string',
        description: 'Alternative text for the logo image.',
        validation: (Rule) =>
          Rule.required().min(1).error('Alt text is required for accessibility'),
      },
    ],
  };
  