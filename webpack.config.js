const path = require('path');
// const moduleConfig = require('./webpack_config/module.config.js');
// const apiConfig = require('./webpack_config/api.config.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');
// if (process.env.npm_lifecycle_script.indexOf('development')>1) {
//     console.log('process.env.NODE_ENV-------------------------->111')
// }else{
//     console.log('process.env.NODE_ENV-------------------------->222')
// }
module.exports = {
    devtool:process.env.npm_lifecycle_script.indexOf('production')>1 ? false : 'source-map',//判断是什么环境，false不打包出map文件，“source-map”为了调试
    mode:'development',
    entry:[
    //    {
    //     index:'./src/index.js',
    //    },
       path.resolve(__dirname, './src/index.js'),
        'react-hot-loader/patch',
    ],
    output:{
        filename:'index.js',
        path:path.resolve(__dirname,'dist'),
        // publicPath:path.resolve(__dirname,'dist'),
        publicPath:process.env.npm_lifecycle_script.indexOf('production')>1 ?'./':'/'
    },
    devServer:{
        contentBase:'/',
        host:'localhost',
        compress:true,
        port:'3000',
        overlay: true,
        historyApiFallback: true,//不添加这个路由刷新会没页面
        hot:true,//熱更新配置
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, //排除这个文件夹下的文件
                loader: "babel-loader", //预设babelrc
                query: {
                    plugins: ["react-hot-loader/babel"] //熱更新配置
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
}

// let pluginsConfig = null; //打包配置
// let PATH = null;//打包路径配置
// let ENTRY = {};//入口配置

// pluginsConfig = require('./webpack_config/plugins.config');
// PATH = path.resolve(__dirname, 'dist');




// module.exports={
//     // devtool: apiConfig.devtool,
//     mode:"development",
//     entry:"./src/index.js",
//     output:{
//         // filename:apiConfig.outputFilename,
//         filename:'main.js',
//         path:path.resolve(__dirname,"./dist"),
//     },
//     module: {
//         rules: [
//             {test: /\.css$/,use: ['style-loader','css-loader']},
//             {test: /\.less$/,use: ['style-loader','css-loader','less-loader']},
//             {test: /\.(gif|jpg|png)$/,use: [{loader: 'url-loader'}]},
//             {test: /\.js$/,
//                 exclude: /node_modules/, //排除这个文件夹下的文件
//                 loader: "babel-loader" //预设babelrc
//             }
    
//         ]
//     },
//     plugins:[
//         new HtmlWebpackPlugin({
//             template: './src/index.html'
//         }),
//     ],
//     devServer:{
//         contentBase: path.resolve(__dirname, 'src'), //服务器根路径
//         disableHostCheck: true,
//         hot: false,
//         inline: false,
//         host: '0.0.0.0', //ip
//         compress: true, // 服务端压缩
//         port: 8001 // 端口
//     },
    
// }