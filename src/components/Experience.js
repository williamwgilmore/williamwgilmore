import React, { Component } from 'react';

export default class Experience extends Component {
	render() {
		return (
			<div className='experienceBackground'>
				<div className='row'>
					<div className='col-md-12 text-center'>
						<h1>Experience</h1>
						<hr className='blackBar' /><br />
					</div>
				</div>
				<div className='row'>
					<div className='col-md-4 col-md-offset-2'>
						<div className='professionalBackground backgroundZoom'>
							<div className='row'>
								<div className='col-md-12'>
									<h3 className='text-center'>Professional</h3>
									<hr className='blackBar'/>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<h4 className='text-center'>Junior Full Stack Web Developer</h4>
									<h5 className='text-center'>at Aspire Food Group</h5>
									<p className='experienceText'>
										A senior developer and I spent a year building an internal tracking website for Aspire Food Group,
										a rapidly growing startup. Our system tracked the amount of raw materials consumed and where they 
										were used, as well as the conditions that produced their product, crickets, most efficiently. I 
										learned C# with the help of the senior developer while working here.
									</p> 
							  	<br />
								</div>
							</div>
						</div>
					</div>

					<div className='col-md-4'>
						<div className='educationBackground backgroundZoom'>
							<div className='row'>
								<div className='col-md-12'>
									<h3 className='text-center'>Education</h3>
									<hr className='blackBar'/>
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<h4 className='text-center'>Full Stack Web Developer Certification</h4>
									<h5 className='text-center'>at The University of Texas at Austin</h5>
									<p className='experienceText'>
										Students in the program learn to be a full-stack developer, gaining the skills to become proficient in
										 frontend and backend technologies. Featured technologies: JavaScript, HTML5, CSS, jQuery, Responsive Design,
										  Bootstrap, React.js, Node.js, MongoDB, MySQL, Heroku, Security and Session Storage, and User Authentication.
									</p> 
							  	<br />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-6 col-md-offset-3'>
						<div className='technologyBackground backgroundZoom'>
							<div className='row'>
								<div className='col-md-12'>
									<h3 className='text-center'>Technologies</h3>
									<hr className='blackBar' />
								</div>
							</div>
							<div className='row'>
								<div className='col-md-12'>
									<div className='row'>
										<div className='col-md-10 col-md-offset-1 experienceText removeTopMargin'>
											<h4>Proficient</h4>
											<ul>
												<li>Javascript, jQuery, HTML, CSS, Bootstrap, Node.js, MySQL, Git, JSON</li>
											</ul>
											<h4>Comfortable</h4>
											<ul>
												<li>Express, C#, ASP.NET, MVC, Canvas, MongoDB, Reactjs, REST, Heroku</li>
											</ul>
											<h4>Familiar</h4>
											<ul>
												<li>Redux, Python, Java, PHP, Auth0</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='row'>
					<div className='col-md-12'>
						<button href='./pdf/Resume.pdf' download='WillGilmoreResume' className='btn btn-right floatRight experienceButton'>Download Resume</button>
						<br />
						<br />
					</div>
				</div>
			</div>
		);
	}
}