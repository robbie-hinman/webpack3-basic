const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./webpack.parts');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack demo',
      }),
    ],
  },

]);

const productionConfig = merge([
  parts.extractCSS({
    use: ['css-loader', parts.autoprefix(), 'sass-loader'],
  }),

  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[ext]',
    },
  }),
]);

const developmentConfig = merge([
  {
    output: { publicPath: 'http://localhost:8080/' },
  },
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  parts.loadImages(),
  parts.loadCSS(),
]);

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig);
  }
  return merge(commonConfig, developmentConfig);
};
