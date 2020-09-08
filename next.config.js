const withSass = require('@zeit/next-sass');

const { distDir } = require('./config');
const withFonts = require('nextjs-fonts');
module.exports = 
  withSass({
    dev: process.env.NODE_ENV === 'development',
   distDir: `${distDir}`,
  })
;
module.exports = withSass(
  withFonts({
    webpack(config, options) {
      return config;
    },
  })
);
