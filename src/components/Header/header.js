import PropTypes from "prop-types"
import React from "react"
import MainMenu from "../MainMenu/mainmenu"
import HeaderStyles from "./header.module.css"
import LayoutStyles from "../layout.module.css"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className={`${LayoutStyles.sidenav} ${LayoutStyles.sidenav__header}`} >
    <h1 className={HeaderStyles.header__title}>
      <Link style={{
        textDecoration: `none`,
        color: `#000`
      }}
        to="/">
        {siteTitle}
      </Link>
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
