/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const _ = require("lodash")

//Create pages from slugs
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allWpPost(sort: { fields: [date] }) {
        nodes {
          title
          content
          slug
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
  `).then(result => {
    result.data.allWpPost.nodes.forEach(node => {
      createPage({
        path: `blog/${node.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          //   This is passed as $slug to blog-post.js
          slug: node.slug,
        },
      })
    })
  })
}
