import {saveComment } from 'redux/actions';
import { SAVE_COMMENT } from "redux/type/type.js";

describe('saveComment', () => {
    test('has a correct type', () => {
        
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    })

    test('has a correct payload', () => {
        const action = saveComment('tuch my tralala')

        expect(action.payload).toEqual('tuch my tralala')
    })
})