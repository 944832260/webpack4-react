import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class B extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <Link to="/c" >跳转到ccccccccccccccccc</Link>
            </div>
        );
    }
}

export default B;