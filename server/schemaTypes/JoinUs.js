export default {
  name: 'joinUs',
  title: 'Join Us',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'regNo',
      title: 'Registration No',
      type: 'string',
    },
    {
      name: 'srmEmail',
      title: 'SRM Email',
      type: 'string',
    },
    {
      name: 'phoneNo',
      title: 'Phone No',
      type: 'string',
      validation: (Rule) =>
        Rule.required()
          .regex(/^[0-9]{10}$/, 'Invalid phone number')
          .error('Phone number is required'),
    },
    {
      name: 'academicYear',
      title: 'Academic Year',
      type: 'string',
    },
    {
      name: 'branch',
      title: 'Branch',
      type: 'string',
    },
    {
      name: 'anyOtherClub',
      title: 'Are you in any other club?',
      type: 'string',
    },
    {
      name: 'clubNameYouAreAPartOf',
      title: 'What is the name of the club you are a part of?',
      type: 'string',
    },
    {
      name: 'positionInThatClub',
      title: 'Your position in that club?',
      type: 'string',
    },
    {
      name: 'additionalContribution',
      title: 'You would additionally like to contribute in which department?',
      type: 'string',
    },
    {
      name: 'linkedInProfile',
      title: 'LinkedIn Profile',
      type: 'string',
    },
    {
      name: 'githubProfile',
      title: ' GitHub Profile',
      type: 'string',
    },
    {
      name: 'leetcodeProfile',
      title: 'Leetcode Profile',
      type: 'string',
    },
    {
      name: 'codechefProfile',
      title: 'CodeChef Profile',
      type: 'string',
    },
    {
      name: 'codeForcesProfile',
      title: 'CodeForces Profile',
      type: 'string',
    },
    {
      name: 'programingLanguage',
      title: 'Which programing language do you prefer?',
      type: 'string',
    },
    {
      name: 'introduceYourself',
      title: 'Introduce Yourself',
      type: 'text',
    },
    {
      name: 'whyJoin',
      title: 'Why join this club?',
      type: 'text',
    },
    {
      name: 'biggestAchievementTillDate',
      title: ' What is your biggest achievement till date?',
      type: 'text',
    },
    {
      name: 'describeAnyProject',
      title: 'If you have done any project write briefly about it',
      type: 'text',
    },
  ],
}
  