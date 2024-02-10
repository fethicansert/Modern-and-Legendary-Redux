import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import themeReducer from "./themeSlice.js";

//we don't need combineReducers configure store automaticly hande combining of reducers
export default configureStore({ // creating of store
    reducer : {
        counter: counterReducer, //used in useSelector hook in app side to get state
        theme: themeReducer      //used in useSelector hook in app side to get state
    },
})