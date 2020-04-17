import React from "react"
import SongLyrics from "../songlyrics"
import { useStaticQuery, graphql } from "gatsby"
import Social from '../Social/social'
import FooterStyles from './footer.module.css'
export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              channel
              label
              link
            }
          }
        }
      }
    `
  )
  return (
    <footer className={FooterStyles.footer}>
      <a className={FooterStyles.footer__backtotop} href='#top'>Back to top</a>
      {data.site.siteMetadata.social.map((node) => (
        <Social channel={node.channel} label={node.label} link={node.link}></Social>
      ))}
      © {new Date().getFullYear()}
      <SongLyrics></SongLyrics>
    </footer >
  )
}
