module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    camelcase: 0,
    'vue/require-default-prop': 0
  }
}
