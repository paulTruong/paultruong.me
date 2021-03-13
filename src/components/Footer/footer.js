import React from "react"
import SongLyrics from "../songlyrics"
import { useStaticQuery, graphql } from "gatsby"
import Social from "../Social/social"
import FooterStyles from "./footer.module.css"

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
      <div className={FooterStyles.social}>
        {data.site.siteMetadata.social.map(node => (
          <Social
            key={node.channel}
            channel={node.channel}
            label={node.label}
            link={node.link}
          ></Social>
        ))}
      </div>
      <SongLyrics></SongLyrics>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          margin: `1.5rem 0 0 0`,
        }}
      >
        <a className={FooterStyles.footer__backtotop} href="#top">
          Back to top
        </a>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
