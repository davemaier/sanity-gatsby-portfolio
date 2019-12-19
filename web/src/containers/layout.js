import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import Layout from '../components/layout'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

function LayoutContainer (props) {
  
  return (
    <StaticQuery
      query={query}
      render={data => {
        return (
          <Layout
            {...props}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
