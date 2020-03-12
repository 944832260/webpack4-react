import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import {Router} from "react-router-dom";
import Routers from "./router/router"
import {createBrowserHistory} from "history";
const history = createBrowserHistory();
import createStore from './store/index'
const store = createStore();
import 'antd/dist/antd.css';
import "@public/reset.scss"

// 配置热更新
if (module.hot) {
	console.log("热更新");
	module.hot.accept(() => {
		ReactDom.render(
			<Routers />,
			document.getElementById('root')
		)
	})
}


ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routers />
    </Router>
   </Provider>,
  document.getElementById("root")
);
