import React from 'react';

const GuessingNum = ({computerNum}) => (
	<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
		<h1 style={{color:'#313340', fontSize:'50px'}}>
			{ computerNum }
		</h1>
	</div>
);

export default GuessingNum;
