import { AUTHENTICATION_CHANGE } from 'redux/type/type.js'


export const authReducer = (state = false, action) =>{
    switch(action.type){
    
        case AUTHENTICATION_CHANGE:
            return action.payload;

    
        default :
            return state;
    
    }
    }