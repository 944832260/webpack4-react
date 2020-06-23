const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pluginsConfig = [
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
		  removeAttributeQuotes:process.env.MODE == 'production'?true:false,//删除html的双引号
		  collapseWhitespace:process.env.MODE == 'production'?true:false,//折叠成一行
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
	
	// new CopyWebpackPlugin([
	//     {from:'./src/lib',to:'lib'}//输出目录默认是打包目录
	// ]),
]
if (process.env.MODE == 'production') {
	pluginsConfig.push(
		new CleanWebpackPlugin()//清除的就是打包的目录
	)
	console.log('CleanWebpackPlugin---[清除dist目录]------------>')
}
module.exports = pluginsConfig;

console.log('pluginsConfig--------[导出插件]---------------->')
