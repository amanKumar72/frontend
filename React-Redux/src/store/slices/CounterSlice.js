import {createSlice} from '@reduxjs/toolkit'


// Define the initial state
const initialState ={
    value: 0,  // Initial value of the counter
}


// Initialize the state and reducer functions for counter related operations
// the state represents the current state and
// and the parameters passed at the time of dispatch are accessed by the action.dispatch 
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
           state.value-=1
        },
        reset:(state)=>{
            state.value=0;
        },
        addN:(state,action)=>{
            console.log(typeof action.payload);
            console.log(typeof state.value);
            
            state.value+= parseInt(action.payload);
        }
    }})


    // Export the action creators for the counter related operations
    export const {increment,decrement,reset,addN} =counterSlice.actions

    // Export the selectors for the counter state
    export default counterSlice.reducer;