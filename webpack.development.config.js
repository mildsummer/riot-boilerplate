var webpack = require('webpack');

module.exports = {
  entry: {
    'app': './app/javascripts/index.js'
  },
  output: {
    path: './dist/javascripts/',
    publicPath: '/javascripts/',
    filename: '[name].js'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loaders: ['riotjs?type=babel', 'eslint']
      }
    ],
    loaders: [
      {
        test: /\.js$|\.tag$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets=es2015']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.tag']
  },
  eslint: {
    configFile: '.eslintrc'
  },
  node: {
    fs: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
};