export default {
    title: "Info",
    name: "info",
    type: "document",
    __experimental_actions: [
        // 'create',
        'update',
        // 'delete',
        'publish'
      ],
    fields: [
      {
        title: "Head Item",
        name: "headItem",
        type: "infoItem"
      },
      {
        title: "Info Items",
        name: "infoItems",
        type: "array",
        of: [{type: "infoItem"}]
      }
    ]
  }