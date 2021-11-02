
module.exports = {
  purge: [
    'pages/**/*.vue'
  ],
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui')
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false
  },
  theme: {
    extend: {
      colors: {
        'orange-500': '#ECA675',
        'gray-48': '#777E90',
        orange: '#ff8365',
        'black-0': '#2D3436'
      }
    }
  }
}
