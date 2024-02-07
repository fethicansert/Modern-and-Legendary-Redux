import { useDispatch, useSelector, useStore } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/Actions/CounterActions'


const Counter = () => {
    console.log("Legend Theme Created");
    //getting the state from store we should use choose required state from store to prevent unnecessary renders
    const count = useSelector(state => state.counter).count; 
    //we can use our action creators with this dispatch function to change state
    const dispatch = useDispatch();
    return (
        <div style={{marginBottom: '10px'}}>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increase</button>
            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(incrementByAmount(10))}>incrementByAmount</button>
        </div>
    )
}

export default Counter
