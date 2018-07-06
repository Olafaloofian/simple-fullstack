import React, { Component } from  'react';
import axios from 'axios'
//You can make a separate, specific .css style file and import it here

export default class Class extends Component {
    constructor () {
        super();

        this.state = {
            property1: "",
            property2: 1,
            property3: []
        }
    }
    componentDidMount() {
        console.log('Component mounted!') //Logs if component mounts
        axios.get('external or internal api url').then(res => {
        //Axios calls can have parameters (/:parameter{body}) and queries (?query=${query})!
        //Use console logs here to determine response data flow
            this.setState({
                property1: res.data,
                property2: res.data.sub1,
                property3: res.data.sub2
            })
            this.function()
        })
    }
    // Use other funtions with axios.put, axios.post, and axios.delete to manipulate data from the backend
    function() {
        console.log('This function can really do anything you want!')
    }
    render () {
        return(
            <div>
                <div>{this.state.property2}</div>
                {/* This will display the property's state straight up */}
                <div >{this.state.property3}</div>
                <div>
                    {this.state.property1.map(prop => {
                    return(
                    <div key={prop.id}>
                        <h1>{prop.val1}</h1>
                        <h2>{prop.val2}</h2>
                        <div><img src={prop.val3} alt={prop.val1} width="400"/></div>
                        )
                        })}
                {/* This is how to map out a property onto a page correctly */}
                    </div>
                </div>
            </div>
        )
    }
}
// This function is stateful because a constructor was used to store data