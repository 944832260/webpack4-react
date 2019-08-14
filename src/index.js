import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import {createStore,applyMiddleware } from 'redux'
import { Provider } from "react-redux";
import {reducers} from "./js/store/reducer";
import thunk from 'redux-thunk'
import { AppContainer } from 'react-hot-loader';
const store = createStore(reducers,applyMiddleware(thunk));

import App from './js/app'


// 熱更新配置開始
if (module.hot) {
    module.hot.accept(() => {
      ReactDom.render(
        <Provider store = {store}>
        <Router >
            <App/>
        </Router>
    </Provider>,
          document.getElementById('root')
      )
    })
  }
// 熱更新配置結束
ReactDOM.render(
    <Provider store = {store}>
        <Router >
            <App/>
        </Router>
    </Provider>
    ,
    document.getElementById('root')
);
