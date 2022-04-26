const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: ['./layouts/**/*.html', './assets/scripts/*.js'],
      safelist: {
        standard: ['feather'],
        deep: [/^feather-/],
      },
    }),
  ],
}
