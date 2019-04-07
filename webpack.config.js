// TODO: あとでちゃんとかく
// https://github.com/oredon/react_redux_saga_apollo/blob/master/webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const convertRootPath = (filename) => path.resolve(__dirname, filename);

module.exports = () => {
    return {
        mode: process.env.NODE_ENV,
        entry: {
            main: convertRootPath('src/main.js')
        },
        output: {
            path: convertRootPath('dist'),
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
                        loader: 'babel-loader'
                    },
                    exclude: /node_modules/,
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',// output filename
                template: convertRootPath('src/index.html'),// input file path
                inject: false,
            })
        ],
        devServer: {
            port: 3000,
            contentBase: 'dist'
        },
        performance: {
           hints: false
        },
        devtool: '#eval-source-map'
    };
};

