// This is where the redux store is created. The reducer holds and manages most of the store data.
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'

export default createStore( reducer, applyMiddleware( promiseMiddleware() ) )

// If you want to use the Redux DevTools, add this to the reducer function: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()