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
        loaders: ['babel-loader?presets=es2015', 'strip?strip[]=console.log']
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
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.DedupePlugin(), // 重複したファイルを除去
    new webpack.optimize.OccurenceOrderPlugin(), // コンパイルするファイルの順番を調整
    new webpack.optimize.UglifyJsPlugin({ // Uglify
      mangle: true, // ローカル変数名を短い名称に変更する
      sourceMap: false,
      compress: {
        unused: false,
        conditionals: false,
        dead_code: false,
        side_effects: false
      }
    }),
    new webpack.ProgressPlugin((percentage, msg) => {
      process.stdout.write('progress ' + Math.floor(percentage * 100) + '% ' + msg + '\r');
    }),
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ]
};