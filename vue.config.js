const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  "configureWebpack": (env, argv) => ({
    mode: argv && argv.mode || 'development',
    devtool: (argv && argv.mode || 'development') === 'production' ? 'source-map' : 'eval',

    entry: './src/main.js',

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js'
    },

    node: false,

    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ],
          exclude: /\.module\.css$/
        }
      ]
    },

    resolve: {
      extensions: [
        '.js',
        '.vue',
        '.json'
      ],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src')
      }
    },

    plugins: [
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: ['dist']
      }),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, 'public'),
        to: path.resolve(__dirname, 'dist'),
        toType: 'dir'
      }]),
      new SWPrecacheWebpackPlugin({
        cacheId: 'global-train-app',
        filename: 'service-worker.js',
        staticFileGlobs: ['/dist/**/*.{js,css}', '/'],
        minify: true,
        stripPrefix: 'dist/',
        dontCacheBustUrlsMatching: /\.\w{6}\./
      })
    ],
  
    
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      },
      runtimeChunk: {
        name: entrypoint => `runtime~${entrypoint.name}`
      },
      mangleWasmImports: true,
      removeAvailableModules: true,
      removeEmptyChunks: true,
      mergeDuplicateChunks: true
    },
  
    devServer: {
      compress: true,
      host: 'localhost',
      overlay: true,
    }
  })
}