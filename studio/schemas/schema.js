// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import siteSettings from './documents/siteSettings'
import frontPage from './documents/frontPage'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import bodyPortableText from './objects/bodyPortableText'
import post from './documents/post'
import infoItem from './objects/infoItem'
import excerptPortableText from './objects/excerptPortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    bodyPortableText,
    excerptPortableText,
    infoItem,
    
    // The following are document types which will appear
    // in the studio.
    category,
    post,
    siteSettings,
    frontPage,
    
  ])
})
