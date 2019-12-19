export default {
    name: 'frontPage',
    type: 'document',
    title: 'Front Page',
    __experimental_actions: [
      // 'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
        name: 'heroTitle',
        type: 'string',
        title: 'Hero Title'
      },
      {
        name: 'heroSubtitle',
        type: 'string',
        title: 'Hero Subtitle'
      },
      {
        name: 'heroImage',
        title: 'Hero image',
        type: 'figure'
      }
    ]
  }
  