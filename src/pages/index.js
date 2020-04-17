import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import typeStyles from "../components/typography.module.css"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero></Hero>
      <p>
        I'm Paul and I am a web developer with <i>far too many</i> interests.
    </p>
      <p>
        But when it comes to websites, I believe in simple, focused and strategic websites over complicated, fancy and confusing ones.
    </p>

      <div style={{
        margin: `1.5rem 0`,
      }}>
        <h2>Recent posts</h2>
        <p>I write to teach, share, inspire and learn. Here you’ll find writing about web, design, learning and everything in between.</p>
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
            }}>
              <div
                style={{
                  fontSize: `0.875rem`
                }}
                className={typeStyles.date}
              >
                {node.frontmatter.date}
              </div>
              <Link
                to={node.fields.slug}
                style={{
                  margin: `0`,
                  color: `#333`
                }}
              >
                {node.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/blog"
          style={{
            color: `#333`,
          }}
        >
          More posts
        </Link>
      </div>
      <div>
        <h2>Contact</h2>
        <p>
          Project enquiries? Questions? Movie recommendations?
        <br></br>
        Send me an email at <a href="mailto:mrpaultruong@gmail.com">mrpaultruong@gmail.com</a>.
      </p>
      </div>
    </Layout >
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
