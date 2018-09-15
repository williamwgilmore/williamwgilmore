import React, { Component } from 'react';

export default class Technology extends Component {
	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h1>Technology</h1>
						<hr /><br />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-2 col-md-offset-3'>
						<h4>Proficient</h4>
						<ul>
							<li>Javascript</li>
							<li>jQuery</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>Bootstrap</li>
							<li>Node.js</li>
							<li>MySQL</li>
							<li>Git</li>
							<li>JSON</li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h4>Comfortable</h4>
						<ul>
							<li>Express</li>
							<li>C#</li>
							<li>ASP.NET</li>
							<li>MVC</li>
							<li>Canvas</li>
							<li>MongoDB</li>
							<li>React.js</li>
							<li>REST</li>
							<li>Heroku</li>
						</ul>
					</div>
					<div className='col-md-2'>
						<h4>Familiar</h4>
						<ul>
							<li>Redux</li>
							<li>Python</li>
							<li>Java</li>
							<li>PHP</li>
							<li>Auth0</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}