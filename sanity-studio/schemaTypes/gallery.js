const gallery = {
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  fields: [
    {
      name: 'images',
      type: 'array',
      title: 'Images',
      of: [
        {
          name: 'image',
          type: 'image',
          title: 'Image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text'
            }
          ]
        }
      ],
      options: { layout: 'grid' }
    },
    {
      name: 'display',
      type: 'string',
      title: 'Display as',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Stacked on top of each other', value: 'stacked' },
          { title: 'In-line', value: 'inline' },
          { title: 'Carousel', value: 'carousel' }
        ],
        layout: 'radio'
      },
      initialValue: 'stacked'
    },
    {
      name: 'zoom',
      type: 'boolean',
      title: 'Zoom enabled',
      description: 'Should we enable zooming of images?',
      initialValue: false
    }
  ],
  preview: {
    select: {
      images: 'images',
      image: 'images.0'
    },
    prepare(selection) {
      const { images, image } = selection;
      return {
        title: `Gallery block of ${Object.keys(images).length} images`,
        subtitle: `Alt text: ${image?.alt || 'No alt text'}`,
        media: image
      };
    }
  }
}

export default gallery