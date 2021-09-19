import React from "react"
import PropTypes from "prop-types"
import Header from "./Header/header"
import Footer from "./Footer/footer"
import * as layoutStyles from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <>
      <div className={layoutStyles.siteWrapper}>
        <Header />
        <main className={layoutStyles.main}>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
