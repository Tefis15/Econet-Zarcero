const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin'); // Asegurate de importar esto

module.exports = merge(common, {
    mode: 'production',
    output: {
        publicPath: '/',
        clean: true // Limpia dist antes de cada build
    },
    plugins: [
        new Dotenv({
            safe: true,
            systemvars: true,
        }),
    ]
});