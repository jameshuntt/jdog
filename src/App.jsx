import React from 'react'
import './App.css'
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom'
import Nvbr from './components/CustomNavbar'
import Home from './components/Home'
import InTheCommunity from './components/InTheCommunity'
import Services from './components/Services'
import ContactUs from './ContactUs'
import About from './components/About'
import GetInvolved from './components/GetInvolved'

function App() {
  return (
    <div className="App">
      <Nvbr />
      <Redirect from="/" to="/Home"/>
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route path="/InTheCommunity" component={InTheCommunity} />
        <Route path="/Services" component={Services} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/WhoAreWe?" component={About} />
        <Route path="/GetInvolved" component={GetInvolved} />
      </Switch>
      <Home />

    </div>
  );
}

export default App;