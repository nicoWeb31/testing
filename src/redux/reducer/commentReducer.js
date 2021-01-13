import {SAVE_COMMENT } from 'redux/type/type.js';


export const commentReducer = (state=[], action) =>{
switch(action.type){

    case SAVE_COMMENT:
        return [...state, action.payload];

    default :
        return state;

}
}