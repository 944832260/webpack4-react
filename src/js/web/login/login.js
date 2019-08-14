import React, { Component } from 'react';
import axios from '../../ajax/ajax'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            pass:'sssss',
            user:'sdfds'
         };
    }
    componentDidMount(){
        console.log(this.props)
    }
    pass=(ev)=>{
        let {value:pass} = ev.target;
        this.setState({pass})
        console.log(pass)
    }
    user=(ev)=>{
        let {value:user} = ev.target;
        console.log(user)
        this.setState({user})
    }
    login = () =>{
        let {user,pass} = this.state;
        let {url:{history}} = this.props;
        axios.post('http://localhost:88/api/user/login',{
                    username:user,
                    password:pass
        },{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(res=>{
            console.log(res)
            // console.log(pass,user)
            if (res.data.code == 0) {
                localStorage.setItem("name","a") 
                history.push('/b')
            }
        })
        console.log(user,pass)
    }
    render() {
        let {pass,user} = this.state;
        return (
            <div>
                <input type="text" onChange = {this.user} value={user}/>
                <input type="text" onChange = {this.pass} value={pass}/>
                
                <button onClick={this.login}>登录</button>
            </div>
        );
    }
}

export default Login;