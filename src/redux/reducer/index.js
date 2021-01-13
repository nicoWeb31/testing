import { combineReducers } from 'redux';
import { commentReducer } from 'redux/reducer/commentReducer';



export default  combineReducers({
    comments: commentReducer,
})