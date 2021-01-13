import React from 'react';
import CommentBox from "components/CommentBox";

import { mount } from "enzyme";


test('has a textarea and button', ()=>{
const wrapped = mount(<CommentBox />);
// console.log(wrapped.find('textarea').length);
// console.log(wrapped.find('button').length);
expect(wrapped.find('textarea').length).toBe(1);
expect(wrapped.find('button').length).toEqual(1);


});