import React from "react"
import SocialStyles from "./social.module.css";

const Social = ({ channel, label, link }) => (
  <div className={SocialStyles.social}>
    <div className={SocialStyles.social__channel}>{channel}</div>
    <a className={SocialStyles.social__link} href={link}>{label}</a>
  </div>
)

export default Social
