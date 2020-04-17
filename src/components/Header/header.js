import PropTypes from "prop-types"
import React from "react"
import MainMenu from "../MainMenu/mainmenu"
import HeaderStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header
    id="top"
    style={{
      margin: `0 0 2rem 0`,
    }}
  >
    <h1 className={HeaderStyles.header__title}>
      {siteTitle}
    </h1>
    <MainMenu></MainMenu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
