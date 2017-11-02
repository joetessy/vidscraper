module.exports = {
  entry: ["./src/index.jsx"],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/], // Specifies file types to transpile
        exclude: /(node_modules)/, // Leaves dependencies alone
        loader: 'babel-loader', // Sets Babel as the transpiler
        query: {
          presets: ['es2015', 'react'] // Tells Babel what syntaxes to translate
        }
      }
    ]
  }
};
