export default {
  name: 'contactUs',
  title: 'Contact Us',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Enter your full name.',
      validation: (Rule) =>
        Rule.required().min(2).error('Name is required and must be at least 2 characters long.'),
    },
    {
      name: 'subject',
      title: 'Subject',
      type: 'string',
      description: 'Briefly summarize your reason for contacting us.',
      validation: (Rule) =>
        Rule.required().min(3).error('Subject is required and must be at least 3 characters long.'),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Enter a valid email address so we can respond.',
      validation: (Rule) => Rule.required().email().error('A valid email address is required.'),
    },
    {
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'Provide details about your inquiry or concern.',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .error('Message is required and must be at least 10 characters long.'),
    },
  ],
}
