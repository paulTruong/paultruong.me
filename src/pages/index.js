import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/bloglist"

export default ({ data }) => {
  const blogTitle = `Recent posts`
  const blogDescription = `I write to teach, share, inspire and learn. Here you’ll find writing about web, design, learning and everything in between.`
  const blogPosts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{
        fontFamily: '"Inter", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif',
        textTransform: "uppercase",
        margin: "1.5rem 0",
        fontWeight: "800",
        fontSize: "1.375rem",
        lineHeight: "1.2",
        color: "#c0c0c0",
      }}>
        <span style={{ color: "#000" }}>Web developer,</span>
        <br></br>
        illustrator, designer, popper, locker, doodler, little brother, son, gamer, dreamer, friend,
        <span style={{ color: "#000" }}> human</span>
      </div>
      <p>
        I'm Paul and I am a web developer with <i>far too many</i> interests.
      </p>
      <p>
        But when it comes to websites, I believe in simple, focused and strategic websites over complicated, fancy and confusing ones.
      </p>
      <div style={{ margin: `1.5rem 0` }}>
        <h1>{blogTitle}</h1>
        <p>{blogDescription}</p>
        <BlogList blogPosts={blogPosts} />
        <p>That's it for now, but more is coming. Promise!</p>
      </div>
      <div>
        <h2>Contact</h2>
        <p>Questions? Answers? Movie recommendations?</p>
        <p>Send me an email at <a href="mailto:mrpaultruong@gmail.com">mrpaultruong@gmail.com</a>.</p>
      </div>
    </Layout >
  )

}
export const data = graphql`
  query {
    allMarkdownRemark(limit:5, sort: { fields: [frontmatter___date], order: DESC }) {
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
