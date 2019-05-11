import React, { Component } from 'react'
import { Dropdown } from 'react-bootstrap'
import './SwitchLocation.css'

export default class SwitchLocation extends Component {
  render() {
    return (
      <div>
        <Dropdown className="button">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Albany</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Savannah</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Atlanta</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
