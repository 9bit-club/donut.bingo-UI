/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        blue: '#4F46E5',
        pink: '#FF36AB',
        dark: '#001219',
        white: '#FCFAFA',
        gray: '#CACCCD'
      }
    }
  },
  plugins: []
}
