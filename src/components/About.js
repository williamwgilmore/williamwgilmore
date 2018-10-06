import React, { Component } from 'react';
import Bio from './Bio.js';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<div className='borderAbove'></div>
				<div className='about'>
					<Bio />
				</div>
				<div className='borderBelow'></div>
			</div>
		);
	}
}