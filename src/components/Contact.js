import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<div className='contactBackground'>
				<div className='row'>
					<div className='col-md-2 col-md-offset-1'>
						<h4 className='contactText'>Contact Me</h4>
					</div>
					<div className='col-md-8 text-right'>
						<h4 className='contactText'><a href='mailto:williamwgilmore@gmail.com' target='_blank'>Email</a></h4>
						<h4 className='contactText'><a href='https://www.linkedin.com/in/william-gilmore-90a8a8a4/' target='_blank'>Linkedin</a></h4>
						<h4 className='contactText'><a href='https://github.com/williamwgilmore' target='_blank'>GitHub</a></h4>
					</div>
				</div>
			</div>
		);
	}
}