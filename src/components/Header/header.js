import React from "react"
import { Link } from "gatsby"
import Social from "../Social/social"
import MainMenu from "../MainMenu/mainmenu"
import { useStaticQuery, graphql } from "gatsby"
import * as headerStyles from "./header.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const siteMeta = data.site.siteMetadata
  return (
    <header
      className={headerStyles.header}
      style={{ marginBottom: `var(--spacing-double)` }}
    >
      <Link className={headerStyles.siteTitle} to="/">
        {siteMeta.title}
      </Link>
      <MainMenu></MainMenu>
      <Social className={headerStyles.social} />
    </header>
  )
}
