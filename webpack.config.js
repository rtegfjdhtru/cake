const path = require('path');

module.exports = {

    entry: path.resolve(__dirname, "src/js/app.js"),
    output: {
        path: path.resolve(__dirname, 'dist.js'),
        filename: 'bundle.js'
    },
    devtool: 'eval',
    //お決まり
    module:{
        loaders:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                query:{
                    presets:['react','env']
                }
            }
        ]
    },
    resolve:{
        modules:[path.join(__dirname,'src'),'node_modules'],
        extensions:['.js'],
        alias: {
            vue:'vue/dist/vue.esm.js' //npm installしたvueはtemplete機能のないランタイム限定ビルドなのでこっちを使うよりに
        }

    }
};

