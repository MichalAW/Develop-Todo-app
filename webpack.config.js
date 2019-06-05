const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');
const plugins = [new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
})];

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [{
               test: /\.js$/,
               loader: "babel-loader"
           },
           {
               test: /\.css$/,
               use: [{
                       loader: 'style-loader'
                   },
                   {
                       loader: 'css-loader',
                       options: {
                           modules: true
                       }
                   }
               ]
           }
       ],

        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                filename: 'index.html',
                inject: 'body'
            }),
            new OptimizeJsPlugin({
                sourceMap: false
            }),
            module.exports = (env) => {
                if (env === 'production') {
                    plugins.push(
                        new OptimizeJsPlugin({
                            sourceMap: false
                        })
                    )
                }
            plugins: plugins
        ]
    },
    devServer: {
        contentBase: './build',
        publicPath: '/',
        historyApiFallback: {
            index: '/index.html'
        },
        port: 3000,
        hot: true,
        compress: false,
        disableHostCheck: true,
    }
};
