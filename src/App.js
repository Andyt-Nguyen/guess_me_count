import React, { Component } from 'react';
import Selections from './Components/Selections';
import GuessingNum from './Components/GuessingNum';
import OutComeCounter from './Components/OutComeCounter';
import SVG from './Components/SVG';
import Icon from './Components/Icon';
import './App.css';


class App extends Component {
	constructor() {
		super();
		this.state = {
			showSuccess: false,
			showFail: false,
			winCounter: 0,
			lossesCounter: 0,
			userCounter: 0,
			computerNum: 0,
			btns: [
				{type:"thunderbolt", incCounter: Math.floor(Math.random() * 12) + 1},
				{type:"hashtag", incCounter: Math.floor(Math.random() * 12) + 1},
				{type:"ban", incCounter: Math.floor(Math.random() * 12) + 1},
				{type:"code", incCounter: Math.floor(Math.random() * 12) + 1}
			]
		}
	}


	renderBtns() {
		return this.state.btns.map( btn => (
			<Icon
			 	addToUserCounter={this.addToUserCounter.bind(this)}
				incCounter={btn.incCounter}
				type={btn.type} />
		));
	}


	randomizeComputerNum() {
		const computerNum = Math.floor(Math.random() * 101) + 19;
		this.setState({ computerNum })
	}


	newGame() {
		const computerNum = Math.floor(Math.random() * 101) + 19;
		const btns = [
			{type:"thunderbolt", incCounter: Math.floor(Math.random() * 12) + 1},
			{type:"hashtag", incCounter: Math.floor(Math.random() * 12) + 1},
			{type:"ban", incCounter: Math.floor(Math.random() * 12) + 1},
			{type:"code", incCounter: Math.floor(Math.random() * 12) + 1}
		];
		const userCounter = 0;
		this.setState({userCounter,computerNum,btns})
	}


	addToUserCounter(inc) {
		let userCounter = this.state.userCounter;
		userCounter += inc;
		this.setState({ userCounter, showSuccess:false, showFail:false })
	}


	componentWillMount() {
		this.randomizeComputerNum();
	}


  render() {
		if(this.state.computerNum === this.state.userCounter) {
			this.newGame()
			this.setState({winCounter:this.state.winCounter+=1, showSuccess:true})
		} else if(this.state.userCounter > this.state.computerNum) {
			this.newGame()
			this.setState({lossesCounter:this.state.lossesCounter+=1, showFail: true})
		}
    return (
			<div style={{position:'relative'}}>

	{
		this.state.showSuccess
		? <div style={{position:'absolute',top:60, display:'flex', width: '100%', justifyContent:'space-around'}}>
			<SVG color={"dodgerblue"} text={"Noice"} />
			<SVG isHide="hidden" color={"crimson"} text={"Destroyed"}/>
		  </div>
		
		: ''
	}

	{
		this.state.showFail
		? <div style={{position:'absolute',top:60, display:'flex', width: '100%', justifyContent:'space-around'}}>
			<SVG isHide="hidden" color={"dodgerblue"} text={"Noice"} />
			<SVG color={"crimson"} text={"Destroyed"}/>
		  </div>
		
		: ''
	}

{/* <div style={{position:'absolute', right:'22%',top:60}}><SVG color={"crimson"} text={"Destroyed"}/></div> */}
				{/* {
					this.state.showSuccess
					? <div style={{position:'absolute', left:'315px',top:80}}><SVG color={"dodgerblue"} text={"Noice"} /></div>
					: ''
				}
				{
					this.state.showFail
					? <div style={{position:'absolute', right:'313px',top:80}}><SVG color={"crimson"} text={"Destroyed"}/></div>
					: ''
				} */}

				<div style={styles.flexHalf}>
					<div style={{flex:1, background:'#313440', height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
						<Selections userCounter={this.state.userCounter} />
						<div>
							{this.renderBtns()}
						</div>
					</div>

					<div style={{flex:1, height:'100vh', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
						<GuessingNum computerNum={this.state.computerNum} />
						<div style={{visibility:'hidden'}}>
							{this.renderBtns()}
						</div>
					</div>
				</div>

				<OutComeCounter
					winCounter={this.state.winCounter}
					lossesCounter={this.state.lossesCounter} />
			</div>
    );
  }
}

const styles = {
	flexHalf: {
		display: 'flex',
	}
}
export default App;
