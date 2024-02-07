import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByMount } from '../store/counterSlice';

const Counter = () => {
    console.log('Modern Counter Creater');
    const count = useSelector(state => {
        return state.counter
    });
    const dispatch = useDispatch();
    return (
        <div style={{marginBottom: '10px'}} >
            <p>Count: {count.value}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByMount(10))}>incrementByMount</button>
        </div>
    )
}

export default Counter
