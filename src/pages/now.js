import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NowPage = () => (
  <Layout>
    <SEO title="What I'm up to right now" />
    <h1>What I'm up to right now</h1>
    <p>
      I'm the kind of guy that gets bored easily and am always trying to find something new to do. Here is what I'm spending most of my time on right now.
    </p>
    <div style={{ margin: `0 0 2rem 0` }}>
      <h2>Working for a not for profit</h2>
      <p>
        I've been a web developer for Diabetes Australia since May 2018. It's a great job, working with great people and I get a good sense of fulfillment from it.
      </p>
      <h2>Learning 3D Illustration</h2>
      <p>I've started going through the <a href="https://polygonrunway.com/">Polygon Runway</a> 'Become a 3D illustrator' course. I've never tried 3D software before. It feels really fresh and interesting.</p>
      <h2>Drawing Daily</h2>
      <p>I've been building up a drawing habit because it's something I want to get good at. I might post my drawings here.</p>
      <h2>The other important things</h2>
      <p>
        In between work, learning and drawing. I am finding time to do the other things in life that are important to me.
      </p>
      <p>
        That includes spending time with my girlfriend, checking in on my parents, brother and sister, talking trash with my mates and, of course, playing a few games of Overwatch every now and again.
      </p>
      <p>
        I also just got a Nintendo Switch. It's a mighty fine device.
      </p>
    </div>
  </Layout>
)

export default NowPage
