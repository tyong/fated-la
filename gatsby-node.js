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
