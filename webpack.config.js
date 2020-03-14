
const path = require('path')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin  = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');
const Happypack = require('happypack'); //多线程打包，适用于项目非常大的时候
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {MODE} = process.env;
let IsDevelopment = MODE === 'development';//development是true,不是开发false
console.log(MODE,'MODE------>')
module.exports = {
    mode:MODE,
    devtool:IsDevelopment?'source-map':'cheap-module-source-map',//增加映射文件，可以帮我们调试源码，出错了会报出错的列和行
    // watch:true,//自动更新
    // watchOptions:{
    //     poll:1000,//每秒问我100次
    //     aggregateTimeout:500,//防抖 我一直输入代码
    //     ignored:/node_modules/,//不需要进行监控文件
    // },
    entry: {
        index:'./src/index.js',
        // login:'./login.js',
    },  // 入口文件,多入口配置
    output: {
        filename:IsDevelopment?'js/[name].js':'js/[name][hash:8].min.js',
        path: path.resolve(__dirname, "blog"),
        chunkFilename: "js/[name].[hash:8].js",
        publicPath: '/',//公共路径，每个文件引入前都会加./
    },  // 打包出口文件
    resolve:{
        extensions: ['.js'],//从左向右找，添加后缀
        alias:{
            '@pages':path.resolve(__dirname, "src/pages"),
            '@assets': path.resolve(__dirname, "src/assets"),
            '@public': path.resolve(__dirname, "src/public"),
        }
    },
    module: {
        // noParse:/jquery/,//不去解析jquery中的依赖关系，知道这个包没有依赖项，可以使用noParse来忽略掉
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                // use:'Happypack/loader?id=js',//多线程打包，用Happypack的loader。js配置id=js，css配置id=css
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader', //@import 解析路径
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            }, {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            },{
                test:/\.(png|jpg|jpeg|gif|svg)$/,
                exclude: /node_modules/,
                // 做一个限制，当我们的图片小于多少K的时候用base64来转化 limit：50*1024
                // 否则用file-loader产生真实的图片
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,//file-loader在5.0版本更新中默认为了true，所以显示 [object Module]
                            limit: 0,
                            // name: '[name].[ext]',
                            name: "/image/[name].[hash:8].[ext]"
                        }
                    }
                ]
            }
        ]
    },    // 处理对应模块
    plugins: [
        // 模块中注入
        // new webpack.ProvidePlugin({
        //     $:'jquery',
        //     // moment:'moment',
        //     // React:'react',
        //     // ReactDom:'react-dom'
        // }),
        // new webpack.IgnorePlugin(/\.\/locale/,/moment/),//本配置属于优化项，第一个参数为忽略掉的本地引入目录，第二个参数为在哪里引入的时候，这时候需要手动引入语言包
        // new Happypack({
        //     id:'js',
        //     use:[{
        //         loader: "babel-loader",
        //     }]
        // }),//多线程打包
        // new Happypack({
        //     id:'css',
        //     use: [
        //         {
        //             loader: MiniCssExtractPlugin.loader,
        //             options: {
        //                 publicPath: (resourcePath, context) => {
        //                     return path.relative(path.dirname(resourcePath), context) + '/';
        //                 },
        //             },
        //         },
        //         'css-loader', //@import 解析路径
        //         'postcss-loader',
        //     ],
        // }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template: './index.html',
            hash:false,
            minify:{
              removeAttributeQuotes:IsDevelopment?false:true,//删除html的双引号
              collapseWhitespace:IsDevelopment?false:true,//折叠成一行
            },//html压缩
            // chunks:['index'],//多页面引入对应的js
        }),
        // new HtmlWebpackPlugin({
        //     filename:'login.html',
        //     template: './index.html',
        //     hash:false,
        //     // minify:{
        //     //   removeAttributeQuotes:true,//删除html的双引号
        //     //   collapseWhitespace:true,//折叠成一行
        //     // },//html压缩
        //     chunks:['login'], //多页面引入对应的js
        // }),
        new MiniCssExtractPlugin({
            filename: 'css/[name][hash:8].css',
            chunkFilename: 'css/[id].css',
            // ignoreOrder: false, 
        }),
        new webpack.NamedModulesPlugin(),//打印更新的模块路径
        new webpack.HotModuleReplacementPlugin(),//热更新插件
        new CleanWebpackPlugin(),//清除的就是打包的目录
        // new CopyWebpackPlugin([
        //     {from:'./src/lib',to:'lib'}//输出目录默认是打包目录
        // ]),
    ],  // 对应的插件
    devServer: {
        port:'8002',
        host:'0.0.0.0',
        contentBase: path.join(__dirname, 'blog'), //服务器根路径
        compress: true, // 服务端压缩
        disableHostCheck:IsDevelopment?true:false,
        hot: true,
        // inline: false,
        historyApiFallback: true,//不添加这个路由刷新会没页面
    },  // 开发服务器配置
    optimization: {//优化项
        minimizer:[//压缩的
            new UglifyJsPlugin({
                cache: true,//是否应用缓存
                parallel: true,//是否并发，一起打包多个
                sourceMap:true,//源码映射，为了更好的调试
            }),
            new OptimizeCssAssetsPlugin()
        ],
        splitChunks:{//分割代码块
            cacheGroups:{//缓存组
                common:{//公共的模块
                    chunks:'initial',//从入口处开始
                    minSize:0,
                    minChunks:2,//只要引用2次以上就抽离
                },
                vendor:{
                    priority:1,//提高权重，先把第三方模块抽离出来，在去抽离公共代码（common），如果不设置的话，common抽离完了，就不再执行vendor抽离。
                    test:/node_modules/,//把你抽离出来
                    chunks:'initial',//从入口处开始
                    minSize:0,
                    minChunks:2,//只要引用2次以上就抽离
                }
            }
        }
    }
  }