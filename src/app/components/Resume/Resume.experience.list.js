import React, { Component } from 'react';

class ResumeExperienceList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			experienceList: this.props.experienceList
		};
	}

	render() {

		const description = (desc) => desc.map(obj => {
			if(obj) {
				const sub_topic = obj.sub_topic.map(val => <li> { val } </li> ); 
				return (
					<ul>
						<li> { obj.topic }
							<ul> { sub_topic } </ul>
						</li>
					</ul>
				);
			}
   
		});

		const experience = this.state.resume.map(obj => {
			return (
				<div>
					<div className="row">
						<div className="col-md-6">
							<h4>{ obj.department }, { obj.title }</h4>
							<h4>{ obj.company }, { obj.location}</h4>
						</div>
						<div className="col-md-6">
							<h4 className="text-right">{ obj.dates }</h4>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<p>{ obj.summary }</p>
							{ description(obj.description) }
						</div>
					</div>
				</div>
			);
		});

		return (
			<div>
				{ experience }
			</div>
		);
	}
}

export default ResumeExperienceList;