import React from 'react';

const Selections = (props) => (
	<div style={styles.userContainer}>
		<h1 style={{color:'white', fontSize:'50px'}}>{props.userCounter}</h1>
	</div>
)

const styles = {
	userContainer: {
		justifyContent:'center',
		alignItems: 'center'
	}
}
export default Selections;
