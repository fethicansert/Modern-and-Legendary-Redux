import { createStore, combineReducers} from 'redux';

import  counterReducer  from './Reducers/CounterReducer';
import themeReducer from './Reducers/ThemeReducer';
const rootReducer =  combineReducers({
    counter: counterReducer,
    theme: themeReducer
})

const store = createStore(rootReducer);

export default store;