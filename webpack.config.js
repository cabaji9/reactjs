var webpack = require('webpack');

module.exports = {
    entry: './js/nav.js',

    output: {
        path:'./js',
        filename: 'bundle.js',
        publicPath: '/js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.OldWatchingPlugin()
    ]
}
