module.exports = {
  siteMetadata: {
    title: `Paul Truong`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@mrpaultruong`,
    social: [
      {
        channel: `Email`,
        label: `mrpaultruong@gmail.com`,
        link: `mailto:mrpaultruong@gmail.com`,
      },
      {
        channel: `Twitter`,
        label: `@mrpaultruong`,
        link: `https://twitter.com/mrpaultruong`,
      },
      {
        channel: `Instagram`,
        label: `@mrpaultruong`,
        link: `https://www.instagram.com/mrpaultruong/`,
      }
    ],
    favourites: {
      listeningto: [
        {
          title: `3.15.2020`,
          artist: `Childish Gambino`
        },
        {
          title: `YSIV`,
          artist: `Logic`
        },
        {
          title: `XX`,
          artist: `Rage Against The Machine`
        }
      ],
      artists: [
        {
          name: `Dave Rapoza`,
          website: ``
        },
        {
          name: `Yuko Shimizu`,
          website: ``
        },
        {
          name: `Katsuya Terada`,
          website: ``
        },
        {
          name: `Marciej Kuciara`,
          website: ``
        },
        {
          name: `Karla Ortiz`,
          website: ``
        },
        {
          name: `Kim Jung Gi`,
          website: ``
        },
      ],
      games: [
        `MGS5: The Phantom Pain (PS4)`,
        `Overwatch (PC)`,
      ],
      anime: [
        `FLCL`,
        `Cowboy Bebop`,
        `Samurai Champloo`,
        `Ghost in the Shell`,
        `Redline`,
      ],
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
