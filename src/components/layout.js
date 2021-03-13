/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link, useStaticQuery, graphql } from "gatsby"
import Footer from "./Footer/footer"
import MainMenu from "./MainMenu/mainmenu"

import "@wordpress/block-library/build-style/style.css"
import LayoutStyles from "./layout.module.css"

export default function Layout({ children }) {
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
    <>
      <header
        className={LayoutStyles.header}
        style={{ marginBottom: `var(--spacing-double)` }}
      >
        <Link className={LayoutStyles.siteTitle} to="/">
          {siteMeta.title}
        </Link>
        <MainMenu></MainMenu>
      </header>
      <main className={LayoutStyles.main}>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
