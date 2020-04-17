import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import typeStyles from "../components/typography.module.css"

export default ({ data }) => {

  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <p>Thoughts on web, design, creativity and anything else that is on my mind.</p>
      <ul
        style={{
          margin: `1rem 0`,
          padding: `0`
        }}
      >
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li style={{
            display: `block`,
            padding: `0 0 0.5rem 0`,
            margin: `0 0 1rem 0`
          }}>
            <div
              className={typeStyles.date}
            >
              {node.frontmatter.date}
            </div>
            <h2 style={{
              margin: `0`,
              color: `#333`
            }}>
              <Link
                to={node.fields.slug}
                style={{
                  margin: `0`,
                  color: `#333`
                }}
              >
                {node.frontmatter.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
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
