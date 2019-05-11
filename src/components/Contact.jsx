import React, { Component } from 'react'
import ContactSavannah from './ContactSavannah'
import ContactAtlanta from './ContactAtlanta'
import ContactAlbany from './ContactAlbany'

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
export default class Contact extends Component {
    
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