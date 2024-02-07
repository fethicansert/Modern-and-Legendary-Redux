import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/Actions/ThemeAction'
const LegendRxThemePage = () => {
    console.log("Legend Counter Created");
    //getting the state from store we should use choose required state from store to prevent unnecessary renders
    const isDark = useSelector(state => state.theme).isDark;
    //we can use our action creators with this dispatch function to change state
    const dispatch = useDispatch();
    const style = {
        background : isDark  ? 'black' : 'white',
        border: isDark  ? 'white 1px solid': 'black 1px solid'
    }
    
    return (
        <div className='box' style={style}>
            <button onClick={() => dispatch(toggleTheme())}>{ isDark ? 'Light': 'Dark' }</button>
        </div>
    );
}

export default LegendRxThemePage
