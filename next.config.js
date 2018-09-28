const withCSS = require('@zeit/next-css');
const withImages = require('next-images');


module.exports = withCSS(withImages({
  webpack(config, options) {
    // Further custom configuration here
    return config
  }
}))
