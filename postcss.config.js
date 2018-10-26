module.exports = ({ file, options, env }) => ({
    plugins: {
      autoprefixer: { browsers: 'last 2 version' },
      'postcss-px2rem': {
        remUnit: 100
      }
    }
  });