const { siteUrlForBuild } = require('./scripts/site-url-for-build.cjs')

const siteUrl = siteUrlForBuild()

module.exports = {
  siteMetadata: {
    title: 'Fated LA',
    siteUrl,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        excludes: ['/result', '/debug-result', '/page-2'],
      },
    },
  ],
}
