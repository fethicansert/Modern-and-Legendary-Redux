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
        background : isDark  ? 'rgba(0, 0, 0, 0.85)' : 'white',
        border: isDark  ? '#EB1EDC 2px solid': '#2A1EEB 2px solid'
    }

    const buttonStyle = {
        background : isDark ? '#EB1EDC' : '#2A1EEB'
    }
    
    return (
        <div className='theme-box' style={style}>
            <button style={buttonStyle} onClick={() => dispatch(toggleTheme())}>{ isDark ? 'Light': 'Dark' }</button>
        </div>
    );
}

export default LegendRxThemePage
