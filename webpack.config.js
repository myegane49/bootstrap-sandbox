const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    module: { 
        rules: [
            { 
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]' 
            }
        ]
    },
    plugins: [ 
        new HtmlWebpackPlugin({
            template: __dirname + '/2_2_basic_typography.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]

};

