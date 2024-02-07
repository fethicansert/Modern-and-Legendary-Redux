//Action types help us to prevent error
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_BY_AMOUNT = 'INCREMENT_BY_AMOUNT';

const initalState = { //iniital value of reducer 
    count: 0
}

const counterReducer = (state = initalState, action) => {
    //when we use dispatch with action creators it return action type to determine action to update state
    switch(action.type){ 
        case INCREMENT :
            return {                                //we use shallow copy to return new state 
                ...state, count: state.count + 1    //i can't directly change the state like state.count = bla bla bla
            };                                      //beacuse we use object and object use refences
        case DECREMENT :
            return { 
                ...state, count: state.count - 1
            }
        case INCREMENT_BY_AMOUNT :
            return {
                ...state, count: state.count + action.payload.amount  //payload coming with action creators to use in this actions
            }                                                         //it's a data to update state with giving value or values
        default :
            return state;
    }
}

export default counterReducer;