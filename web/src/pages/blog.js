import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import {mapEdgesToNodes, getBlogUrl} from '../lib/helpers'


export const query = graphql`
    query BlogQuery {
        sanityBlogPosts: allSanityPost {
            edges {
                node {
                    id
                    title
                    _rawExcerpt
                    mainImage {
                        _key
                        _type
                        caption
                        alt
                        }
                        slug {
                            _key
                            _type
                            current
                        }
                    publishedAt
                }     
            }
        } 
    }
`



const Blog = ({data}) => {
    

    const blogPosts = mapEdgesToNodes(data.sanityBlogPosts || {})
    console.log(blogPosts)
    
    return (
        <Layout>
            {blogPosts.map(post => <Link to={getBlogUrl(post.publishedAt, post.slug)}>{post.title}</Link>)}
        </Layout>
)}

export default Blog