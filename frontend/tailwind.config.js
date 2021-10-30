
module.exports = {
  purge: [
    'pages/**/*.vue'
  ],
  plugins: [
    require('daisyui')
  ],
  theme: {
    extend: {
      colors: {
        'orange-500': '#ECA675'
      }
    }
  }
}
