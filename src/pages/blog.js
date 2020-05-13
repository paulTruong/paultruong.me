import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogList from "../components/bloglist"

export default ({ data }) => {
  const blogTitle = `Blog`
  const blogDescription = `Thoughts on web, design, creativity and anything else that is on my mind.`
  const blogPosts = data.allMarkdownRemark.edges


  return (
    <Layout>
      <SEO title="Blog" />
      <h1>{blogTitle}</h1>
      <p>{blogDescription}</p>
      <BlogList blogPosts={blogPosts} isMain />
    </Layout>
  )
}

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
/*
Curation over chronological.
- Start here
- Development
- Design

- Highlights
  - Only highlight things flagged to highlight, tagged by design, developement, start here

- Full archive based on tag


*/

