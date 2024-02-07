import { INCREMENT, DECREMENT, INCREMENT_BY_AMOUNT } from "../Reducers/CounterReducer";

//ACTION CREATORS
//This function simply return a action to use in reducers
//You create theme in app side to but this way help to reduce :) complexy our app and increase clean coding

export const increment = () => {
    return {
        type: INCREMENT
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}

export const incrementByAmount = (amount) => {
    return {
        type: INCREMENT_BY_AMOUNT,
        payload: {
            amount: amount
        }
    }
}

