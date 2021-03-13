import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BlogListing from "../components/bloglisting"

export default ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <BlogListing blogPosts={posts} />
    </Layout>
  )
}
export const data = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }) {
      nodes {
        id
        title
        slug
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
