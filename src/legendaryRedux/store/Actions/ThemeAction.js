import { TOGGLE_THEME } from '../Reducers/ThemeReducer';

//ACTION CREATORS
//This function simply return a action to use in reducers
//You create theme in app side to but this way help to reduce :) complexy our app and increase clean coding

export function toggleTheme(){
    return {
        type: TOGGLE_THEME
    }
};