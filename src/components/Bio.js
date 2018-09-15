import React, { Component } from 'react';

export default class Bio extends Component {
	constructor(props){
		super(props);

		this.animate = this.animate.bind(this);
		this.state = {
			bioClass: 'bioText',
			imageClass: 'bioImage',
			techClass: 'bioText',
		};
	}

    componentDidMount() {
       window.addEventListener('scroll', this.animate, true);
    }

	animate(){
		this.setState({ 
			bioClass: 'bioText slideInLeft',
			imageClass: 'bioImage fadeIn',
			techClass: 'bioText slideInRight',
		});
	}

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-8 col-md-offset-2'>
						<h1 className='text-center'>About Me</h1>
						<hr />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 col-md-offset-2'>				
						<div className={this.state.bioClass}>
							I'm Will, a full stack developer. I've been coding for about 2 years, doing mostly web development. 
							My favorite part of creating websites is the user interface. I love simple but elegant design that 
							makes a user's task as easy as possible. Almost everyday I learn something new or encounter a different
							problem, and the solutions and new tricks are what keep me coming back for more.
						</div>
					</div>
					<div className='col-md-4'>
						<div className={this.state.imageClass}></div>
					</div>
				</div>
			</div>
		);
	}
}