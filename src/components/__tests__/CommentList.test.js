import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import ComponentList from "components/ComponentList";

let wrapped;
const initialState = {
    comments : ['comment3','dlfkdldfkdmf','skdfj']
}

beforeEach(() => {
    wrapped = mount(
        <Root initialState={initialState} >
            <ComponentList />
        </Root>
    );
});

test("creates on LI per comment", () => {
    expect(wrapped.find('li').length).toEqual(3);
});
