import React from 'react';
import ProfilePic from '../../img/profile_pic.jpg';
import { Image } from 'react-bootstrap';
import TechSection from './Home.Tech.Section';

class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			socialMedialBtn: [
				{label: 'Github', link:'https://github.com/jujubeee314', icon: 'fa fa-github fa-2x'},
				{label: 'Linkedin', link:'https://www.linkedin.com/in/justin-mendoza-72307a21', icon: 'fa fa-linkedin-square fa-2x'},
				{label: 'freeCodeCamp', link:'http://www.freecodecamp.com/jujubeee314', icon: 'fa fa-graduation-cap fa-2x'}
			]
		};
	}

	render() {

		const socialMediaBtn = this.state.socialMedialBtn.map((obj) => {
			return (
				<li>
					<a className="btn btn-default btn-lg" href={ obj.link } target='_blank'>
						<i className={ obj.icon }></i> 
						<span> { obj.label } </span>
					</a>
				</li>
			);
		});


		return (
			<div>
				<div className="row">
					<div className="col-md-12">
						<div className="home-content">
							<h1 className="text-center home-logo">J. Mendoza's Development</h1>
							<div className="home-profile-pic">
								<Image src={ ProfilePic } responsive />
							</div>
							<h2 className="text-center home-motto">Making Life Easier Through Technology.</h2>
							<ul className="list-inline intro-social-buttons">
								{ socialMediaBtn }
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<h3>About Me</h3>
						<p>Application developer and QA engineer with 3 years of application/web development. Highly independent self-starter with both a technical background as well as hands on experience in interfacing with business user groups and IT. Creative, innovative
				and focused on continuous improvements in the business. Strong analytical, problem-solving skills, highly detailed, and organized. Learned in Agile, Software Development Cycle, Business Management Systems, and Project Management.</p>
					</div>
					<div className="col-md-8">
						<TechSection />
					</div>
				</div>
			</div>
		);
	}
}

export default HomePage;

