import React, { Component } from 'react';

class ResumePage extends Component {
	render() {
		return (
			<div>
				<h2>Resume</h2>
				<hr />
				<div className="container-fluid">

					<div className="row">
						<div className="col-md-6">
							<h4>Middleware Engineering, Associate Application Developer</h4>
							<h4>ADP (Automatic Data Processing, LLC), Roseland, NJ</h4>
						</div>
						<div className="col-md-6">
							<h4 className="text-right">May 2016 – Present</h4>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<p>Support application development team in enhancing and refining ADP’s middleware application to enable multiple applications to send data between each other.</p>
							<ul>
								<li>Work in a development team to create file upload application on top of IBM’s Sterling File gateway rest APIs
									<ul>
										<li>Design and develop application using NodeJS with ExpressJS for backend code and AngularJS to render the frontend.</li>
										<li>Work closely with UX Designer to translate mock ups into fully functioning application.</li>
										<li>Develop APIs using node.js to allow UI and IBM’s api to connect to Cassandra database</li>
										<li>Write Cassandra database scripts </li>
										<li>Create and modify Jenkins deployment scripts to production environments</li>
										<li>Setup server to run node.js application as a service</li>
										<li>Dockerized application into container – nginx, nodejs, and cassandraDB</li>
									</ul>
								</li>
								<li>Work with development team to enhance and innovate middleware application functionality to support multiple application platforms within the company
									<ul>
										<li>Develop and enhance Java Web Application built on Struts framework using Java, HTML, Javascript, and CSS</li>
										<li>Develop MQ messaging flows, web service for SOAP and REST routing, and FTE services using Java and IBM ESQL</li>
										<li>Create SQL scripts and queries to Oracle database</li>
										<li>Create and modify XSLT mappings for data transformations like XML to JSON</li>
									</ul>
								</li>
								<li>Work on a team as front-end Developer to create a management reporting tool for Infrastructure and Operation department to track ADP’s products and projects
									<ul>
										<li>Create user interface using HTML, CSS, and AngularJS</li>
										<li>Use AngularJS to call Java rest APIs</li>
										<li>Create back-end rest APIs using Java to connect to Oracle database</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default ResumePage;