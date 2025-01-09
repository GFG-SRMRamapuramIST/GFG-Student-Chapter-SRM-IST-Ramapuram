export default {
    name: "blog",
    type: "document",
    title: "Blog",
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        description: "Title of the blog.",
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
        name: "subHeading",
        type: "string",
        title: "Sub Heading",
        description: "Subheading of the blog.",
      },
      {
        name: "paragraph1",
        type: "text",
        title: "Paragraph 1",
        description: "First paragraph of the blog.",
        rows: 3,
      },
      {
        name: "paragraph2",
        type: "text",
        title: "Paragraph 2",
        description: "Second paragraph of the blog.",
        rows: 3,
      },
      {
        name: "image",
        type: "image",
        title: "Blog Image",
        options: {
          hotspot: true,
        },
        fields: [
          {
            name: "altText",
            type: "string",
            title: "Alt Text",
            description: "Alternative text for the image.",
          },
        ],
      },
      {
        name: "hashCode",
        type: "string",
        title: "Hash Code",
        description: "Unique hash code for the blog image.",
      },
      
    ],
  };
  