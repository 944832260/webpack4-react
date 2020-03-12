import * as React from "react";
import { connect } from 'react-redux'
import { renderRoutes } from "react-router-config";
import "./home.scss";
import { Popover, Button } from 'antd';



class Home extends React.Component {
	state = {
		
	};

	UNSAFE_componentWillMount() {

	}

	componentDidMount() {

	}


	router = () =>{
		this.props.history.push('/login')
	}
	render() {
		return (
			<div id="Home">
				我就是homev
				<button onClick={this.router}>跳转到登录页</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		User: state.User,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		UpdateUser: obj => {
			dispatch(UpdateUser(obj));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
