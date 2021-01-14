import {SAVE_COMMENT,FETCH_COMMENTS } from 'redux/type/type.js';


export const commentReducer = (state=[], action) =>{
switch(action.type){

    case SAVE_COMMENT:
        return [...state, action.payload];

    case FETCH_COMMENTS: 
        const comFetched =  action.payload.map(com=>com.name);
        return [...state, ...comFetched];

    default :
        return state;

}
}