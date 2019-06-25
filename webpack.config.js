var path = require('path');

module.exports = {

    context: path.resolve( __dirname, 'src'),

    entry: {
        home : "./home.js",
        profile : "./profile.js",
        shop : "./shop.js"
    },

    mode: "development",

    output: {
        filename: "[name].js",
        path: path.resolve( __dirname, 'dist')
    },

    resolve: {
        extensions: ['.js']
    },

    watch: true

}