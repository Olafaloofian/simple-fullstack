import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// This is necessary for Redux
import {Provider} from 'react-redux'
import store from "./ducks/store"
// This is necessary for routing
import { BrowserRouter as Router } from 'react-router-dom'

// Set Provider store
// Wrap App in Router
ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker(); // Sometimes the registerServiceWorker can screw things up. It's ok to diable it here and in the import.
