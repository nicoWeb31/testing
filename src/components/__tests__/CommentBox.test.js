import React from 'react';
import CommentBox from "components/CommentBox";

import { mount } from "enzyme";

let wrapped;
beforeEach(()=>{
    wrapped = mount(<CommentBox />);
})
afterEach(()=>{
    wrapped.unmount()
})



test('has a textarea and button', ()=>{

// console.log(wrapped.find('textarea').length);
// console.log(wrapped.find('button').length);
expect(wrapped.find('textarea').length).toBe(1);
expect(wrapped.find('button').length).toEqual(1);


});


test('has a text area thats unser type in', ()=>{

    wrapped.find('textarea').simulate('change', {
        target: {value: 'new comment'}
    })
})