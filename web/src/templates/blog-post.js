import React from 'react'
import {graphql} from 'gatsby'
import GraphQLErrorList from '../components/graphql-error-list'
import BlogPost from '../components/blog-post'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: {eq: $id}) {
      id
      publishedAt
      categories {
        _id
        title
      }
      
      title
      slug {
        current
      }

      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }

      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
      
    }
  }
`

const BlogPostTemplate = props => {
  const {data, errors} = props
  const post = data && data.post
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {post && <SEO title={post.title || 'Untitled'} description={toPlainText(post._rawExcerpt)} image={post.mainImage} />}

      {errors && (
          <GraphQLErrorList errors={errors} />
        
      )}

      {post && <BlogPost {...post} />}
    </Layout>
  )
}

export default BlogPostTemplate
