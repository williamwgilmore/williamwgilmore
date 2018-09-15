import React, { Component } from 'react';

export default class Projects extends Component {
	render() {
		return (
			<div>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h1>Projects</h1>
						<hr /><br />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 gameHostSection'>
						<h2 className='text-center'>
							Game Host
						</h2>
						<a href='https://radiant-sands-20076.herokuapp.com/breakout' className='gameHostLink' target='_blank' />
						<p>
							For my final project at The University of Texas at Austin's Bootcamp, I created a game hosting site using
							React, Canvas, Mongoose, and Auth0. The idea behind the site is that the only code that needs to change is
							the code for different games, while the chatroom or leaderboard list components can be reused for each game.
						</p>						
					</div>
					<div className='col-md-4 immigrationPortalSection'>
						<h2 className='text-center'>
							Immigration Portal
						</h2>
						<a href='https://fast-everglades-41667.herokuapp.com/document' className='immigrationPortalLink' target='_blank' />
						<p>
							One of my group projects from UT's coding bootcamp, we found someone looking for a website to help immigrants
							connect with pro bono lawyers. We never heard back from them, but decided to make a mock website anyways.
						</p>
					</div>
					<div className='col-md-4 aspireSection'>
						<h2 className='text-center'>
							<b>Aspire Food Group</b>
						</h2>
						<p>
							A senior developer and I spent a year building an internal tracking website for Aspire Food Group, a 
							rapidly growing startup. Our system tracked the amount of raw materials consumed and where they were used,
							and the conditions that produced their product, crickets, most efficiently. 
							<br /><br />
							The internal site is confidential, and I cannot share the code or images from the site.
						</p>
					</div>
				</div>
			</div>
		);
	}
}