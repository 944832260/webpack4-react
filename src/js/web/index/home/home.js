import React, { Component } from 'react'
import {Route} from 'react-router'
import B from '../b/b'
import C from '../c/c'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    componentDidMount(){
        this.bendi()
    }
    bendi=() =>{
        // console.log(localStorage.getItem("name"))
        let {history} = this.props;
        // console.log(this.props)
        if (localStorage.getItem("name") == 'a') {
            //获取数据，通过token，也就是name
        }else{
            history.push('/')
        }
    }
    render() {
        return (
            <div>
                <Route path='/b' exact strict component={B}/>
                <Route path='/c' exact strict component={C}/>
            </div>
        );
    }
}

export default Home;