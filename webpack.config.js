'use strick';
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js',
        search: './src/search.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    mode: 'production',

    module : {
        rules: [
            { test: /\.txt$/, use: 'raw-loader'}
        ]
    },

    plugins: [
        //moment这个库中，如果引用了./locale/目录的内容，就忽略掉，不会打包进去
        new Webpack.IgnorePlugin(/\.\/locale/, /moment/),
    ]
}