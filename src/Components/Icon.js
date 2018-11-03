import React from 'react';
import {
	MorphIcon,
	CloseButton,
	NavButton,
	PlusButton } from 'react-svg-buttons';
class Icon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
			type: props.type
		}
	}
	render() {
		return (
			<MorphIcon
				type={this.state.type}
				style={{cursor:'pointer'}}
				onClick={ () => this.props.addToUserCounter(this.props.incCounter)}
				onMouseEnter={() => this.setState({type:'plusSparks',hover:true})}
				onMouseLeave={() => this.setState({type:this.props.type, hover:false})}
				color='white'/>
		);
	}
}

export default Icon;
