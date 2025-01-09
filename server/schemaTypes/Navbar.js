export default {
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
        {
            name: "title",
            type: "string",
            title: "Title",
          },
            {
              name: 'navbarLinks',
              title: 'Navbar Links',
              type: 'array',
              description: 'The list of titles and paths in the navbar',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      description: 'The title of the navbar link',
                    },
                    {
                      name: 'path',
                      title: 'Path',
                      type: 'string',
                      description: 'The path or URL for the navbar link',
                    },
                  ],
                },
              ],
            },
      {
        name: 'joinUsLink',
        title: 'Join Us Link',
        type: 'url',
        description: 'Link to the Join Us page or external URL',
      },
      {
        name: 'blogs',
        title: 'Blogs',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Blog Title',
                type: 'string',
              },
              {
                name: 'date',
                title: 'Blog Date',
                type: 'string',
              },
              {
                name: 'path',
                title: 'Path',
                type: 'string',
                description: 'URL path for the blog',
              },
            ],
          },
        ],
      },
    ],
  };
  