// TODO: あとでちゃんとかく
// https://github.com/oredon/react_redux_saga_apollo/blob/master/webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = (filename) => path.resolve(__dirname, filename);

module.exports = () => {
    return {
        mode: process.env.NODE_ENV,
        entry: {
            "my-component2": convertRootPath('src/my-component2.js')
        },
        output: {
            path: path.resolve(__dirname, '../dist/my-component2'),
            filename: '[name].js'
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
                filename: 'my-component2.html',
                template: convertRootPath('src/my-component2.html'),
                inject: false
            }),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: convertRootPath('src/development.html'),
                inject: false
            })
        ],
        devServer: {
            port: 3002,
            contentBase: 'dist'
        },
        performance: {
           hints: false
        },
        devtool: '#eval-source-map'
    };
};

