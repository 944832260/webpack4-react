import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'


// 引入reducer函数
import User from './user';
// 合并reducer函数
const rootReducer = combineReducers({
    User,
    routing: routerReducer
});

export default rootReducer
