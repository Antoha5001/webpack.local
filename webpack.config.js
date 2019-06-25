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

    watch: true

}