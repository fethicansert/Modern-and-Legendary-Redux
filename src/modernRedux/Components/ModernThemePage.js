import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice';

const ThemePage = () => {
    console.log("Modern Theme Created");
    const isDark = useSelector(state => state.theme).isDark;
    const dispatch = useDispatch()
    const style = {
        background : isDark  ? 'rgba(0, 0, 0, 0.85)' : 'white',
        border: isDark  ? '#EB1EDC 2px solid': '#2A1EEB 2px solid'
    }

    const buttonStyle = {
        background : isDark ? '#EB1EDC' : '#2A1EEB'
    }
    return (
        <div className='theme-box' style={style}>
            <button style={buttonStyle} onClick={() => dispatch(toggleTheme())}>{isDark ? 'Light' : 'Dark'}</button>
        </div>
    )
}

export default ThemePage
