const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title'
      }
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      initialValue: 'Calvin Korver'
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'A brief summary of the blog post',
      rows: 3
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Mark this post as featured',
      initialValue: false
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Technology', value: 'technology'},
          {title: 'Career', value: 'career'},
          {title: 'Personal', value: 'personal'},
          {title: 'Projects', value: 'projects'},
          {title: 'Thoughts', value: 'thoughts'}
        ]
      }
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text'
        }
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text'
            }
          ]
        },
        {
          type: 'code'
        },
        {
          type: 'gallery'
        },
        {
          type: 'table'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author',
      media: 'mainImage'
    }
  }
}

export default blogPost