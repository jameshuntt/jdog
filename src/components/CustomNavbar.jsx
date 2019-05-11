import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import logo from './assets/jdogimage.png'
import logo2 from './assets/jdogwords.png'
import './CustomNavbar.css'

class Nvbr extends Component {
    render () {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img className="bologna" src={logo} alt=" " />
                        <img className="bologna" src={logo2} alt=" " />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link><NavLink to="/InTheCommunity">In The Community</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/Services">Services</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/ContactUs">Contact Us</NavLink></Nav.Link>
                        <NavDropdown title="About Us" id="collasible-nav-dropdown">
                            <NavDropdown.Item><NavLink to="/About">Who are we?</NavLink></NavDropdown.Item>
                            <NavDropdown.Item><NavLink to="InTheCommunity">In the Community</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item><NavLink to="/GetInvolved">Get Involved</NavLink></NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Nvbr