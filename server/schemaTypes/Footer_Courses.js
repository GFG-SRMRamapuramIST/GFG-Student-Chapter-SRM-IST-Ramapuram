export default {
    name: 'footer_courses',
    title: 'Footer Courses',
    type: 'document',
    fields: [
      {
        name: 'coursetitle',
        title: 'Course Title',
        type: 'string',
      },
      {
        title: 'Course Url',
        name: 'courseurl',
        type: 'url',
        validation: Rule => Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel']
        })
      }
    ],
  }
  