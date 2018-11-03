import React from 'react';

const OutComeCounter = ({winCounter, lossesCounter}) => (
	<div style={{position:'absolute', display:'flex', justifyContent:'space-around',top:'30px', left:0, width: '100%'}}>
		<span style={{color:'white'}}>Wins: {winCounter}</span>
		<span>Loses: {lossesCounter}</span>
	</div>
);

export default OutComeCounter;
