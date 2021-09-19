import React, { useEffect } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Prism from "prismjs"

export default ({ data }) => {
    useEffect(()=> {
        Prism.highlightAll()
    })
  const post = data.allWpPost.nodes[0]
  return (
    <Layout>
      <SEO title={post.title} />
      <article>
        <header>
          <time dateTime={post.date}>{post.date}</time>
          <h1>{post.title}</h1>
        </header>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
