export default {
    name: 'joinUs',
    title: 'Join Us',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: Rule => Rule.required().regex(/^[A-Za-z ]+$/, 'Invalid name').error('Name is required'),
      },
      {
        name: 'reg_no',
        title: 'Registration No',
        type: 'string',
        validation: Rule => Rule.required().regex(/^(1|2)[0-9](B|M)[A-Z]{2}[0-9]{4}$/, 'Invalid register number').error('Registration number is required'),
      },
      {
        name: 'srmEmail',
        title: 'SRM Email',
        type: 'string',
        validation: Rule => Rule.required().email().error('Email is required'),
      },
      {
        name: 'phone_no',
        title: 'Phone No',
        type: 'string',
        validation: Rule => Rule.required().regex(/^[0-9]{10}$/, 'Invalid phone number').error('Phone number is required'),
      },
      {
        name: 'academicYear',
        title: 'Academic Year',
        type: 'string',
        options: {
          list: [
            { title: '1st Year', value: '1' },
            { title: '2nd Year', value: '2' },
            { title: '3rd Year', value: '3' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required().error('Academic year is required'),
      },
      {
        name: 'branch',
        title: 'Branch',
        type: 'string',
        options: {
          list: [
            { title: 'CSE-Core', value: '1' },
            { title: '2nd Year', value: '2' },
            { title: '3rd Year', value: '3' },
          ],
          layout: 'radio',
        },
        validation: Rule => Rule.required().error('Branch is required'),
      },
      {
        name: 'anyOtherClub',
        title: 'Are you in any other club?',
        type: 'string',
        options: {
          list: [
            { title: 'Yes', value: 'Yes' },
            { title: 'No', value: 'No' },
          ],
        },
        validation: Rule => Rule.required().error('This field is required'),
      },
      {
        name: 'introduceYourself',
        title: 'Introduce Yourself',
        type: 'text',
        validation: Rule => Rule.required().error('This field is required'),
      },
      {
        name: 'whyJoin',
        title: 'Why join this club?',
        type: 'text',
        validation: Rule => Rule.required().error('This field is required'),
      },
      
    ],
  };
  