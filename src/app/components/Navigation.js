import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavItem  } from 'react-bootstrap';


class Navigation extends Component {
	render() {
		return (
			<Navbar collapseOnSelect fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						<a>Justin Mendoza</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<NavItem><Link to="/">Home</Link></NavItem>
					<NavItem><Link to="/resume">Resume</Link></NavItem>
					{/* <NavItem><Link to="/projects">Projects</Link></NavItem> */}
				</Nav>
			</Navbar>
		);
	}
}

export default Navigation;
