/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-banner': "url('src/assets/img/banner/banner-1.jpg.jfif')"
      }

    },
  },
  plugins: [],
}
