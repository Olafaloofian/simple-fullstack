// Import all neccessary packages and comonents here at the top.
import React, { Component } from 'react';
import './App.css';
import axios from'axios';
import { Link } from react-router-dom //You're going to want to link things together here in the main app file.
import url from './api' //Optional for storing url in separate file
import Class from "./components/stateful_component"
import DoSomething from "./components/stateless_component"

class App extends Component {
  //You can build out a constructor function here if you want, but it might be best to keep all that in the separate components.
  render() {
    //Your last chance to console log!
    return (
      //Here is where all the HTML and CSS come in, eh?
      <div>
        <Class thisIsAProp=functioncall() />
        {/* These are your components. Add props to them here and call the props uing props. (statless) or this.props. (stateful) in the component's file */}
        <DoSomething />
        <header>
        <Link to="/">Class</Link>
        {/* Set up your routing as needed */}
        <Link to="/dosomething">Do Something</Link>
        </header>
      </div>
    );
  }
}

export default App;
