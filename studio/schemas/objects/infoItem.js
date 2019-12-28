export default{
  title: "Info Item",
  name: "infoItem",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Text",
      name: "text",
      type: 'array',
      of: [{type: 'block'}]
    },
    {
      title: "Image",
      name: "image",
      type: "figure"
    }
  ]
};