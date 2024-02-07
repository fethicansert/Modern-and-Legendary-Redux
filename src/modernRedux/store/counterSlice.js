import { createSlice} from "@reduxjs/toolkit";

//createSlice => automatically generates action creators and action types that correspond to the reducers and state.
export const counterSlice = createSlice({
    name: 'counter', //reducer name to use in useSelector Hook
    initialState: { //initial state of reducer
        value: 0
    },
    reducers: {
        increment: (state) => { //In Moder Redux we create action and type in same type it's REDUCE :) Complexy 
            state.value += 1;   //Also in modern way we use autmaticly immer libray to create deepcopy(draft) 
        },                      //and manuplate deepcopy of orginal state
        decrement: (state) => { //don't need to use shallow copy easy use state to update state
            state.value -= 1;
        },
        incrementByMount: (state, action) => {
            state.value += action.payload
        }
    }
});



// console.log(counterSlice.actions);
// console.log(counterSlice);
// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByMount }  = counterSlice.actions; //counterSlice.action hold to functions(action creators);
export default counterSlice.reducer