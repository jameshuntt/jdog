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
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">
                        <img className="bologna" src={logo} alt=" " />
                        <img className="bologna" src={logo2} alt=" " />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="#features">In Your Community</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Dropdown className="button">
                        <Dropdown.Toggle className="button">
                            Location Selector
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Albany</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Savannah</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Atlanta</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Location className="button"/>
                </Navbar>
            </div>
        )
    }
}

export default Nvbr