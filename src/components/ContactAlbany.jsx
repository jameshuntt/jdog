import React, { Component } from 'react'
import { Jumbotron, Row, Col, Button } from 'react-bootstrap';

export default class ContactAlbany extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <Row>
            <Col xs={12}>
              <h1>We are here for you</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={4}>
              <h1>Email</h1>
              <br></br>
              <br></br>
              <br></br>
              <p>something@jdogempire.com</p>
              <br></br>
              <br></br>
              <Button>Send Email Now</Button>
            </Col>
            <Col xs={12} md={4}>
            <h1>Office Phone</h1>
              <br></br>
              <br></br>
              <br></br>
              <p>something@jdogempire.com</p>
              <br></br>
              <br></br>
              <Button>Send Email Now</Button>
            </Col>
            <Col xs={12} md={4}>
            <h1>Owner Phone</h1>
              <br></br>
              <br></br>
              <br></br>
              <p>something@jdogempire.com</p>
              <br></br>
              <br></br>
              <Button>Send Email Now</Button>
            </Col>
          </Row>
        </Jumbotron>
      </div>
    )
  }
}
