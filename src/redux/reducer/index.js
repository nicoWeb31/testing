import { combineReducers } from 'redux';
import { commentReducer } from 'redux/reducer/commentReducer';
import { authReducer } from 'redux/reducer/auth';



export default  combineReducers({
    comments: commentReducer,
    auth: authReducer
})