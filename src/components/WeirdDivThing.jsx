import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

class DivThing extends Component {
    state = {
        on: false,
    };
    toggle = () => {
        this.setState({
            on: !this/state.on
        });
    };
    render() {
        return (
            <div>
                {this.state.on && <h1>Toggle Me</h1>}
                <button onClick={this.toggle}>Show/Hide</button>
            </div>
        );
    }
    /*render () {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }*/
}

export default DivThing