import { combineReducers } from 'redux';
import { commentReducer } from 'redux/reducer/commentReducer';



export const reducer =  combineReducers({
    comments: commentReducer,
})