import React from "react"
import SongLyrics from "../songlyrics"
import Social from "../Social/social"
import * as footerStyles from "./footer.module.css"

export default () => {
  return (
    <footer className={footerStyles.footer}>
      <Social className={footerStyles.social}/>
      <SongLyrics></SongLyrics>
      <div className={footerStyles.wrapper}>
        <a className={footerStyles.backtotop} href="#top">
          Back to top
        </a>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
