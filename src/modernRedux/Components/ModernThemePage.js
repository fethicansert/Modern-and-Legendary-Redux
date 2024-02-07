import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../store/themeSlice';

const ThemePage = () => {
    console.log("Modern Theme Created");
    const isDark = useSelector(state => state.theme).isDark;
    const dispatch = useDispatch()
    const style = {
        background : isDark  ? 'black' : 'white',
        border: isDark  ? 'white 1px solid': 'black 1px solid'
    }
    return (
        <div className='box' style={style}>
            <button onClick={() => dispatch(toggleTheme())}>{isDark ? 'Light' : 'Dark'}</button>
        </div>
    )
}

export default ThemePage
