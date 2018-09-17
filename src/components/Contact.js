import React, { Component } from 'react';

export default class NavBar extends Component {
	render() {
		return (
			<div className='contactBackground'>
				<div className='row'>
					<div className='col-md-6 col-md-offset-3 text-center'>
						<h4 className='contactText'><a href='mailto:williamwgilmore@gmail.com' target='_blank' rel='noopener noreferrer'>Email</a></h4>
						<h4 className='contactText'><a href='https://www.linkedin.com/in/william-gilmore-90a8a8a4/' target='_blank' rel='noopener noreferrer'>Linkedin</a></h4>
						<h4 className='contactText'><a href='https://github.com/williamwgilmore' target='_blank' rel='noopener noreferrer'>GitHub</a></h4>
					</div>
				</div>
			</div>
		);
	}
}