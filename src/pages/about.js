import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Favourites from "../components/favourites"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


export default () => {
  const data = useStaticQuery(graphql`
  query {
    placeholderImage: file(relativePath: { eq: "about.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `)

  return (
    <Layout>
      <SEO title="About me" />
      <Img alt="Me struggling to hold up what looks like a massive foot over my head but the foot is actually a wall painting" style={{ margin: `1rem 0 0 0` }} fluid={data.placeholderImage.childImageSharp.fluid} />
      <h1>A little about me</h1>
      <div style={{ margin: `0 0 2rem 0` }}>
        <p>
          My name is Paul and I'm a web developer with a deep love for design and illustration. I use what I learn to help create websites that everyone can use.
      </p>
        <p>
          I believe in the power of simplicity. That a simple design that everyone can benefit from is much more impressive than a complex design that only some people will understand.
      </p>
        <p>
          Outside of work, I love video games, hip hop, art and anime. I'm also learning as much as I can to become a better designer and illustrator because I've found that I am much more excited about problems that can be solved by amazing visuals rather than problems that require complex algorithms.
      </p>
        <p>
          I’m always up for a chat, so shoot me an <a href="mailto:mrpaultruong@gmail.com">email</a> and say hi.
      </p>
      </div>
      <Favourites></Favourites>
    </Layout>
  )
}
