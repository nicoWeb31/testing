import {SAVE_COMMENT } from 'redux/type/type.js';

export const saveComment = (comment) =>{

    return {type: SAVE_COMMENT, payload: comment};

}