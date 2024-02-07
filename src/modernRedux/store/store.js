import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
import themeReducer from "./themeSlice.js";


export default configureStore({
    reducer : {
        counter: counterReducer,
        theme: themeReducer
    },
})