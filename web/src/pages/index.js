import React from 'react'
import {graphql} from 'gatsby'

import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import Contact from '../components/contact'
import Hero from '../components/hero'
import Info from '../components/info'

export const query = graphql`
  query IndexPageQuery {

    site: sanitySiteSettings {
      id
      title
      keywords
    }
    frontPage: sanityFrontPage {
      
      heroTitle
      heroSubtitle1
      heroSubtitle2
      heroImage {
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
      
      _rawInfoItems(resolveReferences: {maxDepth: 10})
    }
  }
`

const IndexPage = props => {
  const {data, errors} = props

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    )
  }

  const frontPage = (data || {}).frontPage

  console.log(frontPage)

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      
        <Hero title={frontPage.heroTitle} subTitle1={frontPage.heroSubtitle1} subTitle2={frontPage.heroSubtitle2} image={frontPage.heroImage}></Hero>

        <Info infoItems={frontPage._rawInfoItems} headItem ={frontPage.headItem}></Info>
        

        <Contact></Contact>
      
    </Layout>
  )
}

export default IndexPage
