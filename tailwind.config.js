/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'manrope': ['manrope'],
        'manrope-Bold': ['manrope-Bold'],
        'manrope-ExtraLight': ['manrope-ExtraLight'],
        'manrope-Medium': ['manrope-Medium'],
        'manrope': ['manrope'],
        'manrope-SemiBold': ['manrope-SemiBold'],
        'manrope-Light': ['manrope-Light'],
        'manrope-ExtraBold': ['manrope-ExtraBold'],
      },
    },
  },
  plugins: [],
}
