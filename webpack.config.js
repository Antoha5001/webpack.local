var path = require('path');

module.exports = {

    context: path.resolve( __dirname, 'src'),

    entry: "./index.js",

    mode: "development",

    output: {
        filename: "out.js",
        path: path.resolve( __dirname, 'dist')
    },

    resolve: {
        extensions: ['.js']
    },

    devServer: {
        proxy: {

        },
        // contentBase: path.resolve( __dirname, 'dist'),
        // compress: true,
        port: 9000,
        open: true,
        hot:true
    },

    watch: true

}