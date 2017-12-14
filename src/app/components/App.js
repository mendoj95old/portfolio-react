import React, { Component, ReactPropTypes } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from './Home/Home.Page';
import ProjectPage from './Project/Project.Page';
import ResumePage from './Resume/Resume.Page';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<Navigation />
					<div className="layout">
						<div className="container-fluid sub-layout">
							<Route exact path="/" component={HomePage} />
							<Route path="/projects" component={ProjectPage} />
							<Route path="/resume" component={ResumePage} />
						</div>
					</div>
				</div>
			</Router>
		);
	}
}


export default App;