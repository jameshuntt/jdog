import React, { Component } from 'react'
import ServicesSavannah from './ServicesSavannah'
import ServicesAtlanta from './ServicesAtlanta'
import ServicesAlbany from './ServicesAlbany'

export default class Services extends Component {
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
}
