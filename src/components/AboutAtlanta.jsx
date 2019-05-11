import React, { Component } from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
import CarouselAbout from './CarouselAbout'

export default class AboutAlbany extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
            <Col xs={12}>
              <h1>Atlanta</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <CarouselAbout />
            </Col>
            <Col xs={12} md={4}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <div>
                <h1>We are this</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>
                <h1>Lorem Ipsum</h1>
                <ul>
                  <li>Banana</li>
                  <li>Apple</li>
                  <li>Orange</li>
                  <li>Strawberry</li>
                  <li>Grape</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div>
                <h1>This are we</h1>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse 
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                  cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                  anim id est laborum.
                </p>
                </div>
              </Col>
            </Row>
          </Jumbotron>
      </div>
    )
  }
}
