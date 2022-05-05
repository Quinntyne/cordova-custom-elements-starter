const path = require('path');

module.exports = {
    entry: './app/index.ts',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'www'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts','.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['raw-loader']
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ['awesome-typescript-loader']
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 9001
    },
    plugins: [

    ]
};