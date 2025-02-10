import { createStore} from 'redux'

// Define the initial state
const initialState = 0

// Define the reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1;
        case 'RESET':
            return initialState;
        case 'ADD_N':
            console.log(action.num);
            return state+parseInt(action.num) ;
            
        default:
            return state
    }
}

// Create the Redux store
export const store = createStore(reducer)