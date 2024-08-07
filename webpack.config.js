/* eslint-disable operator-linebreak */
/* eslint-disable indent */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const target = mode === 'development' ? 'web' : 'browserslist';
const devtool = mode === 'development' ? 'source-map' : undefined;

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    watchFiles: ['src/**/*.{html,scss,css}'],
  },
  entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.ts')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[hash][ext][query]',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    ...(mode === 'production'
      ? [
          new MiniCssExtractPlugin({
            filename: '[name][contenthash].css',
          }),
        ]
      : []),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(sa|sc|c|)ss$/i,
        use:
          mode === 'development'
            ? ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            : [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader',
              ],
      },
      {
        test: /\.(jpg|jpeg|png|svg|gif|webp|avif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff2|woff|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?(j|t)s$/i,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
