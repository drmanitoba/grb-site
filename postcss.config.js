const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer = require('autoprefixer');
const fontMagician = require('postcss-font-magician');
const colorFunction = require('postcss-color-function');

module.exports = {
  plugins: [
    autoprefixer(),
    colorFunction(),
    postcssPresetEnv({ stage: 0 }),
    fontMagician({
      variants: {
        'Fira Sans': {
          200: [],
          '200i': [],
          500: [],
          '500i': [],
          700: [],
          '700i': [],
        },
      },
      foundries: ['google'],
    }),
  ],
};
