const path = require('path');

module.exports = {
    mode: "development",
    watch: true,
    entry: path.join(__dirname, "src", "index.tsx"),
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"]
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js',
    },
    devServer: {
        host: "localhost",
        port: 9000,
        inline: false,
        contentBase: [
            path.join(__dirname, 'assets'),
            path.join(__dirname, 'dist')
        ]
    }
}