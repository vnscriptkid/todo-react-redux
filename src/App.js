// import d3 from 'd3';
// import * as d3 from "d3";
import React, { Component } from 'react';

const App = () => <div>hello everyone i'm done</div>

// let TimelineDot = ({ position, txt }) => (
// 	<g transform={`translate(${position, 0})`}>
// 		<circle cy={160}
// 				r={5}
// 				style={{fill: 'blue'}} />
// 		<text   y={115}
// 				x={-95}
// 				transform="rotate(-45)"
// 				style={{fontSize: '10px'}}>{txt}</text>

// 	</g>
// )

// class App extends Component {

// 	constructor({ data = [] }) {
// 		const times = d3.extent(data.map(d => d.year))
// 		const range = [50, 450]
// 		super({ data })
// 		this.scale = d3.scaleTime().domain(times).range(range)
// 		this.state = { data, times, range }
// 	}

// 	render() {
// 		const { data } = this.state;
// 		const { scale } = this;
// 		return (
// 			<div>
// 				<h1>Timeline</h1>
// 				<canvas>
// 					{data.map((d, i) => 
// 						<TimelineDot 
// 							position={scale(d.year)}
// 							txt={`${d.year} - ${d.event}`}
// 						/>						
// 					)}
// 				</canvas>
// 			</div>
// 		)
// 	}
// }

export default App;