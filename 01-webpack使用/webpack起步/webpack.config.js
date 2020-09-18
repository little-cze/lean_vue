const path = require("path");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: "./src/main.js",
    devtool:"sourcemap",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // publicPath:'dist/'
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html'
        }),
        new UglifyjsWebpackPlugin()
    ],
    resolve:{
        //alias :别名
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    mode: 'development',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: 'ts-loader'},
            {test: /\.less$/, use: 'less_loader'},
            {test: /\.vue$/,use: [
                'vue-loader'
                ]},
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader",options:{
                        strictMath:true,
                        noIeCompat:true
                    }// compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8196,
                            name:'img/[name].[hash:8].[ext]'
                        },

                    }
                ]
            },
            // {
            //     test: /\.js$/,
            //     //exclude:排除
            //     //include:包含
            //     exclude: /(node_modules|bower_components)/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['@babel/preset-es2015']
            //         }
            //     }
            // }
        ]
    }
}