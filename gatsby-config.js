module.exports = {
  siteMetadata: {
    title: 'Fated LA',
  },
  // Disable experimental DEV_SSR — shaders are client-only and break SSR bundles
  flags: {
    DEV_SSR: false,
  },
  plugins: ['gatsby-plugin-react-helmet'],
}
