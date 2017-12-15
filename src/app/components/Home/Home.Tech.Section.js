import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class HomeTechSection extends Component {

	constructor(props) {
		super(props);
		this.state = {
			technology: {
				'Languages': ['Javascript', 'NodeJS', 'HTML', 'CSS', 'AngularJS', 'ReactJS', 'Java', 'Visual Basic', 'eSQL'],
				'Databases': ['Cassandra', 'Oracle', 'Mongo'],
				'Servers': ['Nginx', 'Tomcat', 'Websphere'],
				'Applications': ['Visual Studio Code', 'Eclipse', 'QTP/UFT', 'Photoshop', 'Illustrator', 'Premiere', 'Final Cut Studios'],
				'Other Technolgies': ['Git', 'Webpack', 'Bootstrap', 'SVN']
			}
		};
	}

	render() {

		const technology = this.state.technology;

		const techHeaders = Object.keys(technology).map(colName =>  <th>{ colName }</th> );
  
		const techCol = Object.keys(technology).map((key) => {

			const techList = technology[key].map(val => <li>{ val }</li> );

			return <td><ul className="home-tech-list"> { techList } </ul></td>;
            
		});

		return (
			<div>
				<h3>Technology</h3>
				<Table>
					<thead>
						<tr>
							{ techHeaders }
						</tr>
					</thead>
					<tbody>
						<tr>
							{ techCol }
						</tr>
					</tbody>
				</Table>                
			</div>
		);
	}
}

export default HomeTechSection;