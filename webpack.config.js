// webpack.config.js
const path = require("path");
module.exports = {
  context: __dirname,
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      { test: /\.css$/, include: [path.resolve(__dirname, "node_modules/@pico"), path.resolve(__dirname, "src")], use: ["style-loader", "css-loader"] },
    ],
  },
};
