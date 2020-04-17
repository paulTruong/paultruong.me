import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import typeStyles from "../components/typography.module.css"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <header
        style={{
          margin: `0 0 2rem 0`,
        }}
      >
        <h1
          style={{
            margin: `0 0 0.25rem 0`
          }}
        >{post.frontmatter.title}</h1>
        <div className={typeStyles.date}>{post.frontmatter.date}</div>
      </header>
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }

`
