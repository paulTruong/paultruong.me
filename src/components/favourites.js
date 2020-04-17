import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import listStyles from '../components/lists.module.css'
export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            favourites {
              anime
              artists {
                name
                website
              }
              games
              listeningto {
                artist
                title
              }
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <ul className={listStyles.list_minimal}>
        <div className={listStyles.list__heading}>Listening to:</div>
        {data.site.siteMetadata.favourites.listeningto.map((node) => (
          <li style={{ fontSize: `0.875rem` }} className={listStyles.list__item_noBullet}>
            {node.title} - {node.artist}
          </li>
        ))}
      </ul>
      <ul className={listStyles.list_minimal}>
        <div className={listStyles.list__heading}>Favourite artists:</div>
        {data.site.siteMetadata.favourites.artists.map((node) => (
          <li style={{ fontSize: `0.875rem` }} className={listStyles.list__item_noBullet}>
            {node.name}
          </li>
        ))}
      </ul>
      <ul className={listStyles.list_minimal}>
        <div className={listStyles.list__heading}>Currently playing:</div>
        {data.site.siteMetadata.favourites.games.map((game) => (
          <li style={{ fontSize: `0.875rem` }} className={listStyles.list__item_noBullet}>
            {game}
          </li>
        ))}
      </ul>
      <ul className={listStyles.list_minimal}>
        <div className={listStyles.list__heading}>Favourite anime:</div>
        {data.site.siteMetadata.favourites.anime.map((show) => (
          <li style={{ fontSize: `0.875rem` }} className={listStyles.list__item_noBullet}>
            {show}
          </li>
        ))}
      </ul>
    </div>
  )
}
