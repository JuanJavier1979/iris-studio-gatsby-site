/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Iris Studio',
    author: '@JuanJavier1979'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images'
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Iris Studio`,
        short_name: `Iris-Studio`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#009b77`,
        display: `standalone`,
        icon: `src/assets/images/iris-studio-icon.png`,
      },
    },
    `gatsby-plugin-offline`
  ]
}
