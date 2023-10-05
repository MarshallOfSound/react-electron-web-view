const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'ElectronWebView.js', // Name of the output bundle
    path: path.resolve(__dirname, 'lib'), // Output directory
    library: {
      type: "umd",
    },
  },
  devtool: "source-map",
  target: ["electron-renderer"],
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match JavaScript files
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
            }
        },
      },
    ],
  },
};