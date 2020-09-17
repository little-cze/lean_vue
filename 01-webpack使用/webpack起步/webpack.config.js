const path = require("path")

module.exports = {
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js"
    },
    mode:'development',
    module: {
        rules: [
            { test: /\.css$/, use: [
                 'style-loader', 'css-loader'
                ] },
            { test: /\.ts$/, use: 'ts-loader' }
        ]
    }
}