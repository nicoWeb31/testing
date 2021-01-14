import React from 'react';
import { mount } from "enzyme";
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name : 'Fetch #1'},{name : 'Fetch #2'},{name : 'Fetch #3'}]
    })
})

afterEach(() =>{
    moxios.uninstall()
})


test( 'can fetch a list of comments and display them', (done) => {

    
    //attempt to render the entire app 
    const wrapped = mount(<Root><App/></Root>)


    //find the fetchButton and simulate a click event
    wrapped.find('.btn-fetchComment').simulate('click')

    moxios.wait(() => {
        wrapped.update()
        //expect to finf 500 li of comments !!! 
        expect( wrapped.find('li').length).toEqual(3);
        done();
        wrapped.unmount()

    })


})