// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet', 
    'gatsby-plugin-smoothscroll',
    'gatsby-image',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {family: `IBM Plex Sans`},
          {family: `IBM Plex Mono`}
        ],
      },
    },
    `gatsby-plugin-emotion`

  ]
}
