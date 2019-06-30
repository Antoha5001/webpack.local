var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');

let conf = {

    context: path.resolve( __dirname, 'src'),

    entry: "./index.js",

    mode: "development",

    output: {
        filename: "main.js",
        path: path.resolve( __dirname, 'dist'),
        publicPath: "dist/"
    },

    resolve: {
        extensions: ['.js']
    },

    devServer: {
        //  proxy: {

        // },
        // contentBase: path.resolve( __dirname, 'dist'),
        // compress: true,
        port: 9001,
        overlay : true
        // open: true,
        // hot:true
    },
    module : {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use : [
                    process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],

    watch: true,

    devtool : 'source-map'

}

module.exports = conf;

module.exports = conf;