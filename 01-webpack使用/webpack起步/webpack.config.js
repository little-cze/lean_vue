const path = require("path")

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath:'dist/'
    },
    resolve:{
        //alias :别名 git
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