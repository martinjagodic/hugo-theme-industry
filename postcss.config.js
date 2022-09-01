const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    require('autoprefixer'),
    purgecss({
      content: [
        './layouts/**/*.html',
        './assets/scripts/**/*.js',
        './layouts/*.html',
        './assets/scripts/*.js',
        '../layouts/**/*.html',
        '../assets/scripts/**/*.js',
        '../layouts/*.html',
        '../assets/scripts/*.js',
      ],
      safelist: [
        // add classes found only in js
      ],
    }),
  ],
}
