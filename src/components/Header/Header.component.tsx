import React from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav } from 'react-bootstrap';
import { Search } from '../Search/Search.component';
import './Header.scss';

interface props {
	disabledMenuItems?: string[];
}

class Header extends React.Component<props, null> {
	static defaultProps = {
		disabledMenuItems: ["disabled"]
	}

	onSearchHandler = (search: string) => {
		console.log("New search: ", search)
	}

	isRouteDisabled = (route: string): boolean => {
		return this.props.disabledMenuItems ? this.props.disabledMenuItems.includes(route) : false;		
	}

	render() {
		return (
		  <Navbar bg="dark" expand="lg" variant="dark">
		    <Navbar.Brand><Nav.Link to="/">Carousel</Nav.Link></Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
			    <Nav className="mr-auto">
			      <LinkContainer to="/" exact>
			      	<Nav.Link>Home</Nav.Link>
			      </LinkContainer>
			      <LinkContainer to="/link" className={this.isRouteDisabled("link") ? "disabled" : ""}>
			      	<Nav.Link>Link</Nav.Link>
			      </LinkContainer>
			      <LinkContainer to="/disabled" className={this.isRouteDisabled("disabled") ? "disabled" : ""}>
			      	<Nav.Link>Disabled</Nav.Link>
			      </LinkContainer>
			    </Nav>
			   	<Search onSearch={this.onSearchHandler} />
			  </Navbar.Collapse>
	  	</Navbar>
	  )
	}
}

export default Header;
