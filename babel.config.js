module.exports = {
  presets: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ],
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: ["@babel/plugin-proposal-class-properties"]
};
