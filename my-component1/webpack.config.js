// TODO: あとでちゃんとかく
// https://github.com/oredon/react_redux_saga_apollo/blob/master/webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = (filename) => path.resolve(__dirname, filename);

module.exports = () => {
    return {
        mode: process.env.NODE_ENV,
        entry: {
            main: convertRootPath('src/html-element.js')
        },
        output: {
            path: path.resolve(__dirname, '../dist/my-component1'),
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.js']
        },
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                    },
                    exclude: /node_modules/,
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                chunks: ['main'],
                filename: 'html-element.html',
                template: convertRootPath('src/html-element.html'),
                inject: false
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: convertRootPath('src/development.html'),
                inject: false
            })
        ],
        devServer: {
            port: 3001,
            contentBase: 'dist'
        },
        performance: {
           hints: false
        },
        devtool: '#eval-source-map'
    };
};

