import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown,Dropdown } from 'react-bootstrap'
import logo from './assets/jdogimage.png'
import logo2 from './assets/jdogwords.png'
import Location from './SwitchLocation'
import './CustomNavbar.css'

class Nvbr extends Component {
    render () {
        return (
            <div>
                <Navbar className="Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" ></Navbar>
                <Navbar className="Navbar" collapseOnSelect expand="lg" bg="light" variant="light" >
                    <Navbar.Brand href="#home">
                        <img className="bologna" src={logo} alt=" " />
                        <img className="bologna" src={logo2} alt=" " />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#features">In Your Community</Nav.Link>

                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                    
                </Navbar>
            </div>
        )
    }
}

export default Nvbr