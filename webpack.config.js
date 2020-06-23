const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isDev = process.env.NODE_ENV=='development'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
    name:'12345',
    mode:'development',
    entry:path.resolve(__dirname,'./src/main.js'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
        {
            test:/\.vue$/,
            loader:'vue-loader'
        },{
            test:/\.css$/,
            use:[
                'style-loader',
                'css-loader'
            ]
        }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title:"App",
            template:'./src/index.html',
            inject: 'body'
        })
    ]
}

if(isDev){
    config.devtool='cheap-module-eval-source-map'//生成map文件
    config.devServer={
        port:8081,
        host:'0.0.0.0'//使用本机ip也可以访问
    }
}

module.exports = config