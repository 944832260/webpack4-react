const ExtractTextPlugin = require('extract-text-webpack-plugin');
const moduleConfigDev = { 
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader','css-loader']
        },
        {
            test: /\.less$/,
            use: ['style-loader','css-loader','less-loader']

        },
        {
            test: /\.(gif|jpg|png)$/,
            use: [
                {
                    loader: 'url-loader',
                    // options: {
                    //     limit: 0,
                    //     name: '[name].[ext]',
                    //     outputPath: './img/',
                    //     publicPath: './img/'
                    // }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/, //排除这个文件夹下的文件
            loader: "babel-loader" //预设babelrc
        }

    ]
};
const moduleConfigProd = { 
    rules: [
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options:{
                        minimize: true //css压缩
                    }
                }, {
                    loader: 'postcss-loader'
                }],
                fallback: 'style-loader',
                publicPath: '../'
            })
        },
        {
            test: /\.less/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: 'css-loader',
                    options:{
                        minimize: true //css压缩
                    }
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: 'less-loader'
                }],
                fallback: 'style-loader',
                publicPath: '../'
            })

        },
        {
            test: /\.(gif|jpg|png)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 0,
                        name: '[name].[ext]',
                        outputPath: './img/',
                        publicPath: './img/'
                    }
                }
            ]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }

    ]
};
// if(process.env.npm_lifecycle_script.indexOf('development')>1){
    module.exports = moduleConfigDev;
    console.log('moduleConfigDev----->')
// }else if(process.env.npm_lifecycle_script.indexOf('production')>1){
//     module.exports = moduleConfigProd;
//     console.log('moduleConfigProd----->')
// }
