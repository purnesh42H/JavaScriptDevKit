import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    //Change the path of your entry point files for dev
    entry: [
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    //Change the path of your output directory for dev
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Create HTML file that includes reference to bundled JS
        new HtmlWebpackPlugin ({
            //Change it your template file
            template: 'src/index.html',
            inject: true
        })
    ],
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style','css']}
        ]
    }
}