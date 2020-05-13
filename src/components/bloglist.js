import React from "react"
import { Link } from "gatsby"
import typeStyles from "../components/typography.module.css"

export default ({ blogPosts, isMain }) => {

  let blogListing

  if (isMain) {
    blogListing = (
      <ul
        style={{
          margin: `1rem 0`,
          padding: `0`
        }}
      >
        {blogPosts.map(({ node }) => (
          <li style={{
            display: `block`,
            padding: `0 0 0.5rem 0`,
            margin: `0 0 1rem 0`
          }}>
            <div
              className={typeStyles.date}
            >
              {node.frontmatter.date}
            </div>
            <h2 style={{
              margin: `0`,
              color: `#333`
            }}>
              <Link
                to={node.fields.slug}
                style={{
                  margin: `0`,
                  color: `#333`
                }}
              >
                {node.frontmatter.title}
              </Link>
            </h2>
          </li>
        ))}
      </ul>
    )
  } else {
    blogListing = (
      <ul
        style={{
          margin: `1rem 0`,
          padding: `0`
        }}
      >
        {blogPosts.map(({ node }) => (
          <li style={{
            display: `block`,
            padding: `0 0 0.75rem 0`,
          }}>
            <div
              style={{
                fontSize: `0.7rem`
              }}
              className={typeStyles.date}
            >
              {node.frontmatter.date}
            </div>
            <Link
              to={node.fields.slug}
              style={{
                margin: `0`,
                color: `#333`
              }}
            >
              {node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
  return (
    blogListing
  )
}
