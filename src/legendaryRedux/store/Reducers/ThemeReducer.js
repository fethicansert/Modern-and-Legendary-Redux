//Action types help us to prevent error
export const TOGGLE_THEME = 'TOGGLE_THEME';

const initialState = { //iniital value of reducer 
    isDark : false
}

const themeReducer = (state = initialState, action) => {
    if(action.type === TOGGLE_THEME) {  //We don't have to swicth we use if else too np dude
        return {...state, isDark : !state.isDark }
    } else {
        return state;
    }
}   

export default themeReducer;