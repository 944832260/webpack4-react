import {createStore, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger';
import rootReducers from './reducers'

// 日志
const logger = createLogger();

const createStoreFn = (initial_state) => {
    // 创建store
    return createStore(
      rootReducers,
      initial_state,
      applyMiddleware(logger)
    );
};

export default createStoreFn;
