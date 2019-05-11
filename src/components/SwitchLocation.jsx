import React, { Component } from 'react'

class Location extends Component {
  constructor(){
    super();

    this.state = {
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event){
    event.preventDefault();

    this.setState({showMenu: true,}, () => {
      document.addEventListener('click', this.closeMenu);
    } );
  }

  closeMenu(event){
    if (!this.dropdownMenu.contains(event.target)){
      this.setState({ showMenu: false }, () =>{
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render () {
    return (
      <div>
        <button className="button" onClick={this.showMenu}>
          Location Selector
        </button>

        {
          this.state.showMenu
          ?(
          <div 
            className="menu" 
            ref={(element) => {
              this.dropdownMenu = element;
            }}
          >
          <ul>
            <li><button>Schenectady</button></li>
            <li><button>Albany</button></li>
            <li><button>Savannah</button></li>
          </ul>
          </div>

          )
          :(
            null
          )
        }
      </div>
    )
  }
}

export default Location