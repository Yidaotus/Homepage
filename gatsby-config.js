module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yidaou.tech",
    title: "Yidaou.tech",
  },
  plugins: [{
    resolve: "gatsby-plugin-eslint",
    options: {
      test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
      exclude: /(node_modules|.cache|public)/,
      stages: ["develop"],
      options: {
        emitWarning: true,
        failOnError: false,
      },
    },
  }, 'gatsby-plugin-postcss', 'gatsby-plugin-fontawesome-css'],
};