import * as path                  from 'path';
import dotenv                     from 'dotenv';
import { EnvironmentPlugin }      from 'webpack';
import HTMLWebpackPlugin          from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
//import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

dotenv.config();

const IS_CI      = !!process.env.CI;
const IS_DEV     = process.env.NODE_ENV !== 'production';
const resolveDir = (...dir: string[]) => path.resolve(__dirname, 'src', ...dir);

const config = {
  context: __dirname,

  /**
   * Environment settings */
  mode:    IS_DEV ? 'development' : 'production',
  devtool: IS_DEV ? 'eval' : 'source-map',

  /**
   * Output settings */
  entry: {
    main: resolveDir('index')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[chunkhash:16].js',
    publicPath: process.env.STATIC_PATH || '/'
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json'],
    //modules: [resolve(__dirname, 'node_modules/')],
    alias: {
      '~': resolveDir('.')
    }
  },

  optimization: {
    usedExports: true,
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },

  node: {
    __dirname: false,
    __filename: false
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    hot: true,
    compress: true,
    client: {
      overlay: false
    },
    devMiddleware: {
      writeToDisk: true
    },
    historyApiFallback: true,
    allowedHosts: [".trycloudflare.com", ".ngrok-free.app", ".local"],
    port: 9000,
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|ico|svg)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new EnvironmentPlugin({
      CI:            IS_CI,
      NODE_ENV:      null,
      RELEASE:       null,

      SENTRY_DSN:    "https://3397bd278111a360f060c0cdcfb23e28@o4507324968534016.ingest.de.sentry.io/4507330813821008",
      STRIPE_KEY:    "pk_test_51P9CQ7G23XanhTDvbMUqAz4d0eYJAmmOAgpRSpOL8xEQzq7Nkq9PFJKT6mAKEIhz2V3tLMiAvMUbBo2iHFvZL7HV00nFKu28CF",
      DISCORD_KEY:   "1258819745680195604",
      MIXPANEL_KEY:  "3ee2542d8be08757fec6d3d5a7ffecf6",

      NAME:          "Leaflytics",
      DESC:          "Insights into your Leafly habits",
      API_ENDPOINT:  "https://app.leaflytics.io/graphql",
      SYNC_ENDPOINT: "wss://sync.leaflytics.io"
    }),
    new HTMLWebpackPlugin({
      template: resolveDir('index.html'),
      chunks: ['main']
    }),
    new ForkTsCheckerWebpackPlugin({
      async: true,
      devServer: false,
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true
        }
      }
    }),
    //new BundleAnalyzerPlugin()
  ]
}

export default config;
