import React from "react"
import { Link } from "gatsby"
import * as styles from "../components/bloglisting.module.css"

const ListLink = props => (
  <li className={styles.listItem}>
    <time className={styles.date} dateTime={props.date}>
      {props.date}
    </time>
    <Link className={styles.link} to={props.to}>
      {props.children}
    </Link>
  </li>
)

export default function BlogListing({ blogPosts }) {
  return (
    <ul className={styles.list}>
      {blogPosts.map(node => (
        <ListLink key={node.id} to={`/blog/${node.slug}`} date={node.date}>
          {node.title}
        </ListLink>
      ))}
    </ul>
  )
}
