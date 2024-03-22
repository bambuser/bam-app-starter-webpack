import path from 'path';
import dotenv from 'dotenv';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack'
import BambuserAppDevWebpackPlugin from '@bambuser/webpack-plugin-bam-app-dev-env';

const env = dotenv.config();

const isProduction = process.env.NODE_ENV == 'production';
const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

const config = {
  entry: {
    main: './main.js',
    myCustomView: './view/myCustomView/myCustomView.js',
  },
  output: {
    path: path.resolve('.', 'dist'),
    //publicPath: 'https://example.com',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env.parsed),
    }),
    new BambuserAppDevWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'myCustomView.html',
      template: './view/myCustomView/myCustomView.html',
      chunks: ['myCustomView'],
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  devServer: {
    open: '/devenv/',
  }
};

export default () => {
  if (isProduction) {
    config.mode = 'production';
    config.plugins.push(new MiniCssExtractPlugin());
  } else {
    config.mode = 'development';
  }
  return config;
};
