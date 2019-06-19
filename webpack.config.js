const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function (env) {
    return {
        mode: env.production ? 'production' : 'development',
        entry: './src/index.js',
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: 'app.bundle.js'
        },
        optimization: {
            minimizer: env.production ? [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, 
                    terserOptions: {
                    }
                }),
            ] : [],
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
    }
};
