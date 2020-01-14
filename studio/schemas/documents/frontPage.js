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
        name: 'heroSubtitle1',
        type: 'string',
        title: 'Hero Subtitle 1'
      },
      {
        name: 'heroSubtitle2',
        type: 'string',
        title: 'Hero Subtitle 2'
      },
      {
        name: 'heroImage',
        title: 'Hero image',
        type: 'figure'
      },
      {
        name: 'headTitleLarge',
        type: 'string',
        title: 'Info Head Title Large'
      },
      {
        name: 'headTitleSmall',
        type: 'string',
        title: 'Info Head Title Small'
      },
      {
        title: "Info Head Text",
        name: "headText",
        type: 'array',
        of: [{type: 'block'}]
      },
      {
        title: "Info Items",
        name: "infoItems",
        type: "array",
        of: [{type: "infoItem"}]
      }
    ]
  }
  