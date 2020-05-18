import React from "react"
import { Link } from "gatsby"
import MainMenuStyles from "./mainmenu.module.css"

const MainMenu = () => (
  <nav>
    <ul className={MainMenuStyles.mainMenu}>
      <li className={MainMenuStyles.mainMenu__item}>
        <Link className={MainMenuStyles.mainMenu__link} to="/">Home</Link>
      </li>
      <li className={MainMenuStyles.mainMenu__item}>
        <Link className={MainMenuStyles.mainMenu__link} to="/about">About</Link>
      </li>
      <li className={MainMenuStyles.mainMenu__item}>
        <Link className={MainMenuStyles.mainMenu__link} to="/blog">Blog</Link>
      </li>
      <li className={MainMenuStyles.mainMenu__item}>
        <Link className={MainMenuStyles.mainMenu__link} to="/now">Now</Link>
      </li>
    </ul>
  </nav>
)

export default MainMenu
