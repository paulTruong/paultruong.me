import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as socialStyles from "./social.module.css"

const Social = ({className}) => {
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
    <ul className={`${className} ${socialStyles.social}`}>
      {data.site.siteMetadata.social.map(node => (
        <li key={node.channel} className={socialStyles.socialItem}>
          <div>{node.channel}</div>
          <a href={node.link}>{node.label}</a>
        </li>
      ))}
    </ul>
  )
}

export default Social
