import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'

export default class ContactAlbany extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
        <h1>Albany</h1>
        <div xs={12} md={4}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div xs={12} md={4}>
          <h1>Lorem Ipsum</h1>
          <ul>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>
            <li>Strawberry</li>
            <li>Grape</li>
          </ul>
        </div>
        <div xs={12} md={4}>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse 
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
            cupidatat non proident, sunt in culpa qui officia deserunt mollit 
            anim id est laborum.
          </p>
          </div>
          </Jumbotron>
      </div>
    )
  }
}
