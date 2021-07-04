// const webpack = require('webpack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

// module.exports = {
//   // Entry and output file
//   entry: './src/index.jsx',
//   output: {
//     path: __dirname + '/public',
//     filename: './app.js',
//   },
//   devServer: {
//     port: 8080,
//     contentBase: './public',
//   },

//   // Library reference
//   resolve: {
//     extensions: ['', '.js', '.jsx'],
//     alias: {
//       modules: __dirname + '/node_modules'
//     }
//   },
//   // Extrac text plugin - CSS
//   plugins: [
//     // Name of file generate
//     new ExtractTextPlugin('app.css')
//   ],
//   // Loader
//   module: {
//     loaders: [{
//       test: /.js[x]?$/,
//       loader: 'babel-loader',
//       exclude: /node_modules/,
//       query: {
//         presets: ['es2015', 'react'],
//         plugins: ['transform-object-rest-spread']
//       }
//     }, {
//       test: /\.css$/,
//       loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
//     }, {
//       test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
//       loader: 'file'
//     }]
//   }
// }

const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },
    plugins: [ 
        new ExtractTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
            loader: 'file'
        }]
    }
}