
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//依赖
const path = require('path');
const moduleConfigDev = {
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
                        name: "image/[name].[hash:8].[ext]"
                    }
                }
            ]
        }
    ]
};

const moduleConfigProd = {
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
                        name: "image/[name].[hash:8].[ext]"
                    }
                }
            ]
        }
    ]
};
if (process.env.MODE == 'development') {
    module.exports = moduleConfigDev;
    console.log('moduleConfigDev------[开发环境]---------------->')
} else if (process.env.MODE == 'production') {
    module.exports = moduleConfigProd;
    console.log('moduleConfigProd-----[生产环境]---------------->')
}
