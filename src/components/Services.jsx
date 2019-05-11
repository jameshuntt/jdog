import React, { Component } from 'react'
import AboutAlbany from './AboutAlbany'
import AboutAtlanta from './AboutAtlanta'
import AboutSavannah from './AboutSavannah'
import location from './location'

switch(location){
  case 0:
    export default class About extends Component {
      render(){
        return (
          <AboutAlbany />
        );
      }
    }
    break;
  case 1:
    export default class About extends Component {
      render(){
        return (
          <AboutAtlanta />
        )
      }
    }
    break;
  case 2:
    export default class About extends Component {
      render(){
        return (
          <AboutSavannah />
        )
      }
    }
    break;
}

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
