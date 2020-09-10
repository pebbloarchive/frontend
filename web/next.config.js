module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ts$/,
      use: ['ts-loader'],
      exclude: [/node_modules/],
    })
    return config
  }
}