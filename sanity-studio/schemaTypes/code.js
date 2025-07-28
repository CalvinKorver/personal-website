const code = {
  name: 'code',
  title: 'Code Block',
  type: 'object',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'JavaScript', value: 'javascript' },
          { title: 'TypeScript', value: 'typescript' },
          { title: 'Python', value: 'python' },
          { title: 'Java', value: 'java' },
          { title: 'C++', value: 'cpp' },
          { title: 'C#', value: 'csharp' },
          { title: 'Go', value: 'go' },
          { title: 'Rust', value: 'rust' },
          { title: 'PHP', value: 'php' },
          { title: 'Ruby', value: 'ruby' },
          { title: 'Swift', value: 'swift' },
          { title: 'Kotlin', value: 'kotlin' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SQL', value: 'sql' },
          { title: 'Bash/Shell', value: 'bash' },
          { title: 'JSON', value: 'json' },
          { title: 'YAML', value: 'yaml' },
          { title: 'Markdown', value: 'markdown' },
          { title: 'Dockerfile', value: 'dockerfile' },
          { title: 'Plain Text', value: 'text' }
        ],
        layout: 'dropdown'
      },
      initialValue: 'javascript'
    },
    {
      name: 'code',
      title: 'Code',
      type: 'text',
      options: {
        language: 'javascript'
      }
    },
    {
      name: 'filename',
      title: 'Filename (optional)',
      type: 'string',
      description: 'Optional filename to display above the code block'
    }
  ],
  preview: {
    select: {
      title: 'filename',
      subtitle: 'language',
      code: 'code'
    },
    prepare(selection) {
      const { title, subtitle, code } = selection
      return {
        title: title || 'Code Block',
        subtitle: subtitle ? `Language: ${subtitle}` : 'No language specified',
        media: () => '💻'
      }
    }
  }
}

export default code