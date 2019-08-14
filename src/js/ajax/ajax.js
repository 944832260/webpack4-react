
//https://blog.csdn.net/frank_come/article/details/80010611
import axios from 'axios'
import Qs from 'qs';
axios.defaults.timeout = 600000;
//整理数据
axios.defaults.transformRequest = (data) => {
    console.log(FormData)
    if(data instanceof FormData){
        return data
    }else{
        data = Qs.stringify(data);
        return data
    }
    
}

// 路由请求拦截
// http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest'
        return config;
    },
    error => {
        return Promise.reject(error.response);
    }
);

// 路由响应拦截
// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status == "503") {
            console.log('1111')
            // if(localStorage.logintype == 'ADMIN'||localStorage.logintype == 'KEFU'){
            //     window.location = "/user.html#/loginu";
            // }else{
            //     window.location = "/user.html#/loginc";
            // }
            return
        } else {
            return Promise.reject(error.response)   // 返回接口返回的错误信息
        }
    }
);
export default axios;