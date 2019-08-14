import React, { Component } from 'react'
import {router} from './router/router'
import Login from './web/login/login'
import Index from './web/index/home/home'


const routers = [
    {
        path: '/:id',
        exact: true,
        component: Index
    },
    {
        path:'/',
        exact: true,
        render:(props)=><Login url={props}/>
    }
];
class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            a:[1,2,3,4]
         };
    }
    render() {
        return (
            <div>
                {router(routers)}
            </div>
        );
    }
}

export default App;