import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Favourites from "../components/favourites"

const AboutPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>A little about me</h1>
    <div style={{ margin: `0 0 2rem 0` }}>
      <p>
        My name is Paul and I am a web developer but I also have a deep love for design and illustration. I use what I learn to help create websites that everyone can use.
      </p>
      <p>
        I believe in the power of simplicity. That a simple design that everyone can benefit from is much more impressive than a complex design that only some people will understand.
      </p>
      <p>
        Outside of work, I love video games, hip hop, art and anime. I’m always up for a chat, so shoot me an <a href="mailto:mrpaultruong@gmail.com">email</a> and let’s start a conversation.
      </p>
    </div>
    <Favourites></Favourites>
  </Layout>
)

export default AboutPage
