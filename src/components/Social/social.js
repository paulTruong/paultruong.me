import React from "react"
const Social = ({ channel, label, link }) => (
  <div
    style={{
      marginBottom: `1rem`,
    }}
  >
    <div>{channel}</div>
    <a href={link}>{label}</a>
  </div>
)

export default Social
