const fs = require('fs')
const path = require('path')
const { siteUrlForBuild } = require('./scripts/site-url-for-build.cjs')

exports.onPostBuild = () => {
  const origin = siteUrlForBuild()
  const robots = [
    'User-agent: *',
    'Allow: /',
    '',
    'Disallow: /result',
    'Disallow: /debug-result',
    'Disallow: /page-2',
    '',
    `Sitemap: ${origin}/sitemap-index.xml`,
    '',
  ].join('\n')
  fs.writeFileSync(path.join(process.cwd(), 'public', 'robots.txt'), robots, 'utf8')
}

exports.onPreInit = () => {
  if (process.env.GATSBY_LAST_UPDATED) return
  process.env.GATSBY_LAST_UPDATED = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Los_Angeles',
  })
}

/** Keep `src/pages/dev-404-page.js` out of the production site (it exists for stable dev webpack resolution). */
exports.onCreatePage = ({ page, actions }) => {
  const isGatsbyBuild = process.argv.some((a) => a === 'build')
  if (!isGatsbyBuild) return
  const p = page.path.replace(/\/$/, '')
  if (p === '/dev-404-page') actions.deletePage(page)
}

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [/@paper-design/],
          use: [loaders.js()],
        },
      ],
    },
  })
}
