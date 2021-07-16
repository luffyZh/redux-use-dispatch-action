const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', 

  entry: {
    index: './src/index.ts'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "lib"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [
      {
        test: /\.(tsx|ts)?/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
    alias: {
      'react-redux': require.resolve('react-redux'),
    },
  },

  plugins: [
    new CleanWebpackPlugin()
  ],

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    },
    redux: {
      root: "Redux",
      commonjs2: "redux",
      commonjs: "redux",
      amd: "redux"
    },
  }
}