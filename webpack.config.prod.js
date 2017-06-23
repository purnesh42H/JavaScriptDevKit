import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    //Change the path of your entry point files for prod
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
},
    target: 'web',
    //Change the path of your output directory for prod
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [

        // Hash the files using MD5 so that their names change when the content changes
        new ExtractTextPlugin('[name].[contenthash].css'),
        // Hash the files using MD5 so that their names change when the content changes
        new WebpackMd5Hash(),

        // Use CommonChunkPlugin to create a separate bundle
        // of vendor libraries so that they're cached separately
        new webpack.optimize.CommonsChunkPlugin ({
            //Name this chunk as per your source file name
            name: 'vendor'
        }),
        // Create HTML file that includes reference to bundled JS
        new HtmlWebpackPlugin ({
            //Change it your template file
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeReduntantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true,
            //Change this to your track JS token
            trackJSToken:'115f3ef3a2c249768bbb77e3f72f77c0'
        }),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),

        // Minify JS
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')}
        ]
    }
}