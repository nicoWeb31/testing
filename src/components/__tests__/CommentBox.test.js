import React from "react";
import CommentBox from "components/CommentBox";
import Root from 'Root'

import { mount } from "enzyme";

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox /></Root>);
});
afterEach(() => {
    wrapped.unmount();
});




test("has a textarea and button", () => {
    // console.log(wrapped.find('textarea').length);
    // console.log(wrapped.find('button').length);
    expect(wrapped.find("textarea").length).toBe(1);
    expect(wrapped.find("button").length).toEqual(2);
});


describe('the textarea', () => {

    beforeEach(() => {
        wrapped
        .find("textarea")
        .simulate("change", {
            target: { value: "new comment" },
        })
        .update();
    })

    test("has a text area thats unser type in", () => {
        
    
        expect(wrapped.find("textarea").prop("value")).toBe("new comment");
    });
    
    test("has onSubmit by user, textarea is empty", () => {
        // wrapped
        //     .find("textarea")
        //     .simulate("change", { target: { value: "" } })
        //     .update();
        wrapped.find("form").simulate("submit").update();
    
        expect(wrapped.find("textarea").prop("value")).toBe("");
    });

})

