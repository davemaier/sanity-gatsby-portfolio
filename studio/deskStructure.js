import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'


export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      S.listItem()
        .title('Front Page')
        .child(
          S.editor()
            .id('Front Page')
            .schemaType('frontPage')
            .documentId('frontPage')
        ),

      S.listItem()
        .title('Categories')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),

        S.listItem()
        .title('Blog Posts')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog Posts')),
      
    ])
