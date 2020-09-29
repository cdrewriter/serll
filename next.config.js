const withFonts = require('nextjs-fonts');
const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
module.exports = withFonts({
  webpack(config, options) {
    return config;
  }
});
