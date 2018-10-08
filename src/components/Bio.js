import React, { Component } from 'react';

export default class Bio extends Component {
	constructor(props){
		super(props);

		this.animate = this.animate.bind(this);
		this.state = {
			bioClass: 'bioText alignText',
		};
	}

    componentDidMount() {
       window.addEventListener('scroll', this.animate, true);
    }

	animate(){
		this.setState({ 
			bioClass: 'bioText alignText slideInLeft',
		});
	}

	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-8 col-md-offset-2'>
						<h1 className='text-center'>About Me</h1>
						<hr className='blackBar'/>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 col-md-offset-2'>				
						<div className={this.state.bioClass}>
							I'm Will, a web developer. Most of my experience is in HTML, CSS, JavaScript/jQuery, and node.js 
							websites, but I've also written sites using React.js and I do a small amount of Unity script development
							 in C# for fun. I strive for simple yet elegant design, and focus on intuitive UI. I enjoy development 
							 because of all the unexpected problems that you encounter, and how it makes you come up with new 
							 creative solutions, or get help from people who face the challenge in an entirely different way.
						</div>
					</div>
					<div className='col-md-4 text-center'>
						<div className='bioImage'></div>
					</div>
				</div>
			</div>
		);
	}
}