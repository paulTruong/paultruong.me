import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogListing from "../components/bloglisting"

export default ({ data }) => {
  const posts = data.allWpPost.nodes
  return (
    <Layout>
      <SEO title="Home" />
      <h1>
        Hi!
        <br />
        I'm Paul and welcome to my site.
      </h1>
      <p>
        I am currently working as a Wordpress web developer but my interests go
        far* beyond that.
      </p>
      <p>
        But when it comes to websites, I believe in simple, focused and
        strategic websites over complicated, fancy and confusing ones.
      </p>
      <h2>Blogging</h2>
      <p>
        I write to teach, share, inspire and learn. Here you’ll my latest posts
        about web, design, learning and everything in between.
      </p>
      <BlogListing blogPosts={posts} />
    </Layout>
  )
}
export const data = graphql`
  query {
    allWpPost(limit: 5, sort: { fields: [date], order: DESC }) {
      nodes {
        id
        title
        slug
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
