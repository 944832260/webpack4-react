const path = require('path');
const env =  {
    // target: 'http://192.168.1.91:8000',//测试机
    target: 'http://localhost:8000',
  
}
let type = null;
if(process.env.npm_lifecycle_script.indexOf('development')>1){
    console.log('development---api-->');
    type = 'development';
}else if(process.env.npm_lifecycle_script.indexOf('production')>1){
    console.log('production---api-->')
    type = 'production';
}



const apiConfig = {
    devtool: type == 'production' ? 'none':'source-map',
    outputFilename: type == 'production' ? './js/[name][hash].min.js':'./js/[name].js',
    target: env.target ? env.target : 'http://localhost:8000',
    host: '0.0.0.0',
    disableHostCheck: type == 'production' ? false : true
};
module.exports = apiConfig;
