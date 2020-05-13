import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import typeStyles from "../components/typography.module.css"
import SEO from "../components/seo"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <header
        style={{
          margin: `1.5rem 0`,
        }}
      >
        <h1
          style={{
            margin: `0 0 0.5rem 0`
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
