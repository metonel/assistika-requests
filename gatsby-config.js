require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Assistika requests`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        features: {
          auth: true,
          database: false,
          firestore: false,
          storage: false,
          messaging: false,
          functions: false,
          performance: false
        }
      }
    }
  ]
}
