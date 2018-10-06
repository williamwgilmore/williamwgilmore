import React, { Component } from 'react';

export default class Welcome extends Component {
	render() {
		return (
			<div id='welcomeBackground'>
				<div className='row'>
					<div className='col-md-12'>
						<div className='text-center centerHeight'>
							<h1 className='title mainTitle'><b>William Gilmore</b></h1>
							<hr className='divider'/>
							<h2 className='title subTitle'>Full Stack Web Developer</h2>
						</div>
					</div>
				</div>
			</div>
		);
	}
}