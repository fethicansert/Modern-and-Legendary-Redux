import { createSlice } from "@reduxjs/toolkit";

//This style of creation reduce is DUCKS pattern(using createSlice)

const initialState = { value: 0 }; //initial state of reducer

//createSlice => automatically generates action creators and action types that correspond to the reducers and state.
export const counterSlice = createSlice({
    name: 'counter', // Hook name used in redux dev tools to help us to determine whic state change and which function used
    initialState,    //initial state of reducer
    reducers: {                     //This functions are called caseReducers
        increment: (state) => {     //In Moder Redux we create action and type in same type it's REDUCE :) Complexy 
            state.value += 1;       //Also in modern way we use autmaticly immer libray to create deepcopy(draft) 
        },                          //and manuplate deepcopy of orginal state
        decrement: (state) => {     //don't need to use shallow copy easy use state to update state
            state.value -= 1;       //don't need to return state back it's like mutating state but not
        },
        incrementByMount: (state, action) => {
            state.value += action.payload
        }
    }
});


console.log(counterSlice);
//Action creators are generated for each case reducer function
//if reducer function don't have a action actioncreators => ActionCreatorWithoutPayload<"counter/increment">
//if reducer funcsion have a action this  actioncretors => ActionCreatorWithPayload<any, "counter/incrementByMount">
export const { increment, decrement, incrementByMount }  = counterSlice.actions; //counterSlice.action hold to functions(action creators);
export default counterSlice.reducer //return silec's reducer




//slice not only mean reducer it's has action type action creators and type
//it's a slice of store ...