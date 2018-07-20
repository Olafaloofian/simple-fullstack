// Import all neccessary packages and comonents here at the top.
import React, { Component } from 'react';
import './App.css';
import axios from'axios';
import { Route, Link } from react-router-dom //You're going to want to link things together here in the main app file.
import url from './api' //Optional for storing url in separate file
import Class from "./components/stateful_component"
import DoSomething from "./components/stateless_component"
import routes from "./routes"

class App extends Component {
  //You can build out a constructor function here if you want, but it might be best to keep all that in the separate components.
  functioncall() {
    return ("Function called!")
  }

  login() {
    const redirectUri = encodeURIComponent(window.location.origin + '/auth/callback')
    window.location = `https://${process.env.REACT_APP_AUTH0_DOMAIN}/authorize?client_id=${process.env.REACT_APP_AUTH0_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`
  }

  render() {
    //Your last chance to console log!
    return (
      //Here is where all the HTML and CSS come in, eh?
      <div>
        <nav>
          {/* Some navigational linking */}
          <Link to = "/">Home</Link>
          <Link to = "/page1">Page 1</Link>
          <Link to = "/page2">Page 2</Link>
        </nav>
        <div>
          {/* Some Routing! */}
          <Route path = "/class" render={() =>
            <Class>
              <Route path = "/class/classpage1" component={ClassPage1} />
              <Route path = "/class/classpage2" component={ClassPage2} />
            </Class>
          }/>
          {/* These are your components. Add props to them here and call the props uing props. (statless) or this.props. (stateful) in the component's file */}
          <DoSomething thisIsAProp={functioncall()} />
          <header>
          {/* Set up your routing as needed */}
          <Route exact path="/route" component={Component} />
          <Link to="/dosomething">Do Something</Link>
          </header>
          {/* Put the routes anywhere you want in the render */}
          {routes}
          {/* Below is the Auth0 login. You can also make it aa <a /> and write a variable for the href */}
          <button onClick={this.login}>Login</button>
          {/* You can also make a logout button to reset the state of the user object wherever it is. */}
        </div>
      </div>
    );
  }
}

export default App;
