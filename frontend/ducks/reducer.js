// The reducer file is where Redux will create and modify an object set in the store
const initialState = {
    objectKey1: value,
    onjectKey2: value
} // Initial store object

// Keep the action types stored in variables for easy debugging
const TYPE1 = 'TYPE1'
const TYPE2 = 'TYPE2'

export function fn1(param) {
    return {
        type: TYPE1,
        payload: param
    }
} // Updater function 1

export function fn2(param) {
    return {
        type: TYPE2,
        payload: param
    }
} // Updater function 2

// This switch function will conditionally set the state of the object in the store based on the programmer-defined action type
export default function reducer( state = initialState, action){ //setting a default value for state
    switch(action.type) {
        case TYPE1:
            return Object.assign({}, state, {objectKey1: action.payload }) // Method one for updating store state

        case TYPE2:
            return {...state, objectKey2: action.payload} // This is an equivalent method two for updating store state
            
        default: return state
    }
}
