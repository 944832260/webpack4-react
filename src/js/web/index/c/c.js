import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class C extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to="/b" >跳转到b</Link>
            </div>
        );
    }
}

export default C;