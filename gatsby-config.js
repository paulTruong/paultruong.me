module.exports = {
  siteMetadata: {
    title: `Paul Truong`,
    description: `Personal website of Paul Truong. Maker of websites, scribbler of notepads, terrible at games but has fun anyway. My thoughts are my own, no matter how wrong they be.`,
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
    {

      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 700,
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        include_favicon: false,
        legacy: false,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
