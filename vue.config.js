const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

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
      new GenerateSW({
        // Do not precache images
        exclude: [/\.(?:png|jpg|jpeg|svg)$/],

        // Define runtime caching rules.
        runtimeCaching: [{
          urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
            expiration: {
              maxEntries: 10,
            },
          },
        }],      
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