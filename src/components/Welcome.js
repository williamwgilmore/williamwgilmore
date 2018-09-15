import React, { Component } from 'react';

export default class Welcome extends Component {
	render() {
		return (
			<div id='welcomeBackground'>
				<div className='text-center centerHeight'>
					<h1 className='title mainTitle'>William Gilmore</h1>
					<hr className='divider'/>
					<h2 className='title subTitle'>Full Stack Web Developer</h2>
				</div>
			</div>
		);
	}
}