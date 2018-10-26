module.exports = {
  MOCK_PORT: 8889,
  PORT: 8888,
  // PATHS: {
  //   index: "./src/browser.js",
  //   output: "dist/public",
  //   publicPath: 'public/'
  // },
  PATHS: {
    index: "./src/index.js",
    output: "dist/",
    publicPath: ''
  },
  // proxy: {
  //   '/api': {
  //     target: 'http://localhost:3000',
  //     pathRewrite: {'^/api' : ''}
  //   }
  // },
  proxy: false,
  sprite: false,
  css: {
    rem: true,
    remUnit: 100
  }
};
