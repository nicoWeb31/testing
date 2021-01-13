import {SAVE_COMMENT } from 'redux/type';

export const saveComment = (comment) =>{

    return {type: SAVE_COMMENT, payload: comment};

}