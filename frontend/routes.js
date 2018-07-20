// This file will set up a route switcher for you to use anywhere else in the project
import React from 'react'
import { Route, Switch } from "react-router-dom"
import Component1 from "./components/component1"
import Component2 from "./components/component2"
import Component3 from './components/component3'

//When you use this switch in other files, import routes and use {routes}
export default (
        <Switch>
            <Route exact path="/"  component={ Component1 } />
            <Route path="/component2" component={ Component2 } />
            <Route path="/component3/:param" component={ Component3 } />
        </Switch>
)
