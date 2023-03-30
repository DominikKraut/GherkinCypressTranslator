const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // Handle CSS files
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // Handle node modules
      {
        test: /\.node$/i,
        use: ["node-loader"],
      },
    ],
  },
};
