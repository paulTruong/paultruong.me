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
      },
    ],
    favourites: {
      listeningto: [
        {
          title: `King's Disease`,
          artist: `Nas`,
        },
      ],
      artists: [
        {
          name: `Dave Rapoza`,
          website: ``,
        },
        {
          name: `Yuko Shimizu`,
          website: ``,
        },
        {
          name: `Katsuya Terada`,
          website: ``,
        },
        {
          name: `Marciej Kuciara`,
          website: ``,
        },
        {
          name: `Karla Ortiz`,
          website: ``,
        },
        {
          name: `Kim Jung Gi`,
          website: ``,
        },
      ],
      games: [
        `Chrono Trigger (DS Remake on 3DS)`,
        `Overwatch (PC)`,
        `Stardew Valley (PC)`,
        `Eagerly waiting for Cyberpunk 2077 patches for PS4`,
      ],
      anime: [
        `FLCL`,
        `Cowboy Bebop`,
        `Samurai Champloo`,
        `Ghost in the Shell`,
        `Redline`,
      ],
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://shungokusatsu.paultruong.me/graphql`,
      },
    },
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
